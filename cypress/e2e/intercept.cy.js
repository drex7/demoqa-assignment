describe("intercept", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('make api calls', () => {
    cy.get('#container').should('exist');
    cy.intercept('https://jsonplaceholder.com').as('api');
    cy.wait('@api').then(interception => {
      let a = 5 <= 6;
      const response = interception.response.body.data;
      expect(response).to.have.length(25);
    })
  })
})