import TableMateriaUIElement from "../../../utilities/tableMaterialUIElement";
import "cypress-localstorage-commands";
class Region {
  tableMaterialUIElement = new TableMateriaUIElement();
  url = "http://localhost:3000/CrudRegion";
  goToSite() {
    cy.removeLocalStorage("persist:session");
    cy.setLocalStorage("persist:session", '{"isAuthenticated":"true"}');
    cy.visit(this.url);
  }

  verifySite() {
    cy.url().should("eq", this.url);
  }

  clickBtnNewRegion() {
    cy.get("button[name='BtnNewRegion']").click();
  }

  setValueTextToFilterWith(value) {
    if (value != "") cy.get("input[name='textToFilterWith']").type(value);
    else this.clearTextToFilterWith();
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

  tableMaterialUIElement = new TableMateriaUIElement();
  verifyLengthRowsTableContainerElement(rows) {
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
  getValueMui33924() {
    cy.get("p[id='mui-33924']").then((value) => {
      cy.log(value.text());
    });
  }
}
export default Region;
