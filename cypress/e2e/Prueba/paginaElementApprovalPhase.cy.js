// import fs from "fs";
// import csv from "csv-parser";
import ApprovalPhase from "../../pages/element/ApprovalPhase/approvalPhase";
import DeleteApprovalPhase from "../../pages/element/ApprovalPhase/deleteApprovalPhase";
import EditApprovalPhase from "../../pages/element/ApprovalPhase/editApprovalPhase";
import NewApprovalPhase from "../../pages/element/ApprovalPhase/newApprovalPhase";
import TableMateriaUIElement from "../../utilities/tableMaterialUIElement";
import Utilities from "../../utilities/utilities";

describe("Prueba de Element", async () => {
  const approvalPhase = new ApprovalPhase();
  const newApprovalPhase = new NewApprovalPhase();
  const editApprovalPhase = new EditApprovalPhase();
  const deleteApprovalPhase = new DeleteApprovalPhase();
  const tableMaterialUIElement = new TableMateriaUIElement();
  const utilities = new Utilities();
  let data = [];

  beforeEach(() => {
    utilities.getObjData().then((arrayData) => {
      data = arrayData;
    });
  });

  it("Probar ApprovalPhase", () => {
    cy.allure().tag("ET3-231");
    //etiqueta HU: ET3-190
    approvalPhase.goToSite();
    cy.wait(3000);
    // tableMaterialUIElement.verifyColumnName("¿La fila esta activa?");
    // tableMaterialUIElement.clickColumnName("Nombre de la aprobación");
    // tableMaterialUIElement.checkOrderColumn("Nombre de la aprobación", "Asc");
    // tableMaterialUIElement.clickColumnName("Nombre de la aprobación");
    // tableMaterialUIElement.checkOrderColumn("Nombre de la aprobación", "Des");
    // cy.get("#startDate").click();
    // tableMaterialUIElement.clickCalendarDay(15);
    cy.get(":nth-child(1) > .MuiInputBase-root").type(2);
    tableMaterialUIElement.checkNumberInColumn(
      "Tiempo máximo de resolución",
      2
    );
    cy.get(".MuiInputAdornment-root > .MuiButtonBase-root").click();
    tableMaterialUIElement.checkRangeDateInColumn(
      "Tiempo máximo de resolución",
      ["2023/08/01", "2023/08/15"]
    );

    data.forEach((row) => {
      approvalPhase.clickBtnNewApprovalPhase();
      newApprovalPhase.clearApprvlPhaseId();
      newApprovalPhase.setValueApprvlPhaseId(row.setValueApprvlPhaseId);
      newApprovalPhase.setValueApprvlActionDesc(row.setValueApprvlActionDesc);
      newApprovalPhase.setValueApprvlPhaseDesc(row.setValueApprvlPhaseDesc);
      newApprovalPhase.clearPhaseSlaHrs();
      newApprovalPhase.setValuePhaseSlaHrs(row.setValuePhaseSlaHrs);
      cy.get(".MuiButton-outlined > .MuiButton-label").click();
    });
    // newApprovalPhase.clickBtnSubmit();

    // approvalPhase.setValueTextToFilterWith("Ejemplo");
    // approvalPhase.verifyLengthRowsTableApprovalPhase(1);
    // approvalPhase.clearTextToFilterWith();
    // approvalPhase.clickNextAllPage();

    // tableMaterialUIElement.clickMenuRow("Ejemplo");
    // tableMaterialUIElement.clickMenuEditRow();

    // editApprovalPhase.clearApprvlActionDesc();
    // editApprovalPhase.setValueApprvlActionDesc(
    //   "Ejemplo modificado ApprvlActionDesc"
    // );
    // editApprovalPhase.clearPhaseSlaHrs();
    // editApprovalPhase.setValuePhaseSlaHrs(100);
    // editApprovalPhase.clickBtnSubmit();

    // tableMaterialUIElement.clickMenuRow("Ejemplo");
    // tableMaterialUIElement.clickMenuDeleteRow();
    // deleteApprovalPhase.clickBtnSubmit();
  });
});
