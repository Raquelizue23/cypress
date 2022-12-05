class Slide {
  goToSlideSite() {
    cy.visit("https://the-internet.herokuapp.com/horizontal_slider");
  }

  moveSlide(move) {
    cy.get("input").type(move);
  }
}
export default Slide;
