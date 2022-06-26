import SELECTOR from "../../support/constants";

class ongoingPage {
  //is
  static isOngoingPageDisplayed() {
    cy.url().should(`include`, `/active?job`);
    cy.getBySel(SELECTOR.ONGOING.ONGOING_PAGE).should(`be.visible`);
  }

  static isTheJobDisplayed(orderID) {
    cy.contains(`Order ID: ` + `${orderID}`).should(`be.visible`);
  }
}

export default ongoingPage;