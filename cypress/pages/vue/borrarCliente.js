class borrarCliente {
  url = "http://localhost:8080/#/clientsPage";
  goToSite() {
    cy.visit(this.url);
  }

  verifySite() {
    cy.url().then((url) => {
      const currentURL = url;
      if (currentURL == this.url) cy.log(true);
      else cy.log(false);
    });
  }
  setValueSearchClients(value) {
    cy.get("input[aria-page-object='SearchClients']").type(value);
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

  clickBotonMenu() {
    cy.get("button[aria-page-object='BotonMenu']").click();
  }

  clickCerrarSesionMenu() {
    cy.get("button[aria-page-object='CerrarSesionMenu']").click();
  }

  clickAgregarCliente() {
    cy.get("button[aria-page-object='AgregarCliente']").click();
  }

  clickBtnDeleteASDF4321() {
    cy.get("button[aria-page-object='btnDeleteASDF4321']").click();
  }

  clickBtnEditASDF4321() {
    cy.get("button[aria-page-object='btnEditASDF4321']").click();
  }

  clickBtnDeleteRLMR1234() {
    cy.get("button[aria-page-object='btnDeleteRLMR1234']").click();
  }

  clickBtnEditRLMR1234() {
    cy.get("button[aria-page-object='btnEditRLMR1234']").click();
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
  clickOkBorrar() {
    cy.get('[data-autofocus="true"] > .q-btn__content').click();
  }

  clickCancelBorrar() {
    cy.get(".q-card__actions > :nth-child(1) > .q-btn__content").click();
  }
}
export default borrarCliente;
