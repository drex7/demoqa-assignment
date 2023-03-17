
describe('Demoqa Tests', () => {
  beforeEach(() => {
    // cy.fixture('users.json').as('userData')
    cy.visit('/', { timeout: 50000 });
    // cy.get('.category-cards > :nth-child(1)').click();
    cy.contains('div', 'Elements').click()
  });

  const getIframeDocument = (selector) => {
    return cy
      .get(selector)
      .its('0.contentDocument').should('exist')
  }

  const getIframeBody = (selector) => {
    return getIframeDocument(selector)
      .its('body').should('not.be.undefined')
      .then(cy.wrap)
  }

  context("frames", () => {
    it('large frame', () => {

      cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-2').click()
      getIframeBody('#frame1').find('#sampleHeading').should('have.text', 'This is a sample page')
      // cy.get('#frame1').its('0.contentDocument').should('exist')

      // frame.contentDocument.body.getElementById('sampleHeading').textContent
      //   .should('be.visible')
      //   .and('have.text', 'This is a sample page')
    })
    // .its('0.contentDocument.body')
    // .should('be.visible')
    // .and('have.text', 'This is a sample page')

    // })

    it('small frame', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()

      cy.get(':nth-child(3) > .element-list > .menu-list > #item-2').click()


      getIframeBody('#frame2').find('#sampleHeading').should('have.text', 'This is a sample page')
      /*
      cy.get('#frame2') //frame2
  
        .its('0.contentDocument.body')
        .should('be.visible')
      // .and('have.text', 'This is a sample page')
  */
    })

    it.only('Nested Frames 1', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-3').click()
      cy.get('#frame1', { timeout: 5000 })
        .should('be.visible')
        // .should('not.be.empty')
        .then(($fr) => {
          // const [parentFrame] = $fr.get()
          cy.log($fr.contents())
          const body = $fr.contents().find('body')
          cy.log(body)
          // $fr.its('0.contentDocument')
          // $fr.contents().find('body').should('have.')

        // $parentFrame.its('body').should('not.be.undefined').and('have.text', 'Parent frame')
      })
    })
    /*.find('iframe').should('have.string', 'Child Iframe')
      // .should('have.text', 'Parent frame')
      // .and('have.')
    // find('body').should('have.text', 'Parent frame')
    /*
          .its('0.contentDocument.body')
          .should('be.visible')
          .and('have.text', 'Parent frame')
          */
    // })
  });

});