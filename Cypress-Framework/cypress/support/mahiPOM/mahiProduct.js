class mahiProduct {
getProdvariety(){
    return cy.contains('SATCHELS')
}

getBageProd(){
    return cy.get('.ProductItem__Wrapper > a')
}

getBuyProd(){
    return cy.get("button[class*='ProductForm__AddToCart Button']")
}

getCloseSlider(){
    return cy.get("button[class^='Drawer__Close']:visible")
}

getPriceValid(){
    return cy.get("span[class='CartItem__Price Price']")
    //cy.get("span[class='CartItem__Price Price'] > [class$='conversion-bear-money']")
}

getTotalPrice(){
    return cy.get("button[name='checkout'] > span > span[class$='conversion-bear-money']")
}

getProdColor(){
    return cy.get('.swatchProductColor:visible')
}

getWarrantyOfProd(){
    return cy.get('.flsubtext > strong').eq(1)
}

}

export default mahiProduct;