/// <reference types="cypress"/>
import { BASE_API } from "../../src/utils/constants";

describe("reminder tests", () => {
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
    cy.wait(8000);
    cy.get(`[data-testname=up_card]`, { timeout: 15000 }).click();
    cy.wait(3000);
    cy.contains("Add New Item", { timeout: 15000 }).click();
    cy.wait(3000);
    cy.get("input[name='ItemName']").type("Box");
    cy.contains("Submit").click();
  });

  after(() => {
    cy.get(`[aria-label=Close]`).click();
    cy.get(`[data-testid=delete-material]`).last().click();
    cy.wait(3000);

    cy.contains("Are you sure").should("be.visible");
    cy.get(`[data-testid=check-material]`).click();
    cy.contains("Box ").should("not.exist", { timeout: 15000 });
  });

  it("should create a new reminder", () => {
    cy.wait(3000);
    cy.get(`[data-testid=reminder-material]`).click();
    cy.get(`[data-testid=add-material]`).click();
    cy.get(`[aria-label="ReminderDate: press space to edit"]`).click();
    cy.contains("OK", { timeout: 2000 }).click();

    cy.get(`[aria-label="Description"]`).type("Test");
    cy.get(`[data-testid=check-material]`).click();

    cy.contains("Success").should("be.visible", { timeout: 15000 });
  });

  it("should update the reminder", () => {
    cy.wait(3000);

    cy.get(`[data-testid=edit-material]`).last().click();
    cy.wait(3000);
    cy.get(`[aria-label="Description"]`).clear();

    cy.get(`[aria-label="Description"]`).type("Test_1");

    cy.get(`[data-testid=check-material]`).click();

    cy.contains("Test_1").should("be.visible", { timeout: 15000 });
  });

  it("should delete the reminder", () => {
    cy.wait(3000);
    cy.get(`[data-testid=delete-material]`).last().click();
    cy.wait(3000);

    cy.contains("Are you sure").should("be.visible");
    cy.get(`[data-testid=check-material]`).click();
    cy.contains("Test_1").should("not.exist", { timeout: 15000 });
  });
});
