/// <reference types="cypress" />


describe('Add Item to Cart', () => {

    beforeEach(() => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

    });

    //Add 4 items and validate "checkout page" for all the visible textts .=- Brocolli - 1 Kg  120 2 Nos. 240  and so on.




    it('should item add item to the cart and verify it', () => {
        // cy.get('.increment');
        // cy.get('.product-action');

        //click on +
        cy.get('a.increment').eq(0).click()
        //verify qty value in the text box after click on +  button
        //verify cart value after clicking on 'addtocart' button
        //verify Items	:	1,  Price	:	240

        //verify qty value=2
        cy.get("input.quantity").eq(0).should('have.attr', "value", "2")

        //addtocart
        cy.get(".product-action>button[type='button']").eq(0).click();
        cy.get('.cart-icon > img').click()
        cy.get("p.product-name").scrollIntoView().contains("Brocolli - 1 Kg")
        cy.get("p.product-name").should('have.')


        //cy.contains('PROCEED TO CHECKOUT').click()

        //cy.get(':nth-child(2) > :nth-child(3) > strong')
        //cy.get('.cart-icon > img')

        // //otherway syntax
        // cy.get("input.quantity").eq(0).each($element => {
        //     const ActualQtyUI = $element.text();
        //     const ExpectedQtyUI = "2";
        //     cy.log("QTY text: " + ActualQtyUI)
        //     expect(ActualQtyUI).to.equal(ExpectedQtyUI);  

        // });


    });
}); 