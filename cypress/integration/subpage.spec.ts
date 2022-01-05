describe('Sub section page', () => {
  describe('index page in sub section', () => {
    it('Should display without error', () => {
      cy.visit('/momentum/1st-level');
    });
  });

  describe('test page in subsection', () => {
    it('Should display without error', () => {
      cy.visit('/momentum/1st-level/test');
    });
  });

  describe('links', () => {
    it('Should work as expected for external links', () => {
      cy.visit('/momentum/1st-level/test');

      cy.get('a')
        .contains('Duck, duck, GO! (quick check)')
        .then(($a) => {
          const url = $a.prop('href');
          cy.request(url).its('body').should('include', '</html>');
        });
    });

    it('Should work as expected for internal links', () => {
      cy.visit('/momentum/1st-level/test');
      cy.contains('Internal Link').click();
      cy.location('pathname').should('eq', '/momentum/1st-level');
    });

    it('Should allow for relative links in the current directory', () => {
      cy.visit('/momentum/1st-level/test');
      cy.contains('Relative to current directory Link').click();
      cy.location('pathname').should('eq', '/momentum/1st-level/relative-link-test');
    });
  });
});
