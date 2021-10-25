/// <reference types="cypress"/>
let testConfig = require("../../src/config/config")

describe("Login tests", () => {
    
    beforeEach(()=>{
        cy.visit("/",)

    })

    it("User should be able to login", () =>{
        cy.contains('LogIn').click()
        cy.get("input[name='email']").type(Cypress.env("TESTUSER"))
        cy.get("input[name='password']").type(Cypress.env("TESTPASS"))
        cy.get("#login-normal").click()
        cy.contains("New Catalogue",{timeout:15000}).should('be.visible')
    } )

    it("User should be able to login thorugh amazon account", () =>{
        cy.contains('Log In with Amazon').click()
        // cy.get("input[name='email']",{timeout:15000}).type(Cypress.env("LWAUSER"))
        // cy.get("input[name='password']").type(Cypress.env("LWAPASS"))
        cy.get("#signInSubmit",{timeout:15000}).should('be.visible')
        // cy.contains("New Catalogue",{timeout:15000}).should('be.visible')
    } )
    
})
