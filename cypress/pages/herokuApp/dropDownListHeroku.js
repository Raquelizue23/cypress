class DropdownList {
  goToDropDownListSite() {
    cy.visit("https://the-internet.herokuapp.com/dropdown");
  }

  getLengthDropDownList() {
    cy.get("select")
      .children()
      .then((childs) => {
        cy.log(childs);
        cy.log("la longitud del dropDownList es: " + childs.length);
        console.log(childs.length);
      });
  }

  getItemDropDownList(item) {
    cy.get("select").select(item);
  }
}
export default DropdownList;
