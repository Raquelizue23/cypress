import loginVue from "../../pages/vue/loginVue";
import inicioVue from "../../pages/vue/inicioVue";
import clientesVue from "../../pages/vue/clientesVue";
import agregarClienteVue from "../../pages/vue/agregarCliente";
import editarClienteVue from "../../pages/vue/editarCliente";
import borrarClienteVue from "../../pages/vue/borrarCliente";
import JiraMethods from "../../utilities/jiraMethods";
import axios from "axios";

describe("Crear un bug en Jira desde Cypress", () => {
  const login = new loginVue();
  const inicio = new inicioVue();
  const clientes = new clientesVue();
  const agregarCliente = new agregarClienteVue();
  const editarCliente = new editarClienteVue();
  const borrarCliente = new borrarClienteVue();
  const jiraMethods = new JiraMethods();
  it("Envía una petición POST al API de Jira y verifica la respuesta", () => {
    login.goToSite(); //Esto es lo que actualmente se está generando cy.visit('https://crud-firebase-cypress.web.app/spa/#/auth');
    login.setValueEmail("test@test.com");
    login.setValuePassword("123456");
    login.clickLoginSubmit();
    inicio.clickBotonMenu();
    inicio.clickLinkClients();
    clientes.setValueSearchClients("Fortuna");
    // jiraMethods.createBug("Hola"); --Este si funciona
    // clientes.verifyLengthRowsTablaClientes(1);

    // Cypress.on("fail", (error, runnable) => {
    //   // Imprimir mensaje en consola
    //   console.log("La prueba falló:", error.message);
    //   console.log("Otro console");
    //   const bugData = {
    //     fields: {
    //       project: { key: "ET3" },
    //       summary: `Error en el test "${runnable.parent.title}"`,
    //       description: error.message,
    //       issuetype: { name: "Bug" },
    //     },
    //   };

    //   // Configurar los headers para la petición a la API de Jira
    //   const config = {
    //     headers: {
    //       Authorization:
    //         "Basic cmFxdWVsaXp1ZUBvdXRsb29rLmVzOlRjQURJejJCSndmVncxZmpwclp5OUVDNQ==",
    //       "Content-Type": "application/json",
    //     },
    //   };

    //   // Hacer la petición HTTP POST a la API de Jira para crear el nuevo bug
    //   axios
    //     .post(
    //       "https://raquelizue.atlassian.net/rest/api/2/issue",
    //       bugData,
    //       config
    //     )
    //     .then((response) => {
    //       console.log(`Se creó un nuevo bug con el ID: ${response.data.key}`);
    //     })
    //     .catch((error) => {
    //       console.log("Error al crear el bug en Jira:", error);
    //     });
    // });
  });
});
