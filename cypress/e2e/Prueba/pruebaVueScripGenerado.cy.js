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

  it("Probar CRUD con script generado", () => {
    //Paso 0: Ir a la aplicación
    login.goToSite(); //Esto es lo que actualmente se está generando cy.visit('https://crud-firebase-cypress.web.app/spa/#/auth');

    //Paso1: Loggin
    login.setValueEmail("test@test.com");
    login.setValuePassword("123456");
    login.clickLoginSubmit();

    //Paso2: Crear cliente
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

    //Paso 3: Verificar que el cliente se agrego.
    clientes.setValueSearchClients("Fortuna");
    clientes.verifyLengthRowsTablaClientes(1);

    //Paso 4: Editar el cliente
    clientes.clickBtnEditASDF4321();
    editarCliente.clearNombreCliente();
    editarCliente.setValueNombreCliente("Adolfo Solir de Fortunato");
    editarCliente.clearFechaCliente();
    editarCliente.setValueFechaCliente("2022/12/02");
    editarCliente.clearHoraCliente();
    editarCliente.setValueHoraCliente("15:31");
    editarCliente.clearDescripcion();
    editarCliente.setValueDescripcion("Descripción de Adolfote");
    editarCliente.clearTarifa();
    editarCliente.setValueTarifa("9");
    editarCliente.clearHorasLinea();
    editarCliente.setValueHorasLinea("241");
    editarCliente.clearNcColaborador();
    editarCliente.setValueNcColaborador("121");
    editarCliente.clickEditar();

    //Paso 5: Velidar que el cliente se edito correctamente.
    clientes.clearSearchClients();
    clientes.setValueSearchClients("Fortunato");

    //Paso 6: Eliminar cliente
    clientes.clearSearchClients();
    clientes.setValueSearchClients("Fortunato");
    clientes.clickBtnDeleteASDF4321();
    borrarCliente.clickOkBorrar();

    //Paso 7: Validar que el cliente se elimino.
    clientes.clearSearchClients();
    clientes.setValueSearchClients("Fortunato");

    cy.wait(5000);
    clientes.clickCerrarSesionMenu();
  });
});
