<reference types='Cypress'/> 
import mahiHomePage from '../../../../support/mahiPOM/mahiHomePage'
import mahiProduct from '../../../../support/mahiPOM/mahiProduct'
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
const homePage = new mahiHomePage();
const product  = new mahiProduct();
var sum=0;
var TotalAmount=0;

Given('I open Mahi Leather website.', () => {
    homePage.getVisitHomePage();
})

When('I click on Account option.',()=>{
    homePage.getAccountOption().click()
})

And('I enter invalid Email and Password and click on Login button.',function(dataTable)
{
   // homePage.getEmailBox().type('pavan123@gmail.com')
   homePage.getEmailBox().type(dataTable.rawTable[1][0]) 
   cy.wait(4000)
   homePage.getPasswordField().type(dataTable.rawTable[1][1])
   // homePage.getPasswordField().type('asdff')
    homePage.getSubmitButton().click()
})

Then('Verify the Incorrect email or password alert error.',() =>{
    
    homePage.getAlertMsg().should('have.text','Incorrect email or password.')
})

And('Verify the website is open or not.',() =>{
    homePage.getVerifyWebPage().should('include','mahileather.com/');
})

When('I click on satchels Collections.',() =>{
    product.getProdvariety().click()
    cy.wait(4000)
})

And('I add items to cart.',() =>{
    product.getBageProd().eq(1).click()
    cy.wait(4000)
    for (let i = 0; i < 2; i++) {
        if (i==2) {
            break;
        }
        if (i === 0) {
            product.getBuyProd().click({force:true})
            product.getCloseSlider().click()
            cy.go('back') 
                }
                if (i==1) {
                    product.getBageProd().eq(5).click()
                    product.getBuyProd().click({force:true})
                    cy.wait(5000)
                }
    }
})

Then('Validate the prices.',()=>{
    product.getPriceValid().each(($e1, index, $list)=>{
        const amount = $e1.text()
        var res = amount.split(" USD")
        res = res[0].split('$')
        res = res[1]
        sum = Number(sum) + Number(res)
    }).then(function(){
        cy.log(sum)
        cy.wait(3000)
    })

    product.getTotalPrice().each(($e2, index, $list) => {
        const tamount = $e2.text()
        var res2 = tamount.split(" USD")
        res2 = res2[0].split('$')
        res2 = res2[1]
        TotalAmount = res2
          cy.log(TotalAmount)
    }).then(function(){
        expect(Number(TotalAmount)).to.equal(sum)
        })
})

And('I click on a product and Verify the warranty of a product.',()=>{
    cy.wait(4000)
    product.getBageProd().eq(1).click()
    product.getWarrantyOfProd().then(function(warn){
        const warrantytxt = warn.text()   
        expect(warrantytxt).to.include('1 Year Warranty')
        cy.log(warrantytxt)
        
    })

})

Then('verify the colors of a product.',function(){
    this.info.colorsName.forEach(function(element1){
        cy.clrbag(element1)
        });
})

