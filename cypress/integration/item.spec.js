/// <reference types="cypress"/>

describe("Create Catalogue tests", () => {
    
    beforeEach(()=>{
        cy.visit("/")
        cy.contains('LogIn').click()

        cy.get("input[name='email']").type("lalanigunathilaka22@gmail.com")
        cy.get("input[name='password']").type("hsiadiaY890jds_")

        cy.get("#login-normal").click()
        cy.wait(200)
        cy.contains("Semester 6 Work").click()
        cy.wait(200)
    })

    
    it("should create a new item with mock http", () =>{
        cy.contains('Add New Item').click()

        cy.get("input[name='ItemName']").type("SEP MID")

        cy.contains("Submit").click()

        cy.intercept("POST", "https://v86cz5q48g.execute-api.us-east-1.amazonaws.com/dev/item/new",{
            fixture: "item.json"
        })

        cy.wait("100")

        cy
        .contains("Knife")
        .should('be.visible')
    } )
    
})

