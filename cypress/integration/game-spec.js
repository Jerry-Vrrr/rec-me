describe('Search 6-degrees of separation game flow', () => {

  it('should have a button to start a game on page load ', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(1000)
    .get('.start-game-button').contains('End Game')
});

it('should let user start game and see messages throughout', () => {
  cy.visit('http://localhost:3000/')
  cy.wait(1000)
  .get('.start-game-button')
  // .click()
  .get('.little-bubs').get('#bubble5').click()
});





  

})