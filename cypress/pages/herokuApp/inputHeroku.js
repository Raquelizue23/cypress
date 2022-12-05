class Input {
  goToInputSite() {
    cy.visit("https://the-internet.herokuapp.com/inputs");
  }

  setValueInput(value) {
    cy.get("input").type(value);
  }

  getValueInput() {
    cy.get("input")
      .invoke("val")
      .then((value) => {
        console.log(value);
        cy.log(value);
      });
  }

  clearInput() {
    cy.get("input").clear();
  }
}
export default Input;
