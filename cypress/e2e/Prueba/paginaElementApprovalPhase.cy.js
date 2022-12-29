import ApprovalPhase from "../../pages/element/ApprovalPhase/approvalPhase";
import DeleteApprovalPhase from "../../pages/element/ApprovalPhase/deleteApprovalPhase";
import EditApprovalPhase from "../../pages/element/ApprovalPhase/editApprovalPhase";
import NewApprovalPhase from "../../pages/element/ApprovalPhase/newApprovalPhase";
import TableMateriaUIElement from "../../utilities/tableMaterialUIElement";

describe("Prueba de Element", () => {
  const apprvalPhase = new ApprovalPhase();
  const newApprovalPhase = new NewApprovalPhase();
  const editApprovalPhase = new EditApprovalPhase();
  const deleteApprovalPhase = new DeleteApprovalPhase();
  const tableMaterialUIElement = new TableMateriaUIElement();

  it("Probar ApprovalPhase", () => {
    apprvalPhase.goToSite();
    apprvalPhase.clickBtnNewApprovalPhase();

    newApprovalPhase.clearApprvlPhaseId();
    newApprovalPhase.setValueApprvlPhaseId(25);
    newApprovalPhase.setValueApprvlActionDesc("Ejemplo desde Cypress");
    newApprovalPhase.setValueApprvlPhaseDesc("ticketClosing");
    newApprovalPhase.setValuePhaseSlaHrs(4);
    newApprovalPhase.clickBtnSubmit();

    apprvalPhase.setValueTextToFilterWith("Eje");
    apprvalPhase.verifyLengthRowsTableApprovalPhase(1);
    apprvalPhase.clearTextToFilterWith();
    apprvalPhase.clickNextPage();
    apprvalPhase.clickNextAllPage();
    apprvalPhase.clickPrevPage();
    apprvalPhase.clickPrevAllPage();

    apprvalPhase.clickNextAllPage();
    tableMaterialUIElement.clickMenuRow("Ejemplo desde Cypress");
    //
    tableMaterialUIElement.clickMenuEditRow();
    editApprovalPhase.clearApprvlActionDesc();
    editApprovalPhase.setValueApprvlActionDesc(
      "Ejemplo de edición desde cypress"
    );
    editApprovalPhase.clearPhaseSlaHrs();
    editApprovalPhase.setValuePhaseSlaHrs(10);
    editApprovalPhase.clickBtnSubmit();

    tableMaterialUIElement.clickMenuRow("Ejemplo de edición desde cypress");
    tableMaterialUIElement.clickMenuDeleteRow();
    deleteApprovalPhase.clickBtnSubmit();
  });
});
