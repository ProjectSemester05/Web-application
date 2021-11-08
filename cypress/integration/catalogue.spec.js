/// <reference types="cypress"/>
import { BASE_API } from "../../src/utils/constants";

describe(" Catalogue tests", () => {
  let uuid;

  before(() => {
    cy.visit("/");
    cy.contains("LogIn").click();

    cy.get("input[name='email']").type(Cypress.env("TESTUSER"));
    cy.get("input[name='password']").type(Cypress.env("TESTPASS"));

    cy.get("#login-normal").click();
  });
  beforeEach(() => {
    cy.server().route("POST", `${BASE_API}**`).as("getSiteInfo");
    cy.server().route("DELETE", `${BASE_API}**`).as("deleteSiteInfo");
    cy.server().route("PUT", `${BASE_API}**`).as("updateSiteInfo");
  });

  it("should create a new catalogue", () => {
    cy.wait(8000);
    cy.contains("Add New", { timeout: 15000 }).click();

    cy.get("input[name='CatalogueName']").type("Heavy Items");

    cy.contains("Submit")
      .click()
      .wait("@getSiteInfo", { timeout: 20000 })
      .then((xhr) => {
        cy.log(JSON.stringify(xhr.response));
        cy.log(JSON.stringify(xhr.response.statusMessage));
        cy.log(JSON.stringify(xhr.response.body));
        cy.log(xhr.response.body.newCatalogue);
        cy.log(xhr.response.body.newCatalogue.UUID);
        uuid = xhr.response.body.newCatalogue.UUID;
      });

    cy.contains("Heavy Items").should("be.visible");
  });

  it("should update the catalogue", () => {
    cy.wait(2000);
    cy.get(`[data-testid=${uuid}_edit]`).click();
    cy.get("input[name='CatalogueName']").clear();
    cy.get("input[name='CatalogueName']").type("Heavy Items_0");

    cy.contains("Submit")
      .click()
      .wait("@updateSiteInfo", { timeout: 20000 })
      .then((xhr) => {
        cy.log(JSON.stringify(xhr.response));
        cy.log(JSON.stringify(xhr.response.statusMessage));
        cy.log(JSON.stringify(xhr.response.body));
        uuid = xhr.response.body.newCatalogue.UUID;
      });

    cy.contains("Heavy Items_0").should("be.visible");
  });

  it("should delete a catalogue", () => {
    cy.wait(2000);

    cy.get(`[data-testid=${uuid}_edit]`).click();
    cy.contains("Delete").click();
    cy.get('button:contains("Confirm")')
      .click()
      .wait("@deleteSiteInfo", { timeout: 20000 })
      .then((xhr) => {
        cy.log(JSON.stringify(xhr.response));
        cy.log(JSON.stringify(xhr.response.statusMessage));
        cy.log(JSON.stringify(xhr.response.body));
      });
    cy.wait(2000);
    cy.contains("Success", { timeout: 2000 }).should("be.visible");
  });
});
