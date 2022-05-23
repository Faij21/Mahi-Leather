class mahiHomePage{

getVisitHomePage(){
    return cy.visit(Cypress.env('url'));
}

getAccountOption(){
    return cy.get('.Header__SecondaryNav > .HorizontalList > :nth-child(1) > .Heading')
}

getEmailBox(){
    return cy.get('#customer_login > :nth-child(4) > .Form__Input')
}
getPasswordField(){
   return cy.get(':nth-child(5) > .Form__Input')
}
getSubmitButton(){
   return cy.get("button[type='submit']:visible")
}

getAlertMsg(){
return cy.get('p[class="Form__Alert Alert Alert--error"]')
}

getVerifyWebPage(){
    return cy.url();
}

}

export default mahiHomePage;