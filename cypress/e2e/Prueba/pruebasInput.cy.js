import TestPageHeroku from "../../pages/herokuApp/TestPageHeroku";

describe("Pruebas sobre campos", () => {
    const testPageHeroku = new TestPageHeroku();
    const entry = ["correo@correo.com", "cadena", "cadena@|!#$%&/()=?Â¬~", 10];
    const lengthCharacter = [101, 49, 60];
    const lengthInt = 15;
    const lengFloat = 50;


    beforeEach(() => {
        testPageHeroku.goToSite();
    });

    it("Probar tipos de entradas para el campo Username", () => {
        entry.forEach((value) => {
            testPageHeroku.clearUsername();
            testPageHeroku.setValueUsername(value);
            testPageHeroku.getFieldUsername().should("have.value", value);
        });
    });
    it("Probar longitudes en cadenas para el campo Username", () => {
        lengthCharacter.forEach((value) => {
            var text = Cypress._.repeat("i", value);
            testPageHeroku.clearUsername();
            testPageHeroku.setValueUsername(text);
            testPageHeroku.getFieldUsername().should("have.value", text);
        });
    });
    it("Probar longitudes en numeros para el campo Username", () => {
        for (var i = 1; i <= lengthInt; i++) {
            var text = Cypress._.repeat("9", i);
            testPageHeroku.clearUsername();
            testPageHeroku.setValueUsername(text);
            testPageHeroku.getFieldUsername().should("have.value", text);
        };
    });
    it("Probar longitudes en decimales para el campo Username", () => {
        for (var i = 1; i <= lengFloat; i++) {
            var text = Cypress._.repeat("1", i) + "." + Cypress._.repeat("0", i);
            testPageHeroku.clearUsername();
            testPageHeroku.setValueUsername(text);
            testPageHeroku.getFieldUsername().should("have.value", text);
        };
    });


    it("Probar tipos de entradas para el campo Password", () => {
        entry.forEach((value) => {
            testPageHeroku.clearPassword();
            testPageHeroku.setValuePassword(value);
            testPageHeroku.getFieldPassword().should("have.value", value);
        });
    });
    it("Probar longitudes en cadenas para el campo Password", () => {
        lengthCharacter.forEach((value) => {
            var text = Cypress._.repeat("i", value);
            testPageHeroku.clearPassword();
            testPageHeroku.setValuePassword(text);
            testPageHeroku.getFieldPassword().should("have.value", text);
        });
    });
    it("Probar longitudes en numeros para el campo Password", () => {
        for (var i = 1; i <= lengthInt; i++) {
            var text = Cypress._.repeat("9", i);
            testPageHeroku.clearPassword();
            testPageHeroku.setValuePassword(text);
            testPageHeroku.getFieldPassword().should("have.value", text);
        };
    });
    it("Probar longitudes en decimales para el campo Password", () => {
        for (var i = 1; i <= lengFloat; i++) {
            var text = Cypress._.repeat("1", i) + "." + Cypress._.repeat("0", i);
            testPageHeroku.clearPassword();
            testPageHeroku.setValuePassword(text);
            testPageHeroku.getFieldPassword().should("have.value", text);
        };
    });

});