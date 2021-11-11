describe('404 page', () => {
  it('Should display when navigating to a page that does not exist', () => {
    cy.visit('/ohhh-noes-this-page-aint-here', { failOnStatusCode: false });

    cy.get('h1').should('contain', '404');
  });
});
