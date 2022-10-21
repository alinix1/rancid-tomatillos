describe("Main Movie Page", () => {
  beforeEach(() => {
   cy.intercept('GET',"https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      "movies": [
        {
          id: 528085,
          poster_path: "https://image.tmdb.org/t/p/original//7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//5UkzNSOK561c2QRy2Zr4AkADzLT.jpg",
          title: "2067",
          average_rating: 5,
          release_date: "2020-10-01"
          },
        {
          id: 613504,
          poster_path: "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
          title: "After We Collided",
          average_rating: 5.25,
          release_date: "2020-09-02"
          },
          {
          id: 659986,
          poster_path: "https://image.tmdb.org/t/p/original//gzFatNrw0lhKD5NxaU6zC7S2KjP.jpg",
          backdrop_path: "https://image.tmdb.org/t/p/original//xUUtcxWC6H48UCrpRwwSPQz69XC.jpg",
          title: "The Owners",
          average_rating: 4.857142857142857,
          release_date: "2020-09-04"
          }
      ]
    }) 
    cy.visit("http://localhost:3000/");
  });

  it("should be able to visit http://localhost:3000 and see the application title", () => {
    cy.get("h1").contains("🍿 Rancid Tomatillos 🎬");
  });

  it("should be able to see movies, each with their poster, title and rating", () => {
    cy.get(".mini-poster").should("be.visible");
    cy.get(".movies-container").should("be.visible");
    cy.contains(".card-title", "2067");
    cy.contains(".card-rating", 5);
  });

  it("should be able to click on a movie, and be shown additional details about that movie", () => {
    cy.get(".movies-container").children().contains("2067").click();
    cy.url().should("include", "/528085");
    cy.contains("h2", "2067");
  });

  it('should not have a take me home X button', () => {
    cy.get('.button').should('not.exist')
  });
  
});
