import TestPageHeroku from "../../pages/herokuApp/TestPageHeroku";

describe("Prueba Heroku App", () => {
  const testPageHeroku = new TestPageHeroku();

  it("Probar formulario", () => {
    testPageHeroku.goToSite();
    testPageHeroku.verifySite();
    testPageHeroku.setValueUsername("Hola");
    testPageHeroku.getValueUsername();
    testPageHeroku.setValuePassword("secret");
    testPageHeroku.clearComments();
    testPageHeroku.setValueComments("Hola soy un nuevo comentario");
    testPageHeroku.uploadFilename("ejemploParaSubir.txt");
    testPageHeroku.clickSubmitbutton();
  });
});
