/// <reference types="Cypress" />

describe('Windows and Tabs', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', (req) => {
      cy.log(req.headers);
      delete req.headers['if-none-match'];
    }).as('posts');

    cy.visit('https://jsonplaceholder.typicode.com');
  });

  it("mocking with intercept test with static response", () => {

    // cy.intercept('POST', '/cdn-cgi/rum?').as('getComments')
    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then(response => {
      cy.log(response)
      // cy.request('/post')
    });
  });

  it("intercepts /posts returns the correct number of posts", () => {
    cy.visit('https://jsonplaceholder.typicode.com/posts') //.then(response => {
      // cy.log(response)
      // cy.request('/post')
    // });
    cy.wait('@posts', { log: true, timeout: 6000 }).then(res => {
      // console.log(res)
    })
    // .its("response.status").should('have.value', 200);
  })

  // cy.intercept('GET', '/__/*').as('imgs')
  // cy.intercept('/activities/*').as('getActivities')
  // fetch("https://jsonplaceholder.typicode.com/cdn-cgi/rum?", {

  // cy.once("fail", (err) => {
  //   console.log(err);
  //   cy.log(err);
  //   return false;
  // });

  // https://jsonplaceholder.typicode.com/__/megafamous.png
  /*
  fetch("https://jsonplaceholder.typicode.com/__/mockend.svg", {
"headers": {
  "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Chromium\";v=\"106\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"Windows\""
},
"referrer": "https://jsonplaceholder.typicode.com/__/",
"referrerPolicy": "strict-origin-when-cross-origin",
"body": null,
"method": "GET",
"mode": "cors",
"credentials": "omit"
});
  */
  // cy.get("table:nth-of-type(1) a[href='/posts']").click();
  // cy.wait(500)
  // })
});