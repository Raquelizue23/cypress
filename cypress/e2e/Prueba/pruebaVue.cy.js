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
  // beforeEach(() => {
  //   login.goToSite();
  // });

  it("Probar Login", () => {
    login.goToSite();
    login.setValueEmail("test@test.com");
    login.setValuePassword("123456");
    login.verifySite();
    login.clickLoginSubmit();
  });

  it("Probar link de navegación a clientes desde la pagina de Inicio", () => {
    inicio.clickBotonMenu();
    inicio.clickLinkClients();
  });

  // it("Probar pantalla de clientes", () => {
  //   // clientes.setValueSearchClients("Adolf");
  //   // clientes.clickAgregarCliente();
  //   //clientes.clickBtnEditASDF4321();
  //   clientes.clickBtnDeleteASDF4321();
  // });

  // it("Probar borrar cliente", () => {
  //   //borrarCliente.clickCancelBorrar();
  //   borrarCliente.clickOkBorrar();
  // });

  // it("Probar editar cliente", () => {
  //   editarCliente.clearDescripcion();
  //   editarCliente.setValueDescripcion("tercera descripción de Adolfo");
  //   editarCliente.clearHoraCliente();
  //   editarCliente.setValueHoraCliente("16:50");
  //   editarCliente.clearTarifa();
  //   editarCliente.setValueTarifa(9);
  //   // editarCliente.clickCancelar();
  //   editarCliente.clickEditar();
  // });

  // it("Probar agregar cliente", () => {
  //   agregarCliente.setValueUUIDCliente("ASDF4321");
  //   agregarCliente.setValueNombreCliente("Adolfo Solir de Fortuna");
  //   agregarCliente.setValueFechaCliente("2022/12/01");
  //   agregarCliente.setValueHoraCliente("15:30");
  //   agregarCliente.setValueFechaHora("2022-12-01 12:30");
  //   agregarCliente.setValueDescripcion("Descripción de Adolfo");
  //   agregarCliente.setValueTarifa("8");
  //   agregarCliente.setValueHorasLinea("24");
  //   agregarCliente.setValueNcColaborador("12");
  //   agregarCliente.clickGuardar();
  // });
});
