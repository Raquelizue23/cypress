import "cypress-localstorage-commands";
import TableMateriaUIElement from "../../utilities/tableMaterialUIElement";
class ApprovalPhase {
  url = "http://localhost:3000/CrudApprovalPhase";
  tableMaterialUIElement = new TableMateriaUIElement();

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

  verifyLengthRowsTableApprovalPhase(rows) {
    this.tableMaterialUIElement.verifyLengthRowsTable(
      "TableApprovalPhase",
      rows
    );
  }

  clickNextPage() {
    this.tableMaterialUIElement
      .getNextPage("TableApprovalPhase")
      .click({ force: true });
  }

  clickNextAllPage() {
    this.tableMaterialUIElement
      .getNextAllPages("TableApprovalPhase")
      .click({ force: true });
  }

  clickPrevPage() {
    this.tableMaterialUIElement
      .getPrevPage("TableApprovalPhase")
      .click({ force: true });
  }

  clickPrevAllPage() {
    this.tableMaterialUIElement
      .getPrevAllPages("TableApprovalPhase")
      .click({ force: true });
  }
  getValueMui14253() {
    cy.get("p[id='mui-14253']").then((value) => {
      cy.log(value.text());
    });
  }
}
export default ApprovalPhase;
