class Modal {
  goToModalSite() {
    cy.visit("https://the-internet.herokuapp.com/entry_ad");
  }

  clickModal() {
    cy.contains("click here").click();
    cy.wait(3000);
    cy.contains("Close").click();
  }
}
export default Modal;
