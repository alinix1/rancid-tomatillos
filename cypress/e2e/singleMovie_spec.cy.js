describe("Single Movie Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should be able to view the page title", () => {
    cy.get("h1").contains("🍿 Rancid Tomatillos 🎬");
  });

  it("should see the movie details for a specific movie", () => {
    cy.get(".movies-container")
      .children()
      .contains("After We Collided")
      .click();
    cy.url().should("include", "/613504");
    cy.contains("h2", "After We Collided");
    cy.get(".single-movie-backdrop").should(
      "have.attr",
      "src",
      "https://image.tmdb.org/t/p/original//r5srC0cqU36n38azFnCyReEksiR.jpg"
    );
    cy.contains(
      "p",
      "Overview: Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever."
    );
    cy.contains("p", "Release Date: 2020-09-02");
    cy.contains("p", "Genres: RomanceDrama");
    cy.contains("p", "Runtime: 105 minutes");
  });

  it("should be able to click the X button on the movie details page and navigate back to home", () => {
    cy.get(".movies-container")
      .children()
      .contains("After We Collided")
      .click();
    cy.get(".button").click().go("back").go("forward");
  });

  it("should be able to see the movie trailer carousel to view different movies", () => {
    cy.get(".movies-container")
      .children()
      .contains("After We Collided")
      .click();
    cy.get(".all-swiper-movies").children().should("be.visible");
  });

  it("should be able to click through the swiper buttons to change the movie", () => {
    cy.get(".movies-container")
      .children()
      .contains("After We Collided")
      .click();
    cy.get(".swiper-button-next").click({ multiple: true });
  });

  it("should show an error message when individual movie details returns not found from API fetch", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/613504",
      {
        statusCode: 404,
        body: { message: "Something went wrong, please try again!" },
      }
    );
    cy.get(".movies-container")
      .children()
      .contains("After We Collided")
      .click();
    cy.contains(".error-message", "Something went wrong, please try again!");
  });

  it("should show an error message when individual movie trailers return not found from API fetch", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/613504/videos",
      {
        statusCode: 404,
        body: { message: "Something went wrong, please try again!" },
      }
    );
    cy.get(".movies-container")
      .children()
      .contains("After We Collided")
      .click();
    cy.contains(".error-message", "Something went wrong, please try again!");
  });

  it("should show an error message when the internal server is down for a movie", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/613504",
      {
        statusCode: 500,
        body: { message: "Something went wrong, please try again!" },
      }
    );
    cy.get(".movies-container")
      .children()
      .contains("After We Collided")
      .click();
    cy.contains(".error-message", "Something went wrong, please try again!");
  });

  it("should show an error message when the internal server is down for an individual movies trailers", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/613504/videos",
      {
        statusCode: 500,
        body: { message: "Something went wrong, please try again!" },
      }
    );
    cy.get(".movies-container")
      .children()
      .contains("After We Collided")
      .click();
    cy.contains(".error-message", "Something went wrong, please try again!");
  });
});
