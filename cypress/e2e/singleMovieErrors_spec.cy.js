describe("Single Movie page Error Handling", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/613504");
  });

  it("should show an error message when individual movie details return not found from API fetch", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/613504",
      {
        statusCode: 404,
        body: { message: "Something went wrong, please try again!" },
      }
    );
    cy.contains(".error-message", "Something went wrong, please try again!");
  });

  it("should show an error message when the internal server is down for a specific movie", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/613504",
      {
        statusCode: 500,
        body: { message: "Something went wrong, please try again!" },
      }
    );
    cy.contains(".error-message", "Something went wrong, please try again!");
  });

  it("should show an error message when individual movies trailers return not found from API fetch", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/613504/videos",
      {
        statusCode: 404,
        body: { message: "Sorry, error displaying videos." },
      }
    );
    cy.contains(".error-message", "Sorry, error displaying videos.");
  });

  it("should show an error message when the internal server is down for an individual movies trailers", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/613504/videos",
      {
        statusCode: 500,
        body: { message: "Sorry, error displaying videos." },
      }
    );
    cy.contains(".error-message", "Sorry, error displaying videos.");
  });
});
