/// <refrence types="cypress"/>
describe ("lesson1",()=>{
    it ("test case name",()=>{
        cy.visit("/");
        cy.visit("/what-is-new.html");
   
    
    })
    /**
     * 1-open the website
     * 2-enter valid email
     * 3-enter valid password 
     * 4-click on login button
     * 5-the user will redirected to myacount page 
     */
    it.only("validate that the user can login to magento site",()=>{
cy.visit("/customer/account/login/")
cy.get("#email").type("omama.kitt2000@gmail.com")
cy.get("#pass").type("omama@2000")
cy.get("[name='send']").click();
//
cy.get(".page-title").should("contain","My Account")

    })
})