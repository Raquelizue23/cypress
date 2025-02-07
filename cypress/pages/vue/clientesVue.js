class clientesVue {
  goToSite() {
    cy.visit("http://localhost:8080/#/clientsPage");
  }

  verifyLengthRowsTablaClientes(rows) {
    cy.get("table[class='q-table'] tbody")
      .children()
      .then((childs) => {
        assert.equal(
          childs.length,
          rows,
          "Elementos encontrados en la tabla TablaClientes"
        );
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
    // cy.get("button[aria-page-object='CerrarSesionMenu']").click();
    cy.xpath('//*[@id="q-app"]/div/header/div[1]/button[2]').click();
  }

  clickAgregarCliente() {
    cy.get("button[aria-page-object='AgregarCliente']").click();
  }

  clickBtnDeleteRLMR1234() {
    cy.get("button[aria-page-object='btnDeleteRLMR1234']").click();
  }

  clickBtnEditRLMR1234() {
    cy.get("button[aria-page-object='btnEditRLMR1234']").click();
  }

  clickBtnDeleteASDF4321() {
    cy.get("button[aria-page-object='btnDeleteASDF4321']").click();
  }

  clickBtnEditASDF4321() {
    cy.get("button[aria-page-object='btnEditASDF4321']").click();
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
export default clientesVue;
