import loginVue from "../../pages/vue/loginVue";
import inicioVue from "../../pages/vue/inicioVue";
import clientesVue from "../../pages/vue/clientesVue";
import agregarClienteVue from "../../pages/vue/agregarCliente";
import editarClienteVue from "../../pages/vue/editarCliente";
import borrarClienteVue from "../../pages/vue/borrarCliente";

describe("Prueba de Vue", () => {
  const login = new loginVue();
  const inicio = new inicioVue();
  const clientes = new clientesVue();
  const agregarCliente = new agregarClienteVue();
  const editarCliente = new editarClienteVue();
  const borrarCliente = new borrarClienteVue();

  beforeEach(() => {
    login.goToSite();
    login.verifySite();
    login.setValueEmail("test@test.com");
    login.setValuePassword("123456");
    login.clickLoginSubmit();
  });

  it("Probar CRUD", () => {
    inicio.clickBotonMenu();
    inicio.clickLinkClients();
    clientes.clickAgregarCliente();
    agregarCliente.setValueUUIDCliente("ASDF4321");
    agregarCliente.setValueNombreCliente("Adolfo Solir de Fortuna");
    agregarCliente.setValueFechaCliente("2022/12/01");
    agregarCliente.setValueHoraCliente("15:30");
    agregarCliente.setValueFechaHora("2022-12-01 12:30");
    agregarCliente.setValueDescripcion("Descripción de Adolfo");
    agregarCliente.setValueTarifa("8");
    agregarCliente.setValueHorasLinea("24");
    agregarCliente.setValueNcColaborador("12");
    agregarCliente.clickGuardar();

    clientes.verifyLengthRowsTablaClientes(1);
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

  afterEach(() => {
    cy.wait(5000);
    clientes.clickCerrarSesionMenu();
  });
});
