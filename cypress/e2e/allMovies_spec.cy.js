describe("Main Movie Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should be able to visit http://localhost:3000 and see the application title", () => {
    cy.get("h1").contains("🍿 Rancid Tomatillos 🎬");
  });

  it("should be able to visit http://localhost:3000 and view a collection of movies", () => {
    cy.get(".movies-container").should("be.visible");
    cy.get(".mini-poster").should("have.length", 40);
  });

  it("should be able to see movies, each with their poster, title and rating", () => {
    cy.get(".mini-poster").should("be.visible");
    cy.contains(".card-title", "2067");
    cy.contains(".card-rating", 5);
  });

  it("should not be able to see movie details for a single movie", () => {
    cy.get(".movies-container")
      .should("be.visible")
      .get(".single-movie.container")
      .should("not.exist");
  });

  it("should be able to click on a movie, and be shown additional details about that movie", () => {
    cy.get(".movies-container").children().contains("2067").click();
    cy.url().should("include", "/528085");
    cy.contains("h2", "2067");
  });

  it("should show an error message when movie content returns not found from API fetch", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 404,
        body: { message: "Something went wrong, please try again!" },
      }
    );
    cy.contains(".error-message", "Something went wrong, please try again!");
  });

  it("should show an error message when the internal server is down", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 500,
        body: { message: "Something went wrong, please try again!" },
      }
    );
    cy.contains(".error-message", "Something went wrong, please try again!");
  });
});
