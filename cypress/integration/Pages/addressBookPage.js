import SELECTOR from "../../support/constants";

class addressBookPage {
  //is
  static isAddressBookPageDisplayed() {
    cy.url().should(`include`, `/settings/address-book`);
    cy.getBySel(SELECTOR.ADDRESS_BOOK.ADDRESS_CONTAINER).should(`be.visible`);
  }

  static isNewAddressButtonDisplayed() {
    cy.getBySel(SELECTOR.ADDRESS_BOOK.NEW_ADDRESS_BUTTON).should(`be.visible`);
  }

  static isNewAddressPopupDisplayed() {
    cy.getBySel(SELECTOR.ADDRESS_BOOK.NEW_ADDRESS_POPUP).should(`be.visible`);
  }

  static isNewAddressPopupDisappeared() {
    cy.getBySel(SELECTOR.ADDRESS_BOOK.NEW_ADDRESS_POPUP).should(`not.be.exist`);
  }

  static isSaveButtonDisabled() {
    cy.getBySel(SELECTOR.ADDRESS_BOOK.SAVE_BUTTON).should(`have.attr`, `disabled`);
  }

  static isSaveButtonEnabled() {
    cy.getBySel(SELECTOR.ADDRESS_BOOK.SAVE_BUTTON).should(`not.have.attr`, `disabled`);
  }

  static isSavedAddressDisplayed(newAddress) {
    cy
      .contains(newAddress)
      .should(`be.visible`);
  }

  //click
  static clickNewAddressButton() {
    cy.getBySel(SELECTOR.ADDRESS_BOOK.NEW_ADDRESS_BUTTON).click();
  }

  static clickSaveButton() {
    cy.getBySel(SELECTOR.ADDRESS_BOOK.SAVE_BUTTON).click();
  }

  //enter
  static enterNewAddressintoSearchBox(newAddress) {
    cy.getBySel(SELECTOR.ADDRESS_BOOK.SEARCH_BOX).type(newAddress);
  }

  static enterFirstName(nameCode) {
    cy.getBySel(SELECTOR.ADDRESS_BOOK.ENTER_FIRST_NAME).type(nameCode);
  }

  //at least
  static atLeastOneAddressFound() {
    cy.get("#react-autowhatever-1 span").should(`have.length.above`, 0);
  }

  //select
  static selectTheAddressFound(newAddress) {
    cy.get("#react-autowhatever-1 span").contains(newAddress).click();
  }
}

export default addressBookPage;
