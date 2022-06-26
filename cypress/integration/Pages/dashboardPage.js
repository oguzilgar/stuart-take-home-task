import SELECTOR from "../../support/constants";

class dashboardPage {
  //is
  static isAccountMenuButtonDisplayed() {
    cy.getBySel(SELECTOR.ACCOUNT_MENU.ACCOUNT_MENU_ICON).should(`be.visible`);
  }

  //click
  static clickAccountMenuButton() {
    cy.getBySel(SELECTOR.ACCOUNT_MENU.ACCOUNT_MENU_ICON).click();
  }

  //select
  static selectFromAccountMenuDropdown(option) {
    cy.getBySel(SELECTOR.ACCOUNT_MENU.DROPDOWN_MENU_CONTAINER).contains(option).click();
  }

}

export default dashboardPage;
