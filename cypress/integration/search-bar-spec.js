describe('Search artist flow', () => {

  it('should allow user to search for an artist', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(2000)
    .get('.search-bar').type('Beyonce')
    .get('.button-search').click()
    cy.wait(5000)
    .get('.big-bubs-image').should('have.attr', 'src').should('include', 'https://photos.bandsintown.com/thumb/8652941.jpeg')
  });
})
