describe('CSS Selectors', () => {

    it('Verify Radio Buttons', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#top")

// Radio Buttons:

        // cy.get('input[value="radio1"]').should('be.visible').click();
        // cy.get('input[value="radio2"]').should('be.visible').click();
        // cy.get('[for="radio3"] > .radioButton').should('be.visible').click();

// Suggestion Class Example:
        // cy.get('#autocomplete').should('be.visible').type('Ind')
        // cy.get(".ui-menu-item").each($element => {
        // const txt = $element.text();
        // if (txt == 'India') {
        //     cy.wrap($element).click();
    //     }
    // });
// Drop Down
        // cy.get('#dropdown-class-example').select('option1');
    // cy.get("select[id='dropdown-class-example']").select('option2');
    // cy.get("select[id='dropdown-class-example']").select('option1');

 // CheckBox example:
    //   cy.get('#checkBoxOption1').click();
    //   cy.get('input[value="option2"]').click(); 
    //   cy.get('input[value="option3"]').click();
      
// Switch Window Example
        // cy.get("#openwindow").click();

// Switch Tab
         // cy.get("#opentab").click();

// Switch to alert page 
        cy.get("#name").should('be.visible').type('suman'); 
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();

        

        

    });
});
