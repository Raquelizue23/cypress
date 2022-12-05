class CheckBoxes {
  //URL del sitio
  goToCheckBoxesSite() {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
  }

  //CheckBox 1
  getCheckbox1() {
    cy.get("#checkboxes > :nth-child(1)");
  }

  checkCheckBox1() {
    cy.get("#checkboxes > :nth-child(1)").check();
  }

  uncheckCheckBox1() {
    cy.get("#checkboxes > :nth-child(1)").uncheck();
  }

  isCheckCheckBox1() {
    cy.get("#checkboxes > :nth-child(1)")
      .invoke("attr", "checked")
      .then((value) => {
        if (value == "checked") cy.log("true");
        else cy.log("false");
      });
  }

  //CheckBox2
  getCheckbox2() {
    cy.get("#checkboxes > :nth-child(3)");
  }

  checkCheckBox2() {
    cy.get("#checkboxes > :nth-child(3)").check();
  }

  uncheckCheckBox2() {
    cy.get("#checkboxes > :nth-child(3)").uncheck();
  }
}
export default CheckBoxes;
