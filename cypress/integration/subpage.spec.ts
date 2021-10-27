describe('Sub section index page', () => {
  it('Should display without error', () => {
    cy.visit('/momentum/1st-level');
  });
});

describe('Sub section test page', () => {
  it('Should display without error', () => {
    cy.visit('/momentum/1st-level/test');
  });
});
