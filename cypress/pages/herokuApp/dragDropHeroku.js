class DragDrop {
  goToDragDropSite() {
    cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
  }

  dragElement() {
    //cy.contains("A").drag("B"); // esta instrucción es con un pluggin
    const dataTransfer = new DataTransfer();

    cy.contains("A").trigger("dragstart", {
      dataTransfer,
    });

    cy.contains("B").trigger("drop", {
      dataTransfer,
    });
  }
}
export default DragDrop;
