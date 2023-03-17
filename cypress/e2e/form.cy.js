describe("Form", () => {
  beforeEach(() => {
    cy.visit('/');
    // Click on Widgets nav
    cy.get('.category-cards > :nth-child(2)').click();
  });

  it("should be able select input", () => {
    cy.contains('li', 'Practice Form').click();
    cy.readFile('C:\\Users\\DerrickAsamoah\\Downloads\\IMG_0817.jpg').as('myFile');
    cy.get('#uploadPicture')
      .selectFile('@myFile')
      .then(input => {
        cy.log(input)
        expect(input[0].files[0].type).to.eq('image/jpeg');
      })
  })



});