import Calculadora from "../../pages/cursoPruebasAutomatizadas/calculadora";
import ComputerDB from "../../pages/cursoPruebasAutomatizadas/computerDB";

describe("DemoLab", () => {
  const calculadora = new Calculadora();
  const computer = new ComputerDB();

  // it("Probar Computer DB", () => {
  //   computer.goToSite();
  //   computer.clickAdd();
  //   computer.setValueName("HP Max Pro");
  //   computer.setValueIntroduced("2024-06-19");
  //   computer.setValueDiscontinued("2030-06-19");
  //   computer.selectItemCompany(5);
  //   computer.clickBtnAgregar();
  //   computer.setValueSearchBox("Acorn System 2");
  //   computer.clickSearchsubmit();
  //   computer.verifycomputerExist("Acorn System 2");
  // });

  afterEach(() => {
    cy.log("Prueba al final del It");
  });

  beforeEach(() => {
    calculadora.goToSite();
    calculadora.selectItemSelectBuild(8);
    calculadora.setValueNumber1Field(6);
    calculadora.setValueNumber2Field(2);
  });

  it("Probar Suma Calculadora", () => {
    calculadora.selectItemSelectOperationDropdown(0);
    calculadora.clickCalculate();
    calculadora.verifyValue(8);
  });

  it("Probar Resta Calculadora", () => {
    calculadora.selectItemSelectOperationDropdown(1);
    calculadora.clickCalculate();
    calculadora.verifyValue(4);
  });

  it("Probar Multiplicar Calculadora", () => {
    calculadora.selectItemSelectOperationDropdown(2);
    calculadora.clickCalculate();
    calculadora.verifyValue(12);
  });

  it("Probar Dividir Calculadora", () => {
    calculadora.selectItemSelectOperationDropdown(3);
    calculadora.clickCalculate();
    calculadora.verifyValue(3);
  });

  it("Probar Concatenar Calculadora", () => {
    calculadora.selectItemSelectOperationDropdown(4);
    calculadora.clickCalculate();
    calculadora.verifyValue(62);
  });
});
