class Calculadora {
  url = "https://testsheepnz.github.io/BasicCalculator.html";
  goToSite() {
    cy.visit(this.url);
  }

  verifySite() {
    cy.url().should("eq", this.url);
  }

  getLengthSelectBuild() {
    cy.get("select[id='selectBuild']")
      .children()
      .then((childs) => {
        cy.log(childs);
        cy.log(
          "SelectBuild tiene un total de " + childs.length + " elemento(s)"
        );
      });
  }

  selectItemSelectBuild(item) {
    cy.get("select[id='selectBuild']").select(item);
  }

  getValueErrorMsgField() {
    cy.get("label[id='errorMsgField']").then((value) => {
      cy.log(value.text());
    });
  }

  verifyValueErrorMsgField(value) {
    cy.get("label[id='errorMsgField']").contains(value);
  }
  setValueNumber1Field(value) {
    if (value != "") cy.get("input[id='number1Field']").type(value);
    else this.clearNumber1Field();
  }

  getValueNumber1Field() {
    cy.get("input[id='number1Field']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearNumber1Field() {
    cy.get("input[id='number1Field']").clear();
  }

  setValueNumber2Field(value) {
    if (value != "") cy.get("input[id='number2Field']").type(value);
    else this.clearNumber2Field();
  }

  getValueNumber2Field() {
    cy.get("input[id='number2Field']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearNumber2Field() {
    cy.get("input[id='number2Field']").clear();
  }

  getLengthSelectOperationDropdown() {
    cy.get("select[id='selectOperationDropdown']")
      .children()
      .then((childs) => {
        cy.log(childs);
        cy.log(
          "SelectOperationDropdown tiene un total de " +
            childs.length +
            " elemento(s)"
        );
      });
  }

  selectItemSelectOperationDropdown(item) {
    cy.get("select[id='selectOperationDropdown']").select(item);
  }

  setValueNumberAnswerField(value) {
    if (value != "") cy.get("input[id='numberAnswerField']").type(value);
    else this.clearNumberAnswerField();
  }

  getValueNumberAnswerField() {
    cy.get("input[id='numberAnswerField']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearNumberAnswerField() {
    cy.get("input[id='numberAnswerField']").clear();
  }

  getValueIntSelectionLabel() {
    cy.get("label[id='intSelectionLabel']").then((value) => {
      cy.log(value.text());
    });
  }

  verifyValue(value) {
    cy.get("input[id='numberAnswerField']").should("value", value);
  }
  checkIntegerSelect() {
    cy.get("input[id='integerSelect']").check();
  }

  uncheckIntegerSelect() {
    cy.get("input[id='integerSelect']").uncheck();
  }

  clickCalculate() {
    cy.get("input[id='calculateButton']").click();
  }
}
export default Calculadora;
