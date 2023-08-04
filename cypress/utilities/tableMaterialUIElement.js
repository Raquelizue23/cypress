import { log } from "console";

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

  verifyLengthRowsTable(idTable, rows) {
    this.getRecordCount(idTable).then((value) => {
      const recordCount = value.text();
      const posicionDe = recordCount.indexOf("e");
      const numberRows = parseInt(
        recordCount.substring(posicionDe + 1, recordCount.length)
      );
      assert.equal(numberRows, rows, "Elementos encontrados en la tabla");
    });
  }

  verifyColumnName(name) {
    let found = false;
    cy.get("tr.MuiTableRow-root.MuiTableRow-head")
      .children()
      .each(($child) => {
        if ($child.text() === name) found = true;
      })
      .then(() => {
        assert.isOk(
          found,
          `Se encontró "${name}" como nombre de columna en la tabla`
        );
      });
  }

  clickColumnName(name) {
    cy.contains("th", name).click();
    cy.wait(2000);
  }

  checkOrderColumn(name, orderType) {
    let ascending = true;
    let descending = true;
    // var originalColumnValues = [];
    cy.wrap(this.createArrayValues(name)).then((array) => {
      // originalColumnValues = array;
      for (let i = 1; i < array.length; i++) {
        if (array[i].toLowerCase() < array[i - 1].toLowerCase())
          ascending = false;

        if (array[i].toLowerCase() > array[i - 1].toLowerCase())
          descending = false;
      }

      if (orderType == "Asc")
        assert.isOk(ascending, `El ordenamiento es Ascendente`);

      if (orderType == "Des")
        assert.isOk(descending, `El ordenamiento es Descendente`);
    });
  }

  createArrayValues(columnName) {
    var columnValues = [];
    cy.contains("th", columnName).then(($thElement) => {
      var columnIndex = $thElement[0].cellIndex;
      cy.get("tbody tr").each(($row) => {
        var cellValue = $row.find(`td:eq(${columnIndex})`).text().trim();
        columnValues.push(cellValue.toString());
      });
    });
    return columnValues;
  }
}
export default TableMaterialUIElement;
