import TestPageHeroku from "../../pages/herokuApp/TestPageHeroku";

// describe("Prueba Heroku App", () => {
//   const testPageHeroku = new TestPageHeroku();

//   it("Probar formulario", () => {
//     testPageHeroku.goToSite();
//     testPageHeroku.verifySite();
//     testPageHeroku.setValueUsername("Hola");
//     testPageHeroku.getValueUsername();
//     testPageHeroku.setValuePassword("secret");
//     testPageHeroku.clearComments();
//     testPageHeroku.setValueComments("Hola soy un nuevo comentario");
//     testPageHeroku.uploadFilename("ejemploParaSubir.txt");
//     testPageHeroku.clickSubmitbutton();
//   });
// });

//Este fue hecho con ChatGPT
describe("Prueba de formulario en TestPages Heroku", () => {
  const testPage = new TestPageHeroku();

  it("Llenar formulario y cargar archivo", () => {
    testPage.goToSite();
    testPage.verifySite();

    // Llenar campos
    testPage.setValueUsername("Usuario123");
    testPage.setValuePassword("Contraseña456");
    testPage.setValueComments("Este es un comentario de prueba");

    // Cargar archivo
    const filePath = "ejemploParaSubir.txt";
    testPage.uploadFilename(filePath);

    // Seleccionar elementos en dropdown y multipleselect
    // testPage.selectItemDropdown("Opción 1");
    // testPage.selectItemMultipleselect("Item 2");

    // Hacer clic en el botón de envío
    testPage.clickSubmitbutton();
  });
});
