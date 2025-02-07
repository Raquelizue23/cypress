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

    //Pasos generados con chatGPT.
    clientes.clickBtnEditASDF4321(); // Utiliza el selector correcto para el botón de editar
    editarCliente.clearNombreCliente(); // Limpiar el campo si es necesario
    editarCliente.setValueNombreCliente("Nuevo nombre del cliente");
    editarCliente.clearFechaCliente();
    editarCliente.setValueFechaCliente("2023/01/15");
    editarCliente.clearHoraCliente();
    editarCliente.setValueHoraCliente("14:45");
    editarCliente.clearFechaHora();
    editarCliente.setValueFechaHora("2023-01-15 14:45");
    editarCliente.clearDescripcion();
    editarCliente.setValueDescripcion("Nueva descripción del cliente");
    editarCliente.clearTarifa();
    editarCliente.setValueTarifa("10");
    editarCliente.clearHorasLinea();
    editarCliente.setValueHorasLinea("30");
    editarCliente.clearNcColaborador();
    editarCliente.setValueNcColaborador("15");
    // editarCliente.clickGuardar(); //Este no lo saco bien del Page Object
    editarCliente.clickEditar(); //Lo agregué para que funcionará el ejemplo

    clientes.clickBtnDeleteASDF4321(); // Utiliza el selector correcto para el botón de eliminar
    borrarCliente.clickOkBorrar(); // Confirmar la eliminación

    cy.wait(5000);
    clientes.clickCerrarSesionMenu();
  });
});
