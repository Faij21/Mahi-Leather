import mahiHomePage from '../../../support/mahiPOM/mahiHomePage'
import mahiProduct from '../../../support/mahiPOM/mahiProduct'
/// <reference types="Cypress" />

describe('MAHI Leather',function(){

    before(function(){
    cy.fixture('example').then(function(data)
    {
    this.info=data
    })
})

it('Verify the functionality of Mahi Leather website',function(){

    const homePage = new mahiHomePage();
    const product  = new mahiProduct();
    var sum=0;
    homePage.getVisitHomePage();
    homePage.getAccountOption().click()
    homePage.getEmailBox().type(this.info.email)
    cy.wait(4000)
    homePage.getPasswordField().type(this.info.password)
    homePage.getSubmitButton().click()

    homePage.getAlertMsg().should('have.text','Incorrect email or password.')
    homePage.getVerifyWebPage().should('include','mahileather.com/'); 
    product.getProdvariety().click() 
    cy.wait(4000) 
    product.getBageProd().eq(1).click()
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            product.getBuyProd().click({force:true})
            product.getCloseSlider().click() 
            cy.go('back')
                }
                if (i==1) {
                    product.getBageProd().eq(5).click()
                    product.getBuyProd().click({force:true})
                }
    }

    product.getPriceValid().each(($e1, index, $list) => {
        const amount = $e1.text()
        var res = amount.split(" USD")
        res = res[0].split('$')
        res = res[1]
        sum = Number(sum) + Number(res);
    }).then(function(){
        cy.log(sum)
    })


product.getTotalPrice().each(($e2, index, $list) => {
const tamount = $e2.text()
var res2 = tamount.split(" USD")
res2 = res2[0].split('$')
res2 = res2[1]
cy.log(res2)
})

cy.wait(4000)
product.getBageProd().eq(1).click()
product.getWarrantyOfProd().then(function(warn){
    const warrantytxt = warn.text()   
    cy.log(warrantytxt)
    //warrantytxt.should('includes','1 year warranty')
})



this.info.colorsName.forEach(function(element1){
cy.clrbag(element1)
});

    


})

})