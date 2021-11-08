/// <reference types="cypress"/>
import { BASE_API } from "../../src/utils/constants";

describe("item tests", () => {
  let uuid;

  before(() => {
    cy.server().route("POST", `${BASE_API}**`).as("getSiteInfo");
    cy.server().route("DELETE", `${BASE_API}**`).as("deleteSiteInfo");
    cy.server().route("PUT", `${BASE_API}**`).as("updateSiteInfo");
    cy.visit("/");
    cy.contains("LogIn").click();

    cy.get("input[name='email']").type(Cypress.env("TESTUSER"));
    cy.get("input[name='password']").type(Cypress.env("TESTPASS"));

    cy.get("#login-normal").click();

    cy.wait(6000);
    cy.contains("Add New", { timeout: 15000 }).click();
    cy.wait(3000);

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
    cy.wait(3000);
    cy.get(`[data-testname=up_card]`, { timeout: 10000 }).click();
  });

  it("should create a new item", () => {
    cy.wait(3000);
    cy.contains("Add New Item", { timeout: 15000 }).click();
    cy.wait(3000);

    cy.get("input[name='ItemName']").type("Box");
    cy.contains("Submit")
      .click()
      .wait("@getSiteInfo", { timeout: 20000 })
      .then((xhr) => {
        cy.log(JSON.stringify(xhr.response));
        cy.log(JSON.stringify(xhr.response.statusMessage));
        cy.log(JSON.stringify(xhr.response.body));
      });

    cy.contains("Box").should("be.visible");
  });

  it("should update the item", () => {
    cy.wait(3000);

      cy.get(`[data-testid=edit-material]`).click();
  cy.wait(3000);
    cy.get("input[name='ItemName']").clear();
    cy.get("input[name='ItemName']").type("Box_0");

    cy.contains("Submit")
      .click();

    cy.contains("Box_0").should("be.visible", { timeout: 15000 });
  });
  
  it("should delete the item", () => {
    cy.wait(3000);
    cy.get(`[data-testid=delete-material]`).click();
    cy.wait(3000);

   
    cy.contains("Are you sure").should("be.visible");
    cy.get(`[data-testid=check-material]`).click();
    cy.contains("Box_0").should("not.exist", { timeout: 15000 });


  });

  
});
