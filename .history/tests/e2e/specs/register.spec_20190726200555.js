// https://docs.cypress.io/api/introduction/api.html

const visit = () => cy.visit("/");

describe("My First Test", () => {
  beforeEach(visit);

  const getStore = () => cy.window().its("app.$store");

  it("has nb and user", () => {
    getStore()
      .its("state")
      .should("have.keys", ["books", "nb"]);

    const store = getStore();
    console.log(store.its("state"));
    console.log("ici");
  });

  it("Create an user", () => {
    cy.visit("/form");
    cy.contains("h1", "Register");
    cy.get(".sexe:eq(1)").click();
    cy.get("#nom").type("Robert"); // Type 'Hello, World' into the 'input'
    cy.get("#prenom").type("Jean"); // Type 'Hello, World' into the 'input'
    cy.get("#biographie").type("Je suis Jean-Robert");
    //cy.get(".loisirs input").click("Le violon", { force: true });
    cy.get(".loisir:eq(2) .v-input--selection-controls__input").click();

    cy.get(".loisirs").click();
    cy.get(".v-list-item")
      .eq(2)
      .click();

    cy.get("#submission").click();
    cy.url().should("include", "/"); // => true
  });
});

describe("Test APIs", () => {
  it("Test IP API", () => {
    cy.request({
      method: "GET",
      url: "http://ip.jsontest.com/"
    }).as("ip");

    cy.get("@ip").should(response => {
      assert.isObject(response.body, {
        ip: "185.132.72.42"
      });
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
    });
  });
});
