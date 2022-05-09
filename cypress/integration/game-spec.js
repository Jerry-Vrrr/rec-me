describe('Search 6-degrees of separation game flow', () => {

  it('should have a button to start a game on page load ', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(1000)
    .get('.button-64').contains(`Let's play a game!`)
});

it('should let user start game and see messages throughout', () => {
  cy.visit('http://localhost:3000/')
  cy.wait(1000)
  .get('.button-64')
  .click()
  .get('.game-text').find('h2')
  .contains('Moves Left: 6')
  .get('#bubble5').click()
  .get('.game-text').find('h2')
  .contains('Moves Left: 5')
});
 
it('should reset moves after 6 tries and button text should reset to original text', () => {
  cy.visit('http://localhost:3000/')
  cy.wait(1000)
  .get('.button-64')
  .click()
  .get('#bubble5').click()
  cy.wait(2000)
  .get('#bubble2').click()
  cy.wait(2000)
  .get('#bubble1').click()
  cy.wait(2000)
  .get('#bubble7').click()
  cy.wait(2000)
  .get('#bubble5').click()
  cy.wait(2000)
  .get('#bubble2').click()
  .get('.button-64').contains(`Quit Game`)

})





  

})