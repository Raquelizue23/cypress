import TestPageHeroku from "../../pages/herokuApp/TestPageHeroku";

describe("Prueba Heroku App", () => {
  const testPageHeroku = new TestPageHeroku(); //Sirve para los radios

  it("Probar input", () => {
    testPageHeroku.goToSite();
    testPageHeroku.setValueUsername("Hola");
    testPageHeroku.getValueUsername();
    testPageHeroku.clearUsername();
    testPageHeroku.setValuePassword("secret");
    testPageHeroku.getValuePassword();
    testPageHeroku.clearPassword();
    testPageHeroku.clearComments();
    testPageHeroku.setValueComments("Hola soy un nuevo comentario");
    testPageHeroku.uploadFilename("ejemploParaSubir.txt");
    testPageHeroku.clickSubmitbutton();
  });
});
