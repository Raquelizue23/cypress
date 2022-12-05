import CheckBoxes from "../../pages/herokuApp/checkBoxesHeroku";
import Input from "../../pages/herokuApp/inputHeroku";
import Button from "../../pages/herokuApp/buttonHeroku";
import DropDownList from "../../pages/herokuApp/dropDownListHeroku";
import LinkDownload from "../../pages/herokuApp/linkDownload";
import Slide from "../../pages/herokuApp/slideHeroku";
import Table from "../../pages/herokuApp/tableHeroku";
import DragDrop from "../../pages/herokuApp/dragDropHeroku";
import Modal from "../../pages/herokuApp/modalHeroku";

describe("Prueba Heroku App", () => {
  const checkBoxes = new CheckBoxes(); //Sirve para los radios
  const input = new Input(); //Inputs y TextArea
  const button = new Button();
  const dropDown = new DropDownList();
  const linkDownload = new LinkDownload();
  const slide = new Slide();
  const table = new Table();
  const dragDrop = new DragDrop();
  const modal = new Modal();

  it("Probar chcekboxes", () => {
    checkBoxes.goToCheckBoxesSite();
    checkBoxes.checkCheckBox1();
    checkBoxes.uncheckCheckBox2();
    checkBoxes.isCheckCheckBox1();
  });

  it("Probar input", () => {
    input.goToInputSite();
    input.setValueInput(8);
    input.getValueInput();
    input.clearInput();
  });

  it("Probar button", () => {
    button.goToButtonSite();
    button.clickButton();
  });

  it("Probar DropdownList", () => {
    dropDown.goToDropDownListSite();
    dropDown.getLengthDropDownList();
    dropDown.getItemDropDownList(1);
  });

  it("Probar links de descarga", () => {
    linkDownload.goToLinkDownloadSite();
    //linkDownload.getSomeFile();
  });

  it("Probar Slide", () => {
    slide.goToSlideSite();
    slide.moveSlide(2);
  });

  it("Probar table", () => {
    table.goToTableSite();
    table.getItemTable("Smith");
    table.getHeadTable();
    table.getItemsByColumn(1);
    table.getItemsByRow(2);
  });

  it("Probar Drag and Drop", () => {
    dragDrop.goToDragDropSite();
    dragDrop.dragElement();
  });

  it("Prueba Modal", () => {
    modal.goToModalSite();
    modal.clickModal();
  });

  // beforeEach(() => {
  //   cy.visit("https://the-internet.herokuapp.com/");
  // });

  // it("Click en el Add/Remove Elements", () => {
  //   cy.contains("Add/Remove Elements").click();
  // });

  // it("Prueba Dropdown", () => {
  //   cy.contains("Dropdown").click();
  //   cy.get("#dropdown").select(1);
  // });
});
