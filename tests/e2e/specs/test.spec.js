// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url title Julien", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome Julien");
    cy
      // Find the el with id 'some-link'
      .get("#books")
      .then($myElement => {
        cy.contains("h3", "Les bouquins");
      });
  });

  it("Visits the About page root", () => {
    cy.visit("/");
    cy.contains("a", "About");
    cy.contains("About").click();
    cy.contains("h1", "This is an about page");
  });

  it("Decrease Number", () => {
    cy.visit("/form");
    cy.contains("h1", "Register");
    cy.contains("button", "Diminuer").click();
    cy.contains("#nb", "7").click();
  });

  it("Increase Number", () => {
    cy.visit("/form");
    cy.contains("h1", "Register");
    cy.contains("button", "Augmenter").click();
    cy.contains("#nb", "9").click();
  });
});
