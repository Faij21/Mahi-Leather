beforeEach(function(){
    cy.fixture('example').then(function(data){
    this.info=data
    })
})