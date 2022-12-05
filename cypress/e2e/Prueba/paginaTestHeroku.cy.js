import TestPageHeroku from "../../pages/herokuApp/TestPageHeroku";

describe("Prueba Heroku App", () => {
  const testPageHeroku = new TestPageHeroku(); //Sirve para los radios

  it("Probar input", () => {
    testPageHeroku.goToSite();
    testPageHeroku.clickSubmitbutton();
    testPageHeroku.getValueComments();
    // testPageHeroku.setValueUsername("Hola");
    // testPageHeroku.getValueUsername();
    // testPageHeroku.clearUsername();
    // testPageHeroku.setValuePassword("secret");
    // testPageHeroku.getValuePassword();
    // testPageHeroku.clearPassword();
    // testPageHeroku.clearComments();
    // testPageHeroku.setValueComments("Hola soy un nuevo comentario");

    // testPageHeroku.checkCheckboxes0();
    // testPageHeroku.unheckCheckboxes2();
    // testPageHeroku.checkRadioval2();
    // testPageHeroku.getLengthMultipleselect();
    // testPageHeroku.getItemMultipleselect("Selection Item 1");
    // testPageHeroku.getLengthDropdown();
    // testPageHeroku.selectItemDropdown(5);
    // testPageHeroku.uploadFilename("ejemploParaSubir.txt");
    // cy.pause();
    // testPageHeroku.clickSubmitbutton();
  });
});
