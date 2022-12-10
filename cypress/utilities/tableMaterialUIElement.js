class TableMaterialUIElement {
  clickMenuRow(row) {
    cy.contains("td", row).prev().click();
  }

  clickMenuEditRow() {
    cy.get(
      '[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .MuiList-root > :nth-child(2) > .MuiButtonBase-root'
    ).click();
  }

  clickMenuDeleteRow() {
    cy.get(
      '[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .MuiList-root > [tabindex="0"] > .MuiButtonBase-root'
    ).click();
  }

  clickNextPage() {
    cy.get(
      '[name="TablePaginationRight"] > .MuiToolbar-root > .makeStyles-flex-1 > :nth-child(1) > .MuiIconButton-label > .MuiSvgIcon-root > path'
    ).click({ force: true });
  }

  clickNextAllPages() {
    cy.get(
      '[name="TablePaginationRight"] > .MuiToolbar-root > .makeStyles-flex-1 > :nth-child(2) > .MuiIconButton-label > .MuiSvgIcon-root > path'
    ).click({ force: true });
  }

  clickPrevPage() {
    cy.get(
      ":nth-child(1) > .MuiToolbar-root > .makeStyles-flex-1 > :nth-child(2) > .MuiIconButton-label > .MuiSvgIcon-root"
    ).click({ force: true });
  }

  clickPrevAllPages() {
    cy.get(
      ":nth-child(1) > .MuiToolbar-root > .makeStyles-flex-1 > :nth-child(1) > .MuiIconButton-label > .MuiSvgIcon-root"
    ).click({ force: true });
  }
  clickSelectRowsPerPage() {
    cy.get("path[d='M7 10l5 5 5-5z']").click({ force: true });
  }
  selectRowsPerPage(number) {}
}
export default TableMaterialUIElement;
