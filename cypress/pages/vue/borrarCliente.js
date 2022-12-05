class borrarCliente {
  clickOkBorrar() {
    cy.get('[data-autofocus="true"] > .q-btn__content').click();
  }

  clickCancelBorrar() {
    cy.get(".q-card__actions > :nth-child(1) > .q-btn__content").click();
  }
}
export default borrarCliente;
