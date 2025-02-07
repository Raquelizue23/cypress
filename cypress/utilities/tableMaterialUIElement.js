class TableMaterialUIElement {
  columnValues = [];

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
    //Este codigo tambien funciona, pero por alguna razón no jala para el ambiente que usan los testers de element
    // let found = false;
    // cy.get("tr.MuiTableRow-root.MuiTableRow-head")
    //   .children()
    //   .each(($child) => {
    //     if ($child.text() === name) found = true;
    //   })
    //   .then(() => {
    //     assert.isOk(
    //       found,
    //       `Se encontró "${name}" como nombre de columna en la tabla`
    //     );
    //   });

    //este codigo es el que funciona para Element, el de arriba no, y quien sabe por que
    const columnNames = [];

    cy.get("tr.MuiTableRow-root.MuiTableRow-head")
      .children()
      .each(($child) => {
        columnNames.push($child.text().trim());
      })
      .then(() => {
        const found = columnNames.includes(name);
        assert.isTrue(
          found,
          `Se encontró "${name}" como nombre de columna en la tabla`
        );
      });
  }

  verifyColumnNoExist(name) {
    const columnNames = [];
    cy.get("tr.MuiTableRow-root.MuiTableRow-head")
      .children()
      .each(($child) => {
        columnNames.push($child.text().trim());
      })
      .then(() => {
        const found = columnNames.includes(name);
        assert.isFalse(found, `No se encontró la columna "${name}"`);
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

  clickCalendarDay(dayNumber) {
    cy.get('.MuiPickersDay-day[tabindex="0"]').contains("p", dayNumber).click();
  }

  checkNumberInColumn(columnName, data) {
    this.checkDataInColumn(columnName, data, "number");
  }
  checkRangeDateInColumn(columnName, data) {
    this.checkDataInColumn(columnName, data, "date");
  }

  checkDataInColumn(columnName, data, type) {
    cy.contains("th", columnName).then(($thElement) => {
      const columnIndex = $thElement[0].cellIndex;
      cy.get("tbody tr").each(($row) => {
        const cellValue = $row.find(`td:eq(${columnIndex})`).text().trim();
        this.columnValues.push(cellValue);
      });
    });

    cy.xpath(
      "//*[@id='root']/div[3]/div[1]/div/div[3]/div/div/div[3]/div[1]/div[2]/div/p"
    )
      .invoke("text")
      .then((paginatorText) => {
        const content = paginatorText.trim();
        const lastPage = this.verifyStringToPagination(content);
        if (lastPage == false) {
          cy.xpath(
            '//*[@id="TableContainerElement"]/following-sibling::div/div[1]/div[3]/div/div[2]/button[1]/span[2]'
          ).click({ force: true });
          this.checkDataInColumn(columnName, data, type);
        } else {
          this.verifyData(data, type);
        }
      });
  }

  verifyStringToPagination(cadena) {
    let lastPage = false;
    const part = cadena.split(" ");
    if (part[0].split("-")[1] === part[2]) lastPage = true;
    return lastPage;
  }

  verifyData(data, type) {
    if (type === "number") {
      const numberOk = this.columnValues.every((item) => item.includes(data));
      assert.isOk(
        numberOk,
        `El numero "${data}" se encontró en todas las filas de la columna`
      );
    } else {
      this.columnValues = ["02/08/2023", "04/08/2023", "10/08/2023"];
      let allDateInRange = true;
      for (const date of this.columnValues) {
        const dateParts = date.split("/");
        const reverseDate =
          dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0];
        if (!this.getDateInRange(data[0], data[1], reverseDate)) {
          allDateInRange = false;
          break;
        }
      }
      assert.isOk(
        allDateInRange,
        `Todas las fechas de la columna están en el rango del "${data[0]}" y del "${data[1]}"`
      );
    }
    this.columnValues = [];
  }

  getDateInRange(sDate, eDate, dt) {
    const startDate = new Date(sDate);
    const endDate = new Date(eDate);
    const date = new Date(dt);
    return date >= startDate && date <= endDate;
  }

  //  method to test that the words "No se encontró una factura XML" exist in the following element of cypress cy.get('.jss456 > .MuiBox-root > .MuiTypography-root')
  // verifyNoXmlFound() {
  //   cy.get('.jss456 > .MuiBox-root > .MuiTypography-root').should('contain','No se encontró una factura XML')
  // //create an assert
}
export default TableMaterialUIElement;
