import "cypress-localstorage-commands";
class ApprovalPhase {
  url = "http://localhost:3000/CrudApprovalPhase";

  getElementInTable(content) {
    return cy.contains("td", content);
  }

  goToSite() {
    // cy.visit(this.url);
    cy.removeLocalStorage("persist:session");
    cy.setLocalStorage("persist:session", '{"isAuthenticated":"true"}');
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

  getValueMui25192() {
    cy.get("p[id='mui-25192']").then((value) => {
      cy.log(value.text());
    });
  }

  verifyLengthRowsTableApprovalPhase(rows) {
    cy.get("table[class='MuiTable-root'] tbody")
      .children()
      .then((childs) => {
        assert.equal(
          childs.length,
          rows,
          "Elementos encontrados en la tabla TableApprovalPhase"
        );
      });
  }
}
export default ApprovalPhase;
