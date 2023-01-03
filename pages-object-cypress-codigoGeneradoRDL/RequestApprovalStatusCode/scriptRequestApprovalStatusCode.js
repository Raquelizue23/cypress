import RequestApprovalStatusCode from "../../pages/element/RequestApprovalStatusCode/requestApprovalStatusCode";
import DeleteRequestApprovalStatusCode from "../../pages/element/RequestApprovalStatusCode/deleteRequestApprovalStatusCode";
import EditRequestApprovalStatusCode from "../../pages/element/RequestApprovalStatusCode/editRequestApprovalStatusCode";
import NewRequestApprovalStatusCode from "../../pages/element/RequestApprovalStatusCode/newRequestApprovalStatusCode";
import TableMateriaUIElement from "../../utilities/tableMaterialUIElement";

describe("Prueba de Element", () => {
  const requestApprovalStatusCode = new RequestApprovalStatusCode();
  const newRequestApprovalStatusCode = new NewRequestApprovalStatusCode();
  const editRequestApprovalStatusCode = new EditRequestApprovalStatusCode();
  const deleteRequestApprovalStatusCode = new DeleteRequestApprovalStatusCode();
  const tableMaterialUIElement = new TableMateriaUIElement();

  it("Probar RequestApprovalStatusCode", () => {
    requestApprovalStatusCode.goToSite();
    requestApprovalStatusCode.clickBtnNewRequestApprovalStatusCode();
    
   	newRequestApprovalStatusCode.clearRequestApprvlStatCd();
   	newRequestApprovalStatusCode.setValueRequestApprvlStatCd(50);
   	newRequestApprovalStatusCode.setValueRequestApprvlStatDesc("Ejemplo RequestApprvlStatDesc");
    newRequestApprovalStatusCode.clickBtnSubmit();

    requestApprovalStatusCode.setValueTextToFilterWith("Ejemplo");
    requestApprovalStatusCode.verifyLengthRowsTableRequestApprovalStatusCode(1);
    requestApprovalStatusCode.clearTextToFilterWith();
    requestApprovalStatusCode.clickNextAllPage();

    tableMaterialUIElement.clickMenuRow("Ejemplo");
    tableMaterialUIElement.clickMenuEditRow();
    
    newRequestApprovalStatusCode.clearRequestApprvlStatDesc();
    newRequestApprovalStatusCode.setValueRequestApprvlStatDesc("Ejemplo modificado RequestApprvlStatDesc");
    editRequestApprovalStatusCode.clickBtnSubmit();

    tableMaterialUIElement.clickMenuRow("Ejemplo");
    tableMaterialUIElement.clickMenuDeleteRow();
    deleteRequestApprovalStatusCode.clickBtnSubmit();
  });
});
