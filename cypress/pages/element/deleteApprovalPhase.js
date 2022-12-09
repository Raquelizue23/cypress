class DeleteApprovalPhase {
  url = "http://localhost:3000/CrudApprovalPhase";
  goToSite() {
    cy.visit(this.url);
  }

  verifySite() {
    cy.url().should("eq", this.url);
  }

  setValueTextToFilterWith(value) {
    cy.get("input[name='textToFilterWith']").type(value);
  }

  getValueTextToFilterWith() {
    cy.get("input[name='textToFilterWith']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearTextToFilterWith() {
    cy.get("input[name='textToFilterWith']").clear();
  }

  clickBtnNewApprovalPhase() {
    cy.get("button[aria-page-object='BtnNewApprovalPhase']").click();
  }

  clickBtnClose() {
    cy.get("button[name='BtnClose']").click();
  }

  clickBtnSubmit() {
    cy.get("button[name='BtnSubmit']").click();
  }

  getValueMui12558() {
    cy.get("p[id='mui-12558']").then((value) => {
      cy.log(value.text());
    });
  }
}
export default DeleteApprovalPhase;
