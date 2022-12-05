class Button {
  goToButtonSite() {
    cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");
  }

  clickButton() {
    cy.get("button").click();
  }
}
export default Button;
