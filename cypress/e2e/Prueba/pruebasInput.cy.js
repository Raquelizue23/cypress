import loginVue from "../../pages/vue/loginVue";
import TestPageHeroku from "../../pages/herokuApp/TestPageHeroku";

describe("Prueba de Vue", () => {
  const maxCaracteres = 101;
  const minCaracteres = 49;
  const between = 60;

  const entry = ["correo@correo.com", "cadena", "cadena@|!#$%&/()=?¬~", 10];
  const length = [maxCaracteres, minCaracteres];

  const login = new loginVue();
  const testPageHeroku = new TestPageHeroku();

  beforeEach(() => {
    testPageHeroku.goToSite();
  });

  it("Probar tipos de entradas", () => {
    entry.forEach((value) => {
      testPageHeroku.clearUsername();
      testPageHeroku.setValueUsername(value);
      testPageHeroku.getFieldUsername().should("have.value", value);
    });
  });
  it("Probar longitudes", () => {
    length.forEach((value) => {
      var text = Cypress._.repeat("i", value);
      testPageHeroku.clearUsername();
      testPageHeroku.setValueUsername(text);
      testPageHeroku.getFieldUsername().should("have.value", text);
    });
  });
});
