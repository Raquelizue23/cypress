class editarCliente {
  goToSite() {
    cy.visit("http://localhost:8080/#/clientsPage");
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

  setValueNombreCliente(value) {
    cy.get("input[aria-page-object='NombreCliente']").type(value);
  }

  getValueNombreCliente() {
    cy.get("input[aria-page-object='NombreCliente']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearNombreCliente() {
    cy.get("input[aria-page-object='NombreCliente']").clear();
  }

  setValueFechaCliente(value) {
    cy.get("input[aria-page-object='FechaCliente']").type(value);
  }

  getValueFechaCliente() {
    cy.get("input[aria-page-object='FechaCliente']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearFechaCliente() {
    cy.get("input[aria-page-object='FechaCliente']").clear();
  }

  setValueHoraCliente(value) {
    cy.get("input[aria-page-object='HoraCliente']").type(value);
  }

  getValueHoraCliente() {
    cy.get("input[aria-page-object='HoraCliente']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearHoraCliente() {
    cy.get("input[aria-page-object='FechaHora']").clear();
  }

  setValueFechaHora(value) {
    cy.get("input[aria-page-object='FechaHora']").type(value);
  }

  getValueFechaHora() {
    cy.get("input[aria-page-object='FechaHora']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearFechaHora() {
    cy.get("input[aria-page-object='FechaHora']").clear();
  }

  setValueTarifa(value) {
    cy.get("input[aria-page-object='Tarifa']").type(value);
  }

  getValueTarifa() {
    cy.get("input[aria-page-object='Tarifa']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearTarifa() {
    cy.get("input[aria-page-object='Tarifa']").clear();
  }

  setValueHorasLinea(value) {
    cy.get("input[aria-page-object='HorasLinea']").type(value);
  }

  getValueHorasLinea() {
    cy.get("input[aria-page-object='HorasLinea']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearHorasLinea() {
    cy.get("input[aria-page-object='HorasLinea']").clear();
  }

  setValueNcColaborador(value) {
    cy.get("input[aria-page-object='NcColaborador']").type(value);
  }

  getValueNcColaborador() {
    cy.get("input[aria-page-object='NcColaborador']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearNcColaborador() {
    cy.get("input[aria-page-object='NcColaborador']").clear();
  }

  setValueDescripcion(value) {
    cy.get("textarea[aria-page-object='Descripcion']").type(value);
  }

  getValueDescripcion() {
    cy.get("textarea[aria-page-object='Descripcion']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearDescripcion() {
    cy.get("textarea[aria-page-object='Descripcion']").clear();
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

  clickEditar() {
    cy.get("button[aria-page-object='Editar']").click();
  }

  clickCancelar() {
    cy.get("button[aria-page-object='Cancelar']").click();
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
export default editarCliente;
