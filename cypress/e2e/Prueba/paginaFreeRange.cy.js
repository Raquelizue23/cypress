describe("Segundo ejemplo de prueba", () => {
  beforeEach(() => {
    cy.visit("https://www.freerangetesters.com/");
  });

  it("Click en el botón de Blog", () => {
    cy.get(".cNZaQ8").click();
    //cy.get("#comp-l02x1m8d1label").click();
  });
});
