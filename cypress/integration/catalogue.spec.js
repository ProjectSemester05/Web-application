/// <reference types="cypress"/>

describe("Create Catalogue tests", () => {
    
    beforeEach(()=>{
        cy.visit("/home")
    })

    
    it("should create a new catalogue with mock http", () =>{
        cy.contains('New Catalogue').click()

        cy.get("input[name='CatalogueName']").type("Heavy Items")

        cy.contains("Submit").click()

        cy.intercept("POST", "https://v86cz5q48g.execute-api.us-east-1.amazonaws.com/dev/catalogue/new",{
            fixture: "catalogue.json"
        })
        cy
        .contains("Heavy Items")
        .should('be.visible')
    } )
    
})

describe("Delete Catalogue tests", () => {
    
    beforeEach(()=>{
        cy.visit("/home")
    })

    it("should delete a catalogue with mock http", () =>{
        
        cy.contains('New Catalogue').click()

        cy.get("input[name='CatalogueName']").type("Heavy Items")

        cy.contains("Submit").click()

        cy.intercept("POST", "https://v86cz5q48g.execute-api.us-east-1.amazonaws.com/dev/catalogue/new",{
            fixture: "catalogue.json"
        })

        cy.contains('Heavy Items').click()

        cy.get("button", "delete").click()

        cy.intercept("DELETE", "https://v86cz5q48g.execute-api.us-east-1.amazonaws.com/dev/catalogue/",{
        })
        cy
        .contains("Heavy Items")
        .should('not be.visible')
    } )
})
