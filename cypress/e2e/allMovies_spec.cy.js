describe("Main Movie Page", () => {
  
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    cy.visit('http://localhost:3000')
  })

  it('A user should be able to visit http://localhost:3000 and see the application title', () => {
    cy.get('h1').contains('🍿 Rancid Tomatillos 🎬').should('be.visible')
    .should('have.length', 1)
  })

  it('A user should be able to visit http://localhost:3000 and view a collection of movies', () => {
    cy.get('div').should('have.class', 'movies-container')
    cy.get('.mini-poster')
    .should('have.length', 40)
  })

   it('A user should be able to see all movies, each with their poster, title and rating', () => {
    cy.get('div').should('have.class', 'movies-container')
    .get('.mini-poster').should('exist')
    .get('.card-title').should('exist')
    .get('.card-rating').should('exist')
  })

  it('A user should not be able to see movie details for a single movie', () => {
    cy.get('.movies-container').should('be.visible')
      .get('.single-movie.container').should('not.exist')
  })

  it('A user should be able to click on a movie, and be shown additional details about that movie', () => {
    cy.get('.mini-poster').first().click()
  })
   
})
