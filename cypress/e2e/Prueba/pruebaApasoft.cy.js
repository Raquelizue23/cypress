describe("Prueba Apasoft", () => {
  beforeEach(() => {
    cy.visit("https://www.apasoft-training.com/cursos-oracle");
  });

  it("Probar titulo", () => {
    cy.title().should("include", "Cursos Oracle");
  });

  it("Prueba de lonitud de lista de elementos", () => {
    cy.get(
      ".design-element-link-part > .element-main-box.template-item > .element-border-box.template-item > .element-content-box.template-item > .template-item"
    ).should("have.length", 16);
  });

  it("prueba si un elemento tiene una clase especifica", () => {
    cy.xpath(
      '//*[@id="id1593261966142"]/h1/div/div[2]/div/div/div/div/div'
    ).should(
      "have.class",
      "rich-text-content common-rich-content-style has-content"
    );
  });

  //   it("prueba si un elemento tiene un texto x", () => {
  //     cy.get(
  //       "#id1667513581842 > .element-main-box > .element-border-box > .element-content-box > .content-container > .label-element > .text-content"
  //     ).should("have.text", "Inicio");
  //   });

  it("prueba si un elemento es visible", () => {
    cy.get(
      "#id1593261966142 > .html-element > .element-main-box > .element-border-box > .element-content-box > .content-container > .rich-text-element-content > .rich-text-positioning-wrapper > .rich-text-content > div"
    )
      .should("be.visible")
      .debug();
  });
});
