import "cypress-localstorage-commands";
import TableMateriaUIElement from "../../../utilities/tableMaterialUIElement";
class ApprovalPhase {
  url = "http://localhost:3000/CrudApprovalPhase";
  tableMaterialUIElement = new TableMateriaUIElement();

  goToSite() {
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
    cy.get("button[name='BtnNewApprovalPhase']").click();
  }

  verifyLengthRowsTableApprovalPhase(rows) {
    this.tableMaterialUIElement.verifyLengthRowsTable(
      "TableContainerElement",
      rows
    );
  }

  clickNextPage() {
    this.tableMaterialUIElement
      .getNextPage("TableContainerElement")
      .click({ force: true });
  }

  clickNextAllPage() {
    this.tableMaterialUIElement
      .getNextAllPages("TableContainerElement")
      .click({ force: true });
  }

  clickPrevPage() {
    this.tableMaterialUIElement
      .getPrevPage("TableContainerElement")
      .click({ force: true });
  }

  clickPrevAllPage() {
    this.tableMaterialUIElement
      .getPrevAllPages("TableContainerElement")
      .click({ force: true });
  }
}
export default ApprovalPhase;
