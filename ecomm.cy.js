/// <reference types="cypress" />
import { should } from 'chai';
import user from '../fixtures/example.json'


describe('CSS Selectors', () => {

    it('Verify Radio Buttons', () => {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#top")

        //task radio buttons, 

        // cy.get('input[value="radio1"]').should('be.visible').click();
        // cy.get("input[value='radio2']").should('be.visible').click();
        // cy.get("input[value='radio3']").should('be.visible').click();

        // task class example  
        // cy.get('#autocomplete').should('be.visible').and('have.attr', 'placeholder', 'Type to Select Countries');.type('India');
        //cy.get('.ui-autocomplete-input').should('be.visible').contains('India');
        //cy.get('.ui-autocomplete-input').contains('India').click();
        //cy.get('#autocomplete').should('have.value', 'India');  
        /*
         //task for text boxes
        
         cy.get("input#autocomplete").should('be.visible').type("Ind");
 
         cy.get(".ui-menu-item").each($element => {
             const txt = $element.text();
             if (txt == 'Indonesia') {
                 cy.wrap($element).click();
             }
         });
        */
        //Task -  verify the price of as course in the first row of the table 
        //  cy.get('fieldset > #product > tbody > :nth-child(2) > :nth-child(3)')


        cy.get("table[name='courses']>tbody>:nth-child(2)>:nth-child(3)").each($element => {

            const ActualPriceUI = $element.text();
            const ExpectedPriceUI = "30";

            cy.log("price text: " + ActualPriceUI)

            expect(ActualPriceUI).to.equal(ExpectedPriceUI);

        });

        cy.get("table[name='courses']>tbody>:nth-child(4)>:nth-child(3)").each($element => {

            const ActualPriceUI = $element.text();
            const ExpectedPriceUI = "30";

            cy.log("price text: " + ActualPriceUI)

            expect(ActualPriceUI).to.equal(ExpectedPriceUI);

        });

        cy.get("table[name='courses']>tbody>:nth-child(3)>:nth-child(3)").each($element => {

            const ActualPriceUI = $element.text();
            const ExpectedPriceUI = "25";

            cy.log("price text: " + ActualPriceUI)

            expect(ActualPriceUI).to.equal(ExpectedPriceUI);

        });






        //     // expect()


        // });


        // Task for DropDown
        //cy.get("select[id='dropdown-class-example']").select('Option1') //.click()
        //cy.get("select[id='dropdown-class-example']").select('Option2')
        // cy.get("select[id='dropdown-class-example']").select('Option3')

        //dropdown-class-example


        // Task for Check Box
        // cy.get("input[value='option1']").should('be.visible').click();
        // cy.get("input[value='option2']").should('be.visible').click();
        // cy.get("input[value='option3']").should('be.visible').click();

        //cy.get('#openwindow').should('be.visible').click();
        //cy.get('#opentab').should('be.visible').click();
       

        //  cy.get('#name').should('be.visible').and('have.attr', 'placeholder', 'Enter Your Name').type("textname");
        // cy.get("input[value='Alert']").should('be.visible').click();
        //cy.get("inlut[value='Confirm']").should('be.visible').click();

        should()



    })

})


cy.get('#dropdown-class-example').select('option1')
cy.get('#checkBoxOption1').click();