/// <reference types="cypress"/>

describe("Create Catalogue tests", () => {
    
    beforeEach(()=>{
        cy.visit("/")
        cy.contains('LogIn').click()

        cy.get("input[name='email']").type("lalanigunathilaka22@gmail.com")
        cy.get("input[name='password']").type("hsiadiaY890jds_")

        cy.get("#login-normal").click()
        cy.wait(10)
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

    // it("should delete the catalogue", () => {
    //     cy.get('.inflate').find(".chakra-button").click()

    //     cy.contains("Delete").click()

    //     cy.intercept("DELETE", "https://v86cz5q48g.execute-api.us-east-1.amazonaws.com/dev/catalogue/ee31941d-ca32-41f8-9494-94fcd70765fa",{
    //     })
    //     cy
    //     .contains("Semester 6 Work")
    //     .should('not be.visible')
    // })
    
})

