import SELECTOR from "../../support/constants";

class accountDetailsPage {
  //is
  static isAccountDetailsPageDisplayed() {
    cy.url().should(`include`, `/settings/account-details`);
    cy.getBySel(SELECTOR.SETTINGS.ACCOUNT_DETAIL).should(`be.visible`);
  }

  //click
  static clickSettingsListOption(settingsName) {
    cy.get("#settingsPage ul").find(`span`).contains(settingsName).click();
  }
}

export default accountDetailsPage;
