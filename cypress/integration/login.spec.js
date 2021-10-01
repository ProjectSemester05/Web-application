/// <reference types="cypress"/>

describe("Login tests", () => {
    
    // beforeEach(()=>{
    //     cy.visit("/home")
    // })

    beforeEach(()=>{
        cy.visit("/")
    })
    it("should login", () =>{

        cy.get("input[name='CatalogueName']").type("Heavy Items")

        cy.contains("LogIn").click()
        
        // cy.get("input[name='email']").type("poorna2152@gmail.com")

        // cy.get("input[name='password']").type("")

        cy.contain("Log In with Amazon").click()


        cy.intercept("POST", "https://v86cz5q48g.execute-api.us-east-1.amazonaws.com/dev/catalogue/new",{
            fixture: "catalogue.json"
        })
        cy
        .contains("Heavy Items")
        .should('be.visible')
    } )
    
    it("should delete a catalogue with mock http", () =>{
        
        cy.contains('Heavy Items').click()

        cy.get("button", "delete").click()

        cy.intercept("DELETE", "https://v86cz5q48g.execute-api.us-east-1.amazonaws.com/dev/catalogue/",{
        })
        cy
        .contains("Heavy Items")
        .should('not be.visible')
    } )
})