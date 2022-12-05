describe("Segundo ejemplo de prueba", () => {
  beforeEach(() => {
    cy.visit("https://neoattack.com/neowiki/xpath/");
  });

  it("Probar titulo", () => {
    cy.title().should("include", "¿Qué es el Xpath y para qué sirve?");
    //cy.xpath('//*[@id="Introduction"]');
    //cy.contains("Free Range Testers,");
  });

  it("Probar boton", () => {
    cy.get("#menu-menu-principal > .cmi > a");
    //cy.xpath('//*[@id="Introduction"]');
    //cy.contains("Free Range Testers,");
  });
});
