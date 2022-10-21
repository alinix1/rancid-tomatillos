describe("Main Movie Page", () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('A user should be able to visit http://localhost:3000 and see the application title', () => {
    cy.get('h1').contains('🍿 Rancid Tomatillos 🎬')
  });

  it('A user should be able to visit http://localhost:3000 and view a collection of movies', () => {
    cy.get('.movies-container').should('be.visible')
    cy.get('.mini-poster').should('have.length', 40)
  })

   it('A user should be able to see movies, each with their poster, title and rating', () => {
    cy.get('.mini-poster').should('be.visible')
    cy.contains('.card-title', '2067')
    cy.contains('.card-rating', 5)
  })

  it('A user should not be able to see movie details for a single movie', () => {
    cy.get('.movies-container').should('be.visible')
      .get('.single-movie.container').should('not.exist')
  });

  it('A user should be able to click on a movie, and be shown additional details about that movie', () => {
    cy.get('.movies-container').children().contains('2067').click()
    cy.url().should('include', '/528085')
    cy.contains('h2', '2067')
  });
  
  }); 
   
