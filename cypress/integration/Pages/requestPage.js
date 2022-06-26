import SELECTOR from "../../support/constants";

class requestPage {
  //is
  static isRequestButtonDisabled() {
    cy.getBySel(SELECTOR.REQUEST_DELIVERY.REQUEST_BUTTON).should(
      `have.attr`,
      `disabled`
    );
  }

  static isRequestButtonEnabled() {
    cy.getBySel(SELECTOR.REQUEST_DELIVERY.REQUEST_BUTTON).should(
      `not.have.attr`,
      `disabled`
    );
  }

  static isPickupComponentDisplayed() {
    cy.getBySel(SELECTOR.REQUEST_DELIVERY.PICKUP_CARD).should(`be.visible`);
  }

  static isDropOffComponentDisplayed() {
    cy.getBySel(SELECTOR.REQUEST_DELIVERY.DROPOFF_CARD).should(`be.visible`);
  }

  static isPickupAddressSearchEmpty() {
    cy.getBySel(SELECTOR.REQUEST_DELIVERY.PICKUP_SEARCH_BOX).should(
      `have.attr`,
      `value`,
      ``
    );
  }

  static isDropOffAddressSearchEmpty() {
    cy.getBySel(SELECTOR.REQUEST_DELIVERY.DROPOFF_SEARCH_BOX).should(
      `have.attr`,
      `value`,
      ``
    );
  }

  static isNowselectedDefaultForSchedulingTime() {
    cy.getByCompoundSel(
      SELECTOR.REQUEST_DELIVERY.SCHEDULING_CARD,
      SELECTOR.REQUEST_DELIVERY.NOW_OPTION
    ).should(`be.exist`);
  }

  static isSavedAddressInfoTextDisplayed() {
    cy.contains(`This place is in your address book`).should(`be.visible`);
  }

  //type
  static typeAnAddressToPickupSearchBox(address) {
    cy.getBySel(SELECTOR.REQUEST_DELIVERY.PICKUP_SEARCH_BOX).type(address);
  }

  static typeAnAddressToDropOffSearchBox(address) {
    cy.getBySel(SELECTOR.REQUEST_DELIVERY.DROPOFF_SEARCH_BOX).type(address);
  }

  static typeOrderID(orderID) {
    cy.getBySel(SELECTOR.REQUEST_DELIVERY.ORDER_ID).type(orderID, {
      force: true,
    });
  }

  //at Least One Address Found
  static atLeastOneAddressFoundAtPickupSearchBox(address) {
    cy.getByCompoundSel(
      SELECTOR.REQUEST_DELIVERY.PICKUP_CARD,
      SELECTOR.REQUEST_DELIVERY.SEARCH_AUTO
    )
      .find(`li`)
      .should(`have.length.above`, 0);

    cy.waitUntil(() => cy.contains(address).should(`be.visible`));
  }

  static atLeastOneAddressFoundAtDropOffSearchBox(address) {
    cy.getByCompoundSel(
      SELECTOR.REQUEST_DELIVERY.DROPOFF_CARD,
      SELECTOR.REQUEST_DELIVERY.SEARCH_AUTO
    )
      .find(`li`)
      .should(`have.length.above`, 0);

    cy.waitUntil(() => cy.contains(address).should(`be.visible`));
  }

  //get
  static getTheTotalNumberOfVehicles() {
    return new Promise((resolve) => {
      cy.get("#vehicleCard input").then((listing) => {
        let listingCount = Cypress.$(listing).length;
        resolve(listingCount);
      });
    });
  }

  static getTheTotalNumberOfNotAvailableVehicles() {
    return new Promise((resolve) => {
      cy.get("#vehicleCard input[disabled]").then((listing) => {
        let listingCount = Cypress.$(listing).length;
        resolve(listingCount);
      });
    });
  }

  //select
  static selectTheAddressfromPickupSearchBoxDropdown(address) {
    cy.get("#pickUpCard-0 #react-autowhatever-1 li")
      .find(`span`)
      .contains(address)
      .should(`be.visible`)
      .click();
  }

  static selectTheAddressfromDropOffSearchBoxDropdown(address) {
    cy.get("#dropOffCard-0 #react-autowhatever-1 li")
      .find(`span`)
      .contains(address)
      .should(`be.visible`)
      .click();
  }

  static selectTheFirstAvailableVehicleType() {
    cy.get("#vehicleCard td strong span").first().should(`be.visible`).click();
  }

  //error
  static noPickupAddressErrorDisplayed() {
    cy.getBySel(SELECTOR.REQUEST_DELIVERY.PICKUP_ERROR).should(`not.be.exist`);
  }

  static noDropOffAddressErrorDisplayed() {
    cy.getBySel(SELECTOR.REQUEST_DELIVERY.DROPOFF_ERROR).should(`not.be.exist`);
  }

  //click
  static clickRequestButton() {
    cy.getBySel(SELECTOR.REQUEST_DELIVERY.REQUEST_BUTTON).click();
  }

  //navigate module
  static navigateRequestPage() {
    cy.getBySel(SELECTOR.DASHBOARD.REQUEST_DELIVERY).click();
  }
}

export default requestPage;
