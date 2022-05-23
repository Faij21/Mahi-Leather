// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
import mahiProduct from '../support/mahiPOM/mahiProduct'
const product  = new mahiProduct();

Cypress.Commands.add("clrbag", (ProductName) => { 
    product.getProdColor().each(($e3, index, $list)=>{
        if ($e3.text().includes(ProductName)) {
            cy.get('.swatchProductColor:visible').eq(index).click({force: true})
            cy.get('.swatchProductColor:visible').eq(index).should('have.attr','data-name', ProductName)
            cy.wait(2000)
        }
    
    })
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
