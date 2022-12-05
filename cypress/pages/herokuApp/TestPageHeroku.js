class TestPageHeroku {
  goToSite() {
    cy.visit(
      "https://testpages.herokuapp.com/styled/basic-html-form-test.html"
    );
  }
  setValueUsername(value) {
    cy.get("input[name='username']").type(value);
  }
  clickSubmitbutton() {
    cy.get('[type="submit"]').click();
  }
  clickBackToForm() {
    cy.get("a[id='back_to_form']").click();
  }

  getValueComments() {
    cy.get("p[name='_comments']").then((value) => {
      cy.log(value.text());
    });
  }

  getValueHiddenfield() {
    cy.get("[name='_hiddenField']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  getValueCheckboxes() {
    cy.get("[name='_checkboxes']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  getValueRadioval() {
    cy.get("[name='_radioval']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  getValueMultipleselect() {
    cy.get("[name='_multipleselect']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  getValueDropdown() {
    cy.get("[name='_dropdown']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  getValueSubmitbutton() {
    cy.get("[name='_submitbutton']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }
}
export default TestPageHeroku;
