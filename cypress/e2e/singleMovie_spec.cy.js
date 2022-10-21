describe('Single Movie Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
       .get('.mini-poster').first().click()
    })

    it('A user should see the movie details for a specific movie', () => {
      cy.url().should('include', '528085')
        .get('h2').contains('2067')
        .get('.single-movie-backdrop').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg")
        .get('p').contains('Overview: A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.')
        .get('p').contains('Release Date: 2020-10-01')
        .get('p').contains('Genres: Science FictionThriller')
        .get('p').contains('Runtime: 114 minutes')
    })

    it('A user should be able to click the X button on the movie details page and navigate back to home', () => {
      cy.get('a').click()
        .go('back')
        .go('forward')
    })
})
