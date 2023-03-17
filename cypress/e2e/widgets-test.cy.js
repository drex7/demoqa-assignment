describe("Widgets", () => {
  beforeEach(() => {
    cy.visit('/');
    // Click on Widgets nav
    cy.get('.category-cards > :nth-child(4)').click();
  });

  context("Widgets Section", () => {
    it("should show accordian", () => {
      cy.contains('li', 'Accordian').click();
      cy.get('#section1Heading').click();
      cy.get('#section1Content').should('be.visible');
      cy.get('#section2Heading').click();
      cy.get('#section2Content').should('be.visible');
      cy.get('#section3Heading').click();
      cy.get('#section3Content').should('be.visible');
    });
  });

  context("Auto complete Options", () => {
    beforeEach(() => {
      cy.contains('li', 'Auto Complete').click();
      cy.get("#autoCompleteMultipleContainer").as('inputField')
    });

    it(`should be able to select options by pressing "enter" and remove options by "backspace"`, () => {
      cy.get('@inputField').type("r{downArrow}{downArrow}{downArrow}{upArrow}ed{enter}");
      cy.get('@inputField').type("r{downArrow}{downArrow}{downArrow}{upArrow}een{enter}");
      cy.get('.auto-complete__value-container').as('selectedValues')
      cy.get('@selectedValues').should('contain', 'Red')
      cy.get('@selectedValues').should('contain', 'Green')
      cy.get("@inputField").type("{backspace}");
      cy.get('@selectedValues').should('not.contain', 'Green');
    });

    it(`should be able to select and remove options by clicking`, () => {
      cy.get('@inputField').type('yel');
      cy.get('.auto-complete__menu').as('optionsMenu');
      cy.get('@optionsMenu').contains("Yellow").click();
      cy.get('.auto-complete__value-container').as('selectedValues');
      cy.get('@selectedValues').should('contain.text', 'Yellow');
      cy.get('.auto-complete__multi-value__remove').eq(0).click();
      cy.get('@selectedValues').eq(0).should('not.have.text', 'Yellow');
    });

    // context.skip("Single Auto complete Options", () => {
    it(`Single select: should be able to select an option by clicking`, () => {
      cy.get('#autoCompleteSingleContainer').type('r')
      cy.get('.auto-complete__menu').contains("Red").click();
      cy.get('.auto-complete__value-container').eq(1).should('contain.text', 'Red');
    });

    it(`Single select: should be able to select an option by hitting enter key`, () => {
      cy.get('#autoCompleteSingleContainer').type('yel{enter}');
      cy.get('.auto-complete__value-container').eq(1).contains("Yellow").click();
    });
  });

  context.only('Date picker', () => {
    it("Date Picker", () => {
      cy.contains('li', 'Date Picker').click();
      cy.get('#datePickerMonthYearInput').click()
      cy.get('.react-datepicker__month-select').select('July').should('have.text')
      cy.get('.react-datepicker__year-select').contains()
    })

  })
});