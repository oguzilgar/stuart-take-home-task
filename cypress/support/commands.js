import 'cypress-wait-until';

Cypress.Commands.add("login", (email, password) => {

  //navigate website
  cy.url().should(`include`, `/log-in`);
  cy.contains(`Log in to start delivering`).should(`be.visible`);

  cy.get(`#logInButton`).should(`have.attr`, `disabled`);

  //type email
  cy.get(`#email`).should(`be.visible`);
  cy.get(`#email`).clear({ force: true });
  cy.get(`#email`).type(email, { force: true });

  //type password
  cy.get(`#password`).should(`be.visible`);
  cy.get(`#password`).clear({ force: true });
  cy.get(`#password`).type(password, { force: true });

  cy.get(`#logInButton`).should(`not.have.attr`, `disabled`);

  //click login
  cy.get(`#logInButton`).click();
  cy.url().should(`include`, `/new`);

  //logged in successfully
  cy.get(`#newRequest-link`).should(`be.visible`);
  cy.get(`#active-link`).should(`be.visible`);
  cy.get(`#scheduled-link`).should(`be.visible`);
  cy.get(`#history-link`).should(`be.visible`);
  cy.get(`#search-link`).should(`be.visible`);
});

Cypress.Commands.add("handlePackageRefundPopup", () => {

  //package refund popup is displayed
  cy.get(`.ReactModal__Content--after-open`).should(`be.visible`);
  cy.contains(
    `Unless otherwise specified in the contract, refunds of goods transported by self-employed couriers using the Stuart application are subject to a deductible of €20 and up to a value of €150 per package.`
  ).should(`be.visible`);
  cy.get(`button[type='submit'] span`)
    .contains(`Understood`)
    .should(`be.visible`).click();
  cy.get(`.ReactModal__Content--after-open`).should(`not.be.exist`);
});

Cypress.Commands.add("isTestScenarioCorrect", (testScenario) => {

  //test Scenario is displayed
  cy.get(`[type='button'] span`).contains(testScenario).should(`be.visible`);
});

Cypress.Commands.add('getBySel', (selector) => {
  return cy.get(`${selector}`);
});

Cypress.Commands.add('getByCompoundSel', (common, unique) => {
  const compoundSelector = `${common} ${unique}`;
  return cy.get(`${compoundSelector}`);
});

Cypress.Commands.add('bearerToken', () => {
  let token;
  const qs = {
    client_id: Cypress.env('auth_token_client_id'),
    client_secret: Cypress.env('auth_token_client_secret'),
    scope: Cypress.env('auth_token_scope'),
    grant_type: Cypress.env('auth_token_grant_type')
  };
  cy.request({
    method: 'POST',
    url: Cypress.env('auth_token_url'),
    body: qs,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(response => {
    token = response.body.access_token;
    token = `Bearer ${token}`;
    cy.log(token);
    return cy.wrap(token);
  });
});

Cypress.Commands.add('deleteJobViaApi', (deliveryId) => {
  cy.bearerToken().then(token => {
    cy.request({
      method: 'POST',
      url: Cypress.env('apiUrl')  + deliveryId + '/cancel',
      qs:{"comment":"technical issue",
       " public_reason_key":"technical_issue"},
      body: [],
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
      }
    }).then(response => {
      return response.body;
    });
  });
});