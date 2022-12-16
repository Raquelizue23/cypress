class TableMaterialUIElement {
  clickMenuRow(row) {
    cy.contains("td", row).prev().click();
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

  getNextPage(idTable) {
    return cy.xpath(
      '//*[@id="' +
        idTable +
        '"]/following-sibling::div/div[1]/div[3]/div/div[2]/button[1]/span[2]'
    );
  }

  getNextAllPages(idTable) {
    return cy.xpath(
      '//*[@id="' +
        idTable +
        '"]/following-sibling::div/div[1]/div[3]/div/div[2]/button[2]/span[2]'
    );
  }

  getPrevPage(idTable) {
    return cy.xpath(
      '//*[@id="' +
        idTable +
        '"]/following-sibling::div/div[1]/div[1]/div/div[2]/button[2]'
    );
  }

  getPrevAllPages(idTable) {
    return cy.xpath(
      '//*[@id="' +
        idTable +
        '"]/following-sibling::div/div[1]/div[1]/div/div[2]/button[1]'
    );
  }

  getSelectRowsPerPage(idTable) {
    return cy.xpath(
      '//*[@id="' +
        idTable +
        '"]/following-sibling::div/div[2]/div/div/div/div[2]/input'
    );

    //*[@id="TableApprovalPhase"]/following-sibling::div/div[2]/div/div/div/div[2]/input
  }

  getRecordCount(idTable) {
    //*[@id="root"]/div[3]/div[1]/div/div[3]/div/div/div[3]/div[1]/div[2]/div/p
    return cy.xpath(
      '//*[@id="' + idTable + '"]/following-sibling::div/div[1]/div[2]/div/p'
    );
  }
}
export default TableMaterialUIElement;
