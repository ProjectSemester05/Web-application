/// <reference types="cypress"/>

describe("Create Catalogue tests", () => {
    
    beforeEach(()=>{
        cy.visit("/")
    })

    
    it("User should be able to login", () =>{
        cy.contains('LogIn').click()

        cy.get("input[name='email']").type("lalanigunathilaka22@gmail.com")
        cy.get("input[name='password']").type("hsiadiaY890jds_")

        cy.get("#login-normal").click()
        cy.wait(1)
        .contains("New Catalogue")
        .should('be.visible')
    } )
    
})
