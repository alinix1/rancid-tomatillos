describe('All Movie (Main) Page Error Handling', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

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

})