class Table {
  goToTableSite() {
    cy.visit("https://the-internet.herokuapp.com/tables");
  }

  getItemTable(item) {
    cy.contains("td", item);
  }

  getHeadTable() {
    //Recupera el thead como un todo
    cy.get("#table1 > thead ").each(($elem, $index, $list) => {
      cy.log($elem.text());
    });
    //Recupera el thead como un conjunto de elementos
    cy.get("#table1 > thead >tr >th").each(($elem, $index, $list) => {
      cy.log($elem.text());
      cy.log($elem.index());
    });
  }

  getItemsByColumn(indexColumn) {
    cy.get("#table1 > tbody>tr>td:nth-child(" + indexColumn + ")").each(
      ($elem, index, $list) => {
        cy.log($elem.text());
      }
    );
  }

  getItemsByRow(indexRow) {
    cy.get("#table1 > tbody>tr:nth-child(" + indexRow + ")").each(
      ($elem, index, $list) => {
        cy.log($elem.text());
      }
    );
  }
}
export default Table;
