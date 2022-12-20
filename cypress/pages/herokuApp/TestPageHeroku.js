class TestPageHeroku {
  url = "https://testpages.herokuapp.com/styled/basic-html-form-test.html";
  goToSite() {
    cy.visit(this.url);
  }

  verifySite() {
    cy.url().should("eq", this.url);
  }

  setValueUsername(value) {
    cy.get("input[name='username']").type(value);
  }

  getValueUsername() {
    cy.get("input[name='username']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearUsername() {
    cy.get("input[name='username']").clear();
  }

  setValuePassword(value) {
    cy.get("input[name='password']").type(value);
  }

  getValuePassword() {
    cy.get("input[name='password']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearPassword() {
    cy.get("input[name='password']").clear();
  }

  uploadFilename(file) {
    cy.get("input[name='filename']").selectFile(file, { force: true });
  }

  checkCheckboxes() {
    cy.get("input[name='checkboxes[]']").check();
  }

  uncheckCheckboxes() {
    cy.get("input[name='checkboxes[]']").uncheck();
  }

  checkCheckboxes() {
    cy.get("input[name='checkboxes[]']").check();
  }

  uncheckCheckboxes() {
    cy.get("input[name='checkboxes[]']").uncheck();
  }

  checkCheckboxes() {
    cy.get("input[name='checkboxes[]']").check();
  }

  uncheckCheckboxes() {
    cy.get("input[name='checkboxes[]']").uncheck();
  }

  checkRadioval() {
    cy.get("input[name='radioval']").check();
  }

  uncheckRadioval() {
    cy.get("input[name='radioval']").uncheck();
  }

  checkRadioval() {
    cy.get("input[name='radioval']").check();
  }

  uncheckRadioval() {
    cy.get("input[name='radioval']").uncheck();
  }

  checkRadioval() {
    cy.get("input[name='radioval']").check();
  }

  uncheckRadioval() {
    cy.get("input[name='radioval']").uncheck();
  }

  clickSubmitbutton() {
    cy.get('[type="submit"]').click();
  }

  setValueReportmissingparams(value) {
    cy.get("input[name='reportmissingparams']").type(value);
  }

  getValueReportmissingparams() {
    cy.get("input[name='reportmissingparams']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearReportmissingparams() {
    cy.get("input[name='reportmissingparams']").clear();
  }

  setValueFormReturn(value) {
    cy.get("input[name='form_return']").type(value);
  }

  getValueFormReturn() {
    cy.get("input[name='form_return']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearFormReturn() {
    cy.get("input[name='form_return']").clear();
  }

  setValueComments(value) {
    cy.get("textarea[name='comments']").type(value);
  }

  getValueComments() {
    cy.get("textarea[name='comments']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearComments() {
    cy.get("textarea[name='comments']").clear();
  }

  getLengthMultipleselect() {
    cy.get("select[name='multipleselect[]']")
      .children()
      .then((childs) => {
        cy.log(childs);
        cy.log(
          "Multipleselect tiene un total de " + childs.length + " elemento(s)"
        );
      });
  }

  selectItemMultipleselect(item) {
    cy.get("select[name='multipleselect[]']").select(item);
  }

  getLengthDropdown() {
    cy.get("select[name='dropdown']")
      .children()
      .then((childs) => {
        cy.log(childs);
        cy.log("Dropdown tiene un total de " + childs.length + " elemento(s)");
      });
  }

  selectItemDropdown(item) {
    cy.get("select[name='dropdown']").select(item);
  }
}
export default TestPageHeroku;
