describe("OAuth feature apis", () => {
  let access_token = '';
  let userId = '';

  before('generate token and userId', () => {
    cy.request({
      method: 'POST',
      url: 'http://coop.apps.symfonycasts.com/token',
      form: true,
      body: {
        "client_id": "CypressOAuthAPI",
        "client_secret": "f2bee1e8ccd40f2571388d7b3851d15c", //"http://coop.apps.symfonycasts.com/token?client_id=CypressOAuthAPI&client_secret=f2bee1e8ccd40f2571388d7b3851d15c&grant_type=client_credentials",
        "grant_type": "client_credentials"
      }
    }).then(response => {
      cy.log(response)
      cy.log(response.body.access_token);
      access_token = response.body.access_token;
      // 0208914995

      cy.request({
        method: 'GET',
        url: 'http://coop.apps.symfonycasts.com/api/me',
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      }).then(response => {
        userId = response.body.id;
        cy.log('userId', userId);
      });
    });
  });


  it('unlock the barn Test', () => {
    cy.request({
      method: 'POST',
      url: `http://coop.apps.symfonycasts.com/api/${userId}/chickens-feed`,
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    }).then(response => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.equal(200)
    })
  })
})