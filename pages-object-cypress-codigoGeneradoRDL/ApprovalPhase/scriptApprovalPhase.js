import ApprovalPhase from "../../pages/element/ApprovalPhase/approvalPhase";
import DeleteApprovalPhase from "../../pages/element/ApprovalPhase/deleteApprovalPhase";
import EditApprovalPhase from "../../pages/element/ApprovalPhase/editApprovalPhase";
import NewApprovalPhase from "../../pages/element/ApprovalPhase/newApprovalPhase";
import TableMateriaUIElement from "../../utilities/tableMaterialUIElement";

describe("Prueba de Element", () => {
  const approvalPhase = new ApprovalPhase();
  const newApprovalPhase = new NewApprovalPhase();
  const editApprovalPhase = new EditApprovalPhase();
  const deleteApprovalPhase = new DeleteApprovalPhase();
  const tableMaterialUIElement = new TableMateriaUIElement();

  it("Probar ApprovalPhase", () => {
    approvalPhase.goToSite();
    approvalPhase.clickBtnNewApprovalPhase();
    
   	newApprovalPhase.clearApprvlPhaseId();
   	newApprovalPhase.setValueApprvlPhaseId(50);
   	newApprovalPhase.setValueApprvlActionDesc("Ejemplo ApprvlActionDesc");
   	newApprovalPhase.setValueApprvlPhaseDesc("ticketClosing");
   	newApprovalPhase.clearPhaseSlaHrs();
   	newApprovalPhase.setValuePhaseSlaHrs(50);
    newApprovalPhase.clickBtnSubmit();

    approvalPhase.setValueTextToFilterWith("Ejemplo");
    approvalPhase.verifyLengthRowsTableApprovalPhase(1);
    approvalPhase.clearTextToFilterWith();
    approvalPhase.clickNextAllPage();

    tableMaterialUIElement.clickMenuRow("Ejemplo");
    tableMaterialUIElement.clickMenuEditRow();
    
    editApprovalPhase.clearApprvlActionDesc();
    editApprovalPhase.setValueApprvlActionDesc("Ejemplo modificado ApprvlActionDesc");
    editApprovalPhase.clearPhaseSlaHrs();
    editApprovalPhase.setValuePhaseSlaHrs(100);
    editApprovalPhase.clickBtnSubmit();

    tableMaterialUIElement.clickMenuRow("Ejemplo");
    tableMaterialUIElement.clickMenuDeleteRow();
    deleteApprovalPhase.clickBtnSubmit();
  });
});
