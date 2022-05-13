/* global cy */

describe('creator site', function(){
    it('The site contains the creator site', function(){
        cy.visit('http://localhost:3000')
        cy.contains('rderik.com')
    })
})