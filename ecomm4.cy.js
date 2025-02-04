import { should } from "chai";

describe('CSS Selectors', () => {

    it('Verify Radio Buttons', () => {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#top")

        // // radio Buttons
        cy.get('input[value="radio1"]').should('be.visible').click();
        cy.get('input[value="radio2"]').should('be.visible').click();
        cy.get('input[value="radio3"]').should('be.visible').click();

        //Suggestion Class Example

        // cy.get('#autocomplete').should('be.visible').and('have.attr', 'placeholder', 'Type to Select Countries').type('Ind');
        // cy.get('.ui-autocomplete-input').should('be.visible').contains('India').click();
        // cy.get('#autocomplete').should('have.value', 'India');   

        cy.get("#autocomplete").should('be.visible').type("Ind");
        cy.get(".ui-menu-item").each($element => {
            const txt = $element.text();
            if (txt == 'India') {
                cy.wrap($element).click();


            }
        });

        //DropDown Example
        cy.get('#dropdown-class-example').select("option1");
        cy.get('#dropdown-class-example').select("option2");
        cy.get('#dropdown-class-example').select("option3");

        //CheckBox
        cy.get('#checkBoxOption1').click();
        cy.get('#checkBoxOption2').click();
        cy.get('#checkBoxOption3').click();

        // Open Window
        // cy.get('#openwindow').click();

        //open Tab
        // cy.get('#opentab').click();

        //Alert Name
        cy.get('#name').should('be.visible').and('have.attr', 'placeholder', 'Enter Your Name').type('suman'); 
        cy.get('#alertbtn').click().should('be.visible');
        it('should display and verify the alert when the button is clicked', () => {
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Hello , share this practice page and share your knowledge');
            

        });
    });

    // cy.contains("table[name='courses'] tbody tr", "30").should('exist');
    // cy.contains("table[name='courses'] tbody tr", "30").should('exist');

    // cy.get('fieldset > #product > tbody > :nth-child(2) > :nth-child(3)');
    // cy.get('fieldset > #product > tbody > :nth-child(3) > :nth-child(3)');

    
    cy.get('#hide-textbox').click();
    cy.get('#show-textbox').click();
    cy.get('#displayed-text').should('be.visible');


    //cy.get('.tableFixHead > #product > tbody > :nth-child(1) > :nth-child(1)');
    cy.get('thead > tr > :nth-child(4)');
    cy.get('#product > tbody > :nth-child(1) > :nth-child(4)');

    
  

    
    });
});



