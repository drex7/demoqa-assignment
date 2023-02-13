import userData from '../fixtures/users.json'
describe('Demoqa Tests', () => {
  beforeEach(() => {
    // cy.fixture('users.json').as('userData')
    cy.visit('/');
    // cy.get('.category-cards > :nth-child(1)').click();
    cy.contains('div', 'Elements').click()
  });

  context("Text Box Section", () => {

    it('should submit user info', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
      cy.get('#userName').type(`${userData.firstName} ${userData.lastName}`);
      cy.get('#userEmail').type(`${userData.email}`);
      cy.get('#currentAddress').type(`${userData.currentAddress}`);
      cy.get('#permanentAddress').type(`${userData.permanentAddress}`);
      cy.get("#submit").click();

      cy.get("#name").should('have.text', `Name:${userData.firstName} ${userData.lastName}`);
    })
  });

  context("Check Box Section", () => {

    it("should select all check boxes", () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click();
      cy.get('[for="tree-node-home"]').as('checkAllBtn').click();
      cy.get('@checkAllBtn')//.should('be.checked');
      cy.get('button.rct-option.rct-option-expand-all').click(); // Expand all options
      cy.get('#tree-node-desktop').should('be.checked');
      cy.get('#tree-node-downloads').should('be.checked');
      cy.get('#tree-node-documents').should('be.checked');
      cy.get('#tree-node-private').should('be.checked');
      cy.get('#tree-node-general').should('be.checked');
      cy.get('#tree-node-excelFile').should('be.checked');
    })
  })
  /*
  it("should collapse direct child check boxes" ,() => {
    // cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click();
    // cy.get('.rct-node').contains("Downloads");
    // cy.get('.rct-collapse').click();
  })
  it("should expand all check boxes" ,() => {
  })
  it("should collapse all check boxes" ,() => {
    // cy.get('.rct-options > :nth-child(2)').click();
  })
  /**/
  context("Radio Button Section", () => {
    it('should select radio button and update page', () => {
      cy.get('#item-2').click();
      cy.get('[for="impressiveRadio"]').as('impressiveBtn');
      cy.get('@impressiveBtn').click();
      // cy.get('@impressiveBtn').should('be.checked');
      cy.get('.mt-3')
        .should('have.text', 'You have selected Impressive');
      cy.get('[for="yesRadio"]').as('yesBtn');
      cy.get('@yesBtn').click();
      cy.get('.mt-3')
        .should('have.text', 'You have selected Yes');
      // .should('have.Yes', 'mt-3')
    });
  });

  context("Web Tables Section", () => {
    it('should insert a row', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').as('webTables');
      cy.get('@webTables').click();
      cy.get('button[id="addNewRecordButton"]').click();
      cy.get('input[placeholder="First Name"]').type(userData.firstName);
      cy.get('input[placeholder="Last Name"]').type(userData.lastName);
      cy.get('input[placeholder="name@example.com"]').type(userData.email);
      cy.get('input[placeholder="Age"]').type(userData.age);
      cy.get('#salary').type(userData.salary);
      cy.get('input[placeholder="Department"]').type(userData.department);
      cy.get('#submit').click();
      cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').should('have.text', `${userData.firstName}`);
      cy.get(':nth-child(4) > .rt-tr > :nth-child(2)').should('have.text', `${userData.lastName}`);
      cy.get(':nth-child(4) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]').should('have.text', `${userData.age}`);
      cy.get(':nth-child(4) > .rt-tr > :nth-child(4)').should('have.text', `${userData.email}`);
      cy.get(':nth-child(4) > .rt-tr > :nth-child(5)').should('have.text', `${userData.salary}`);
      cy.get(':nth-child(4) > .rt-tr > :nth-child(6)').should('have.text', `${userData.department}`);
    });
  });


  context("Clicks Section", () => {
    it("should perform mouse clicks", () => {

      cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click()
      // cy.get('@btn').click()
      cy.get('button#doubleClickBtn').dblclick()
      cy.get('button#rightClickBtn').rightclick()
      cy.contains('button', 'Click Me').click()
      cy.get('#doubleClickMessage').should('have.text', 'You have done a double click')
      cy.get('#rightClickMessage').should('have.text', 'You have done a right click')
    })
  });


  context("Links Section", () => {
    it('Home links', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links')
      cy.get('@links').click()
      cy.get('#simpleLink').click()
      cy.get('#simpleLink').should("have.attr", 'href').and('equal', 'https://demoqa.com')
      cy.get('#simpleLink').should("have.attr", 'target').and('equal', '_blank')
      // cy.get('#simpleLink').invoke('removeAttr', "target").click()
    })

    it('HOMEQUYn9 link', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links')
      cy.get('@links').click()
      cy.get('#dynamicLink').click()
      cy.get('#simpleLink').should("have.attr", 'href').and('equal', 'https://demoqa.com')
      cy.get('#simpleLink').should("have.attr", 'target').and('equal', '_blank')
    })

    it('Created links', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links').as('Links')
      cy.get('@links').click()
      cy.get('#created').click()
      cy.get('#linkResponse').should("have.text", 'Link has responded with staus 201 and status text Created')
    })

    it('No content link', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links').as('Links')
      cy.get('@links').click()
      cy.get('#no-content').click()
      cy.get('#linkResponse').should("have.text", 'Link has responded with staus 204 and status text No Content')
    })

    it('Moved link', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links').as('Links')
      cy.get('@links').click()
      cy.get('#moved').click()
      cy.get('#linkResponse').should("have.text", 'Link has responded with staus 301 and status text Moved Permanently')
    })

    it('Bad request link', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links').as('Links')
      cy.get('@links').click()
      cy.get('#bad-request').click()
      cy.get('#linkResponse').should("have.text", 'Link has responded with staus 400 and status text Bad Request')
    })

    it('Unauthorized link', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links').as('Links')
      cy.get('@links').click()
      cy.get('#unauthorized').click()
      cy.get('#linkResponse').should("have.text", 'Link has responded with staus 401 and status text Unauthorized')
    })

    it('Forbidden link', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links').as('Links')
      cy.get('@links').click()
      cy.get('#forbidden').click()
      cy.get('#linkResponse').should("have.text", 'Link has responded with staus 403 and status text Forbidden')
    })

    it('No found link', () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').as('links').as('Links')
      cy.get('@links').click()
      cy.get('#invalid-url').click()
      cy.get('#linkResponse').should("have.text", 'Link has responded with staus 404 and status text Not Found')
    })


  });


  context("Upload and Download Section", () => {

    it("should upload and download file", () => {
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-7').click()
      cy.get('#downloadButton').click()
      cy.verifyDownload('sampleFile.jpeg')
      cy.get('#uploadFile').attachFile('arsenal.jpeg')
      cy.get("#uploadedFilePath").should('include.text', 'arsenal.jpeg')
    })
  })

  context("Windows and Tabs", () => {
    it('new tab', () => {
      cy.contains('div', 'Alerts, Frame & Windows').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-0').click()
      cy.get("#tabButton").click()
      cy.url().should('include', '/browser-windows')
      cy.go('back')
    })

    it('new window', () => {
      cy.contains('div', 'Alerts, Frame & Windows').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-0').click()
      cy.get("#windowButton").click()
      cy.url().should('include', '/browser-windows')
      cy.go('back')
    })

    it('new window message', () => {
      cy.contains('div', 'Alerts, Frame & Windows').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-0').click()
      cy.window().then(win => {
        cy.stub(win, 'open').returns('Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.');
        cy.get('#messageWindowButton').click()
        cy.url().should('include', '/browser-windows')
        cy.go('back')
      });
    })

  });

  context("Alerts", () => {
    it('should show alert immediately', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
      cy.get('#alertButton').click()
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('You clicked a button');
      })
    })

    it('should show an alert in 5 sec', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
      cy.get('#timerAlertButton').click()
      cy.wait(5000)

      cy.on('window:alert', (alertWithTimeText) => {
        expect(alertWithTimeText).to.contains('This alert appeared after 5 seconds');
      })
    })

    it('should show confirm box', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
      cy.get('#confirmButton').click()

      cy.on('window:confirm', (confirmText) => {
        expect(confirmText).to.contains('Do you confirm action?');
        return false
      })
      cy.get('#confirmResult').should('have.text', 'You selected Cancel')
    })

    it('prompt box', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
      cy.window().then(win => {
        cy.stub(win, 'prompt').returns('Christopher');
        cy.get('#promtButton').click();
        cy.get('#promptResult').should('have.text', 'You entered Christopher');
      });
    })

  })

  context("frames", () => {
    it('large frame', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-2').click()
      cy.get('#frame1')
        .its('0.contentDocument.body')
        .should('be.visible')
        .and('have.text', 'This is a sample page')

    })

    it('small frame', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-2').click()
      cy.get('#frame2')
        .its('0.contentDocument.body')
        .should('be.visible')
      // .and('have.text', 'This is a sample page')

    })

    it('Nested Frames 1', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-3').click()
      cy.get('#frame1')
        .its('0.contentDocument.body')
        .should('be.visible')
        .and('have.text', 'Parent frame')
    })
  });

  context("Modals", () => {
    it('Small Modal: open & close', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-4').click()
      cy.get('#showSmallModal').click()
      cy.get('.modal-content')
        .should('be.visible')
      cy.get('#closeSmallModal').click()
      cy.get('.modal-content')
        .should('not.exist')
    })

    it('Large Modal: open & close', () => {
      cy.get(':nth-child(3) > .group-header > .header-wrapper').click()
      cy.get(':nth-child(3) > .element-list > .menu-list > #item-4').click()
      cy.get('#showLargeModal').click()
      cy.get('.modal-content')
        .should('be.visible')
      cy.get('#closeLargeModal').click()
      cy.get('.modal-content')
        .should('not.exist')
    })
  });


})