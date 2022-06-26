
export function atLeastOneVehicleAvailableToDoRequest() {
  cy.waitUntil(() =>
    cy.get("#vehicleCard td strong span").should(`be.visible`)
  );

  cy.get("#vehicleCard input").then((listing) => {
    let theTotalNumberOfVehicles = Cypress.$(listing).length;

    cy.get("#vehicleCard input[disabled]").then((listing) => {
      let theTotalNumberOfNotAvailableVehicles = Cypress.$(listing).length;

      let availableVehicles =
        theTotalNumberOfVehicles - theTotalNumberOfNotAvailableVehicles;
      assert.isAbove(
        availableVehicles,
        0,
        `${availableVehicles} available vehicles is greater than 0`
      );
    });
  });
}

export function orderID(length) {
  var result = [];
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
}

export function uniqueNameCreater(length) {
  var result = [];
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("-");
}

export function isTotalCostDisplayedCorrectly() {
  cy.get("#vehicleCard td strong span")
    .first()
    .then((vehicleCostText) => {
      let vehicleCost = vehicleCostText;
      cy.contains("Total (excl. VAT): ").then((totalCostText) => {
        let totalCost = totalCostText.text().split(`: `);

        expect(vehicleCost.text()).to.equal(totalCost[1]);
      });
    });
}

export function getDeliveryID() {
  return new Cypress.Promise((resolve) => {
    cy.get("#activeJobsCards ._2EbP2eCS")
      .first()
      .then((deliveryID) => {
        resolve(deliveryID.text());
      });
  });
}
