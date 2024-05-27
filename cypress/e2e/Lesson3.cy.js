/// <reference types = "cypress"/>
describe ("Lesson3",()=>{
    it("contains command",()=>{
        cy.visit("/");
        cy.get("ul.footer").find("li").contains("Advanced Search")
        cy.contains("Hot Sellers")
        cy.contains("span","Shop New Yoga ")
    //cy .cotanins("")
    //cy.contains("","")
   // cy.get().contains("")
    })
    it("position in list",()=>{
        cy.visit("/");
        cy.get(".block-promo-wrapper").find("a").last();
cy.get(".block-promo-wrapper").find("a").first();
cy.get(".block-promo-wrapper a").eq(2)
cy.get(".block-promo-wrapper").find("a").first().next();
cy.get(".block-promo-wrapper").find("a").first().last().prev;


    })
    it.only("filtering",()=>{
        cy.visit("/")
        cy.get("li").filter(".authorization-link")
        cy.get("li").filter(".level0");
        cy.get("li").not(".level0");



    })
})