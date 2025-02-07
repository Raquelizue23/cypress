import loginVue from "../../pages/vue/loginVue";
import inicioVue from "../../pages/vue/inicioVue";
import clientesVue from "../../pages/vue/clientesVue";
import agregarClienteVue from "../../pages/vue/agregarCliente";
import editarClienteVue from "../../pages/vue/editarCliente";
import borrarClienteVue from "../../pages/vue/borrarCliente";

Cypress.Commands.add("allureScreenshot", () => {
  const fileName = new Date().toISOString().replace(/:/g, "") + ".png";
  cy.screenshot(fileName);
  cy.allure("addAttachment", fileName, "image/png");
});

describe("Prueba de Vue", () => {
  const login = new loginVue();
  const inicio = new inicioVue();
  const clientes = new clientesVue();
  const agregarCliente = new agregarClienteVue();
  const editarCliente = new editarClienteVue();
  const borrarCliente = new borrarClienteVue();

  beforeEach(() => {
    login.goToSite();
    // cy.allureScreenshot();
    login.verifySite();
    // cy.allureScreenshot();
    login.setValueEmail("test@test.com");
    //Con esta instrucción se ve el runner con la pantalla
    // cy.screenshot({
    //   capture: "runner",
    // });
    login.setValuePassword("123456");
    //Con esta instrucción no se ve el runner
    cy.screenshot();
    login.clickLoginSubmit();
  });

  it("Probar CRUD", () => {
    cy.wait(3000);
    inicio.verifyValueWelcome("Bienvenido");
    inicio.clickBotonMenu();
    inicio.clickLinkClients();
    clientes.clickAgregarCliente();
    agregarCliente.setValueUUIDCliente("ASDF4321");
    agregarCliente.setValueNombreCliente("Adelino Sánchez Fortín");
    agregarCliente.setValueFechaCliente("2022/12/01");
    agregarCliente.setValueHoraCliente("15:30");
    agregarCliente.setValueFechaHora("2022-12-01 12:30");
    agregarCliente.setValueDescripcion("Descripción de Adelino");
    agregarCliente.setValueTarifa("8");
    agregarCliente.setValueHorasLinea("24");
    agregarCliente.setValueNcColaborador("12");
    agregarCliente.clickGuardar();

    clientes.setValueSearchClients("ASDF4321");
    clientes.verifyLengthRowsTablaClientes(1);
    clientes.clearSearchClients();
    clientes.clickBtnEditASDF4321();
    editarCliente.clearDescripcion();
    editarCliente.setValueDescripcion("tercera descripción de Adolfo");
    editarCliente.clearHoraCliente();
    editarCliente.setValueHoraCliente("16:50");
    editarCliente.clearTarifa();
    editarCliente.setValueTarifa(9);
    editarCliente.clickEditar();

    clientes.clickBtnDeleteASDF4321();
    borrarCliente.clickOkBorrar();
  });

  it("Probar CatSociedades", () => {
    cy.wait(3000);
    inicio.verifyValueWelcome("Bienvenido");
    inicio.clickBotonMenu();
    inicio.clickLinkCatSociedades();
  });

  afterEach(() => {
    cy.wait(6000);
    clientes.clickCerrarSesionMenu();
  });
});
