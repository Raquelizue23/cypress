class loginVue {
  url = "http://localhost:8080/#/auth";
  goToSite() {
    cy.visit(this.url);
  }

  verifySite() {
    cy.url().should("eq", this.url);
  }

  setValueEmail(value) {
    cy.get("input[aria-page-object='email']").type(value);
  }

  getValueEmail() {
    cy.get("input[aria-page-object='email']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearEmail() {
    cy.get("input[aria-page-object='email']").clear();
  }

  setValuePassword(value) {
    cy.get("input[aria-page-object='password']").type(value);
  }

  getValuePassword() {
    cy.get("input[aria-page-object='password']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearPassword() {
    cy.get("input[aria-page-object='password']").clear();
  }

  clickBotonMenu() {
    cy.get("button[aria-page-object='BotonMenu']").click();
  }

  clickLoginSubmit() {
    cy.get("button[aria-page-object='LoginSubmit']").click();
  }

  clickIniciaSesionMenu() {
    cy.get("a[aria-page-object='IniciaSesionMenu']").click();
  }

  clickLinkInicio() {
    cy.get("a[aria-page-object='LinkInicio']").click();
  }

  clickLinkClients() {
    cy.get("a[aria-page-object='LinkClients']").click();
  }

  clickLinkCatSociedades() {
    cy.get("a[aria-page-object='LinkCatSociedades']").click();
  }

  clickLinkPruebas() {
    cy.get("a[aria-page-object='LinkPruebas']").click();
  }
}
export default loginVue;
