describe('Single Movie Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
      cy.get('.movies-container').children().contains('After We Collided').click()
    });

    it('A user should see the movie details for a specific movie', () => {
      cy.url().should('include', '/613504')
        cy.contains('h2', 'After We Collided')
        cy.get('.single-movie-backdrop').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg")
        cy.contains('p', 'Overview: Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.')
        cy.contains('p', 'Release Date: 2020-09-02')
        cy.contains('p', 'Genres: RomanceDrama')
        cy.contains('p','Runtime: 105 minutes')
    });

    it('A user should be able to click the X button on the movie details page and navigate back to home', () => {
      cy.get('.button').click()
        .go('back')
        .go('forward')
    });

    it('A user should be able to see the movie trailer carousel to view different movies', () => {
      cy.get('.all-swiper-movies').children(). should('be.visible')
    });

    it('A user should be able to click on the swiper buttons to change the movie', () => {
      cy.get('.swiper-button-next').click({multiple : true})
    });

    it('')

})
