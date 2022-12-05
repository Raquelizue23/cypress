const { interval } = require("rxjs");

describe("Primer ejemplo de prueba", () => {
  beforeEach(() => {
    cy.visit("https://docs.cypress.io/guides/overview/why-cypress");
  });

  it("Ejemplo de prueba", () => {
    cy.title().should("include", "Why Cypress?");
    //cy.xpath('//*[@id="Introduction"]');
    //cy.contains("End-to-End Only");
  });

  it("Ejemplo de prueba 2", () => {
    cy.get(".nuxt-content > :nth-child(6) > :nth-child(1) > a").click();
  });
});
