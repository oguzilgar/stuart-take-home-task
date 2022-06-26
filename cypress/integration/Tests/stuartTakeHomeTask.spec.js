/// <reference types="cypress" />
import requestPage from "../Pages/requestPage";
import {
  atLeastOneVehicleAvailableToDoRequest,
  orderID,
  isTotalCostDisplayedCorrectly,
  uniqueNameCreater,
  getDeliveryID,
} from "../../support/helpers/index";
import ongoingPage from "../Pages/ongoingPage";
import dashboardPage from "../Pages/dashboardPage";
import accountDetailsPage from "../Pages/accountDetailsPage";
import addressBookPage from "../Pages/addressBookPage";

const environment = Cypress.env("environment");
const { baseUrl: baseUrlEnv } = Cypress.env()[environment];

context("Stuart take home task", () => {
  let user;

  beforeEach(() => {
    cy.fixture(`userDatas/` + environment).then((userData) => {
      user = userData;
    });

    cy.clearLocalStorage();
    cy.visit(`${baseUrlEnv}`);
  });

  it("C1 The user should be able to login with valid credentials", () => {
    cy.login(user.userList.testUser1.email, user.userList.testUser1.password);
    cy.handlePackageRefundPopup();
  });

  it("C2 The user should be able to request a delivery", function () {
    let orderId = orderID(10);

    cy.login(user.userList.testUser1.email, user.userList.testUser1.password);
    cy.handlePackageRefundPopup();
    cy.isTestScenarioCorrect(user.testScenarioList[0]);

    requestPage.isRequestButtonDisabled();
    requestPage.isPickupComponentDisplayed();
    requestPage.isPickupAddressSearchEmpty();
    requestPage.typeAnAddressToPickupSearchBox(user.addressList[0]);
    requestPage.atLeastOneAddressFoundAtPickupSearchBox(user.addressList[0]);
    requestPage.selectTheAddressfromPickupSearchBoxDropdown(
      user.addressList[0]
    );
    requestPage.noPickupAddressErrorDisplayed();

    requestPage.isDropOffComponentDisplayed();
    requestPage.isDropOffAddressSearchEmpty();
    requestPage.typeAnAddressToDropOffSearchBox(user.addressList[1]);
    requestPage.atLeastOneAddressFoundAtDropOffSearchBox(user.addressList[1]);
    requestPage.selectTheAddressfromDropOffSearchBoxDropdown(
      user.addressList[1]
    );

    requestPage.typeOrderID(orderId);
    requestPage.noDropOffAddressErrorDisplayed();

    atLeastOneVehicleAvailableToDoRequest();

    requestPage.selectTheFirstAvailableVehicleType();
    requestPage.isNowselectedDefaultForSchedulingTime();
    requestPage.isRequestButtonEnabled();
    requestPage.clickRequestButton();

    ongoingPage.isOngoingPageDisplayed();
    ongoingPage.isTheJobDisplayed(orderId);

    getDeliveryID().then((deliveryId) => {
      cy.deleteJobViaApi(deliveryId)
    });
  });

  it("C3 The total cost should be displayed correctly", function () {
    cy.login(user.userList.testUser1.email, user.userList.testUser1.password);
    cy.handlePackageRefundPopup();
    cy.isTestScenarioCorrect(user.testScenarioList[0]);

    requestPage.isRequestButtonDisabled();
    requestPage.isPickupComponentDisplayed();
    requestPage.isPickupAddressSearchEmpty();
    requestPage.typeAnAddressToPickupSearchBox(user.addressList[0]);
    requestPage.atLeastOneAddressFoundAtPickupSearchBox(user.addressList[0]);
    requestPage.selectTheAddressfromPickupSearchBoxDropdown(
      user.addressList[0]
    );
    requestPage.noPickupAddressErrorDisplayed();

    requestPage.isDropOffComponentDisplayed();
    requestPage.isDropOffAddressSearchEmpty();
    requestPage.typeAnAddressToDropOffSearchBox(user.addressList[1]);
    requestPage.atLeastOneAddressFoundAtDropOffSearchBox(user.addressList[1]);
    requestPage.selectTheAddressfromDropOffSearchBoxDropdown(
      user.addressList[1]
    );

    requestPage.noDropOffAddressErrorDisplayed();

    atLeastOneVehicleAvailableToDoRequest();
    requestPage.selectTheFirstAvailableVehicleType();
    isTotalCostDisplayedCorrectly();
  });

  it("C4 The previously saved address info text should be displayed when enter the address in pickup component", function () {
    let uniqueName = uniqueNameCreater(10);

    cy.login(user.userList.testUser1.email, user.userList.testUser1.password);
    cy.handlePackageRefundPopup();
    cy.isTestScenarioCorrect(user.testScenarioList[0]);

    dashboardPage.isAccountMenuButtonDisplayed();
    dashboardPage.clickAccountMenuButton();
    dashboardPage.selectFromAccountMenuDropdown(user.accountMenuList[0]);
    accountDetailsPage.isAccountDetailsPageDisplayed();

    accountDetailsPage.clickSettingsListOption(user.settingsList[2]);
    addressBookPage.isAddressBookPageDisplayed();
    addressBookPage.isNewAddressButtonDisplayed();
    addressBookPage.clickNewAddressButton();
    addressBookPage.isNewAddressPopupDisplayed();
    addressBookPage.isSaveButtonDisabled();
    addressBookPage.enterNewAddressintoSearchBox(
      user.pickupUserList.testUser1.newAddress
    );
    addressBookPage.atLeastOneAddressFound();
    addressBookPage.selectTheAddressFound(
      user.pickupUserList.testUser1.newAddress
    );
    addressBookPage.enterFirstName(uniqueName);
    addressBookPage.isSaveButtonEnabled();
    addressBookPage.clickSaveButton();
    addressBookPage.isNewAddressPopupDisappeared();
    addressBookPage.isSavedAddressDisplayed(uniqueName);

    requestPage.navigateRequestPage();

    requestPage.isRequestButtonDisabled();
    requestPage.isPickupComponentDisplayed();
    requestPage.isPickupAddressSearchEmpty();
    requestPage.typeAnAddressToPickupSearchBox(
      user.pickupUserList.testUser1.newAddress
    );
    requestPage.atLeastOneAddressFoundAtPickupSearchBox(
      user.pickupUserList.testUser1.newAddress
    );
    requestPage.selectTheAddressfromPickupSearchBoxDropdown(
      user.pickupUserList.testUser1.newAddress
    );
    requestPage.noPickupAddressErrorDisplayed();
    requestPage.isSavedAddressInfoTextDisplayed();
  });
});
