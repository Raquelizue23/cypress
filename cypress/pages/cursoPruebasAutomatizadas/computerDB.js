class ComputerDB {
  url = "https://computer-database.gatling.io/computers";
  goToSite() {
    cy.visit(this.url);
  }

  verifySite() {
    cy.url().should("eq", this.url);
  }

  setValueSearchBox(value) {
    cy.get("#searchbox").type(value);
  }

  clickSearchsubmit() {
    cy.get("input[id='searchsubmit']").click();
  }

  clickAdd() {
    cy.get("a[id='add']").click();
  }
  setValueName(value) {
    if (value != "") cy.get("input[id='name']").type(value);
    else this.clearName();
  }

  getValueName() {
    cy.get("input[id='name']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearName() {
    cy.get("input[id='name']").clear();
  }

  setValueIntroduced(value) {
    if (value != "") cy.get("input[id='introduced']").type(value);
    else this.clearIntroduced();
  }

  getValueIntroduced() {
    cy.get("input[id='introduced']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearIntroduced() {
    cy.get("input[id='introduced']").clear();
  }

  setValueDiscontinued(value) {
    if (value != "") cy.get("input[id='discontinued']").type(value);
    else this.clearDiscontinued();
  }

  getValueDiscontinued() {
    cy.get("input[id='discontinued']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearDiscontinued() {
    cy.get("input[id='discontinued']").clear();
  }

  getLengthCompany() {
    cy.get("select[id='company']")
      .children()
      .then((childs) => {
        cy.log(childs);
        cy.log("Company tiene un total de " + childs.length + " elemento(s)");
      });
  }

  selectItemCompany(item) {
    cy.get("select[id='company']").select(item);
  }

  clickBtnAgregar() {
    cy.get(".primary").click();
  }

  verifycomputerExist(value) {
    cy.get("table.computers.zebra-striped")
      .contains("td", value)
      .should("exist");
  }
}
export default ComputerDB;
