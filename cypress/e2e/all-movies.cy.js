describe('Dashboard to show all movies', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('should be able to view the dashboard movie page', () => {
    cy.get('h1').contains('🍿 Rancid Tomatillos 🎬')
    .get('[data-cy="individual-movie"]').should('be.visible')
    .get('img').should('be.visible')
    .get('[data-cy="title"]').contains('2067')
    .get('[data-cy="rating"]').contains(5)
  });

  it('should be able to view single movie once clicked on', () => {

  });
})