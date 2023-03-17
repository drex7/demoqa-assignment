describe('Windows and Tabs', () => {
  beforeEach(() => {
    // cy.fixture('users.json').as('userData')
    cy.visit('/');
    cy.get('.category-cards > :nth-child(3)').click();
    cy.contains('li', 'Browser Windows').click();
  });

  context("Tabs", () => {
    it('should open a tab', () => {
      cy.get('#tabButton').as('tabButton')
      cy.get('@tabButton').should('')

    })
  })

});