describe("Single Movie Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/613504",
      {
        movie: {
          id: 613504,
          title: "After We Collided",
          poster_path:
            "https://image.tmdb.org/t/p/original//kiX7UYfOpYrMFSAGbI6j1pFkLzQ.jpg",
          backdrop_path:
            "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg",
          release_date: "2020-09-02",
          overview:
            "Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.",
          genres: ["Romance", "Drama"],
          budget: 0,
          revenue: 0,
          runtime: 105,
          tagline: "Can love overcome the past?",
          average_rating: 5.25,
        },
      }
    );
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/613504/videos",
      {
        videos: [
          {
            id: 320,
            movie_id: 613504,
            key: "2SvwX3ux_-8",
            site: "YouTube",
            type: "Trailer",
          },
          {
            id: 318,
            movie_id: 613504,
            key: "u5B76cpkbfU",
            site: "YouTube",
            type: "Clip",
          },
          {
            id: 319,
            movie_id: 613504,
            key: "BJBxXDhpZq0",
            site: "YouTube",
            type: "Teaser",
          },
        ],
      }
    );
    cy.visit("http://localhost:3000/613504");
  });

  it("should be able to click the X button on the movie details page and navigate back to home", () => {
    cy.get(".button").click().get(".movies-container").should("be.visible");
  });

  it("should be able to view the page title", () => {
    cy.get("h1").contains("🍿 Rancid Tomatillos 🎬");
  });

  it("should see the movie details for a specific movie", () => {
    cy.url().should("include", "/613504");
    cy.contains("h2", "After We Collided");
    cy.get(".single-movie-backdrop").should(
      "have.attr",
      "src",
      "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg"
    );
    cy.get(".all-swiper-movies").children().should("be.visible");
    cy.contains(
      "p",
      "Overview: Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever."
    );
    cy.contains("p", "Release Date: 2020-09-02");
    cy.contains("p", "Genres: RomanceDrama");
    cy.contains("p", "Runtime: 105 minutes");
  });

  it("should be able to click through the swiper buttons to change the movie", () => {
    cy.get(".swiper-button-next").click({ multiple: true });
  });

  it("should be able to use the forward and back arrows to navigate between pages", () => {
    cy.get(".button").click().go("back").go("forward");
  });
});
