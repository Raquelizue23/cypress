class AgregarClientePlugin {
  url = "https://crud-firebase-cypress.web.app/spa/#/clientsPage";
  goToSite() {
    cy.visit(this.url);
  }

  verifySite() {
    cy.url().should("eq", this.url);
  }

  clickBotonMenu() {
    cy.get("button[aria-page-object='BotonMenu']").click();
  }

  clickCerrarSesionMenu() {
    cy.get("button[aria-page-object='CerrarSesionMenu']").click();
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

  setValueSearchClients(value) {
    if (value != "")
      cy.get("input[aria-page-object='SearchClients']").type(value);
    else this.clearSearchClients();
  }

  getValueSearchClients() {
    cy.get("input[aria-page-object='SearchClients']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearSearchClients() {
    cy.get("input[aria-page-object='SearchClients']").clear();
  }

  clickAgregarCliente() {
    cy.get("button[aria-page-object='AgregarCliente']").click();
  }

  clickBtnDelete007() {
    cy.get("button[aria-page-object='btnDelete007']").click();
  }

  clickBtnEdit007() {
    cy.get("button[aria-page-object='btnEdit007']").click();
  }

  clickBtnDeleteRBS123() {
    cy.get("button[aria-page-object='btnDeleteRBS123']").click();
  }

  clickBtnEditRBS123() {
    cy.get("button[aria-page-object='btnEditRBS123']").click();
  }

  clickBtnDeletetfy897667() {
    cy.get("button[aria-page-object='btnDeletetfy897667']").click();
  }

  clickBtnEdittfy897667() {
    cy.get("button[aria-page-object='btnEdittfy897667']").click();
  }

  clickBtnDeletefrgthyh() {
    cy.get("button[aria-page-object='btnDeletefrgthyh']").click();
  }

  clickBtnEditfrgthyh() {
    cy.get("button[aria-page-object='btnEditfrgthyh']").click();
  }
}
export default AgregarClientePlugin;
