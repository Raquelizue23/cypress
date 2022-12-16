import "cypress-localstorage-commands";
import TableMateriaUIElement from "../../utilities/tableMaterialUIElement";
class ApprovalPhase {
  url = "http://localhost:3000/CrudApprovalPhase";
  tableMaterialUIElement = new TableMateriaUIElement();

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

  clickBtnNewApprovalPhase() {
    cy.get("button[aria-page-object='BtnNewApprovalPhase']").click();
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

  verifyLengthRowsTableApprovalPhase(rows) {
    this.tableMaterialUIElement
      .getRecordCount("TableApprovalPhase")
      .then((value) => {
        const recordCount = value.text();
        const posicionDe = recordCount.indexOf("e");
        const numberRows = parseInt(
          recordCount.substring(posicionDe + 1, recordCount.length)
        );
        assert.equal(
          numberRows,
          rows,
          "Elementos encontrados en la tabla TableApprovalPhase"
        );
      });

    //llmar al metodo que encuentra el regoistro getRecordCount
    //lo que te devuleva el metodo es lo que comparas contra el rows que llega arrgiba
    //generas uno de estos por cada table y sacas el id del
    // cy.get("table[class='MuiTable-root'] tbody")
    //   .children()
    //   .then((childs) => {
    //     assert.equal(
    //       childs.length,
    //       rows,
    //       "Elementos encontrados en la tabla TableApprovalPhase"
    //     );
    //   });
  }

  changeRowsPerPage() {
    this.tableMaterialUIElement
      .getSelectRowsPerPage("TableApprovalPhase")
      .click({ force: true });
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
}
export default ApprovalPhase;
