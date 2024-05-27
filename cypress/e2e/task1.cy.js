/// <references types="cypress"/>
describe("Task1",()=>{
    it("Selectors",()=>{
        cy.visit("https://demo.productionready.io/#/register");
        cy.get(".container").find("a").contains("conduit");
        cy.get(".navbar-nav").first().find("li").first();
        cy.get(".navbar-nav").first().find("li").last();
        cy.get(".row").contains("Sign up");
        cy.get(".row").contains("Sign up").next();
        cy.get(".form-group").first()
        cy.get(".form-group").first().next()
        cy.get(".form-group").last()
        cy.get("[type=submit]")
        cy.get("a").filter(".logo-font")
        cy.get(".container").find("span")






    })
})