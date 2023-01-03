import RequestApprovalDeparment from "../../pages/element/RequestApprovalDeparment/requestApprovalDeparment";
import DeleteRequestApprovalDeparment from "../../pages/element/RequestApprovalDeparment/deleteRequestApprovalDeparment";
import EditRequestApprovalDeparment from "../../pages/element/RequestApprovalDeparment/editRequestApprovalDeparment";
import NewRequestApprovalDeparment from "../../pages/element/RequestApprovalDeparment/newRequestApprovalDeparment";
import TableMateriaUIElement from "../../utilities/tableMaterialUIElement";

describe("Prueba de Element", () => {
  const requestApprovalDeparment = new RequestApprovalDeparment();
  const newRequestApprovalDeparment = new NewRequestApprovalDeparment();
  const editRequestApprovalDeparment = new EditRequestApprovalDeparment();
  const deleteRequestApprovalDeparment = new DeleteRequestApprovalDeparment();
  const tableMaterialUIElement = new TableMateriaUIElement();

  it("Probar RequestApprovalDeparment", () => {
    requestApprovalDeparment.goToSite();
    requestApprovalDeparment.clickBtnNewRequestApprovalDeparment();
    
   	newRequestApprovalDeparment.clearDeptId();
   	newRequestApprovalDeparment.setValueDeptId(50);
   	newRequestApprovalDeparment.setValueDeptNm("Ejemplo DeptNm");
    newRequestApprovalDeparment.clickBtnSubmit();

    requestApprovalDeparment.setValueTextToFilterWith("Ejemplo");
    requestApprovalDeparment.verifyLengthRowsTableRequestApprovalDeparment(1);
    requestApprovalDeparment.clearTextToFilterWith();
    requestApprovalDeparment.clickNextAllPage();

    tableMaterialUIElement.clickMenuRow("Ejemplo");
    tableMaterialUIElement.clickMenuEditRow();
    
    newRequestApprovalDeparment.clearDeptNm();
    newRequestApprovalDeparment.setValueDeptNm("Ejemplo modificado DeptNm");
    editRequestApprovalDeparment.clickBtnSubmit();

    tableMaterialUIElement.clickMenuRow("Ejemplo");
    tableMaterialUIElement.clickMenuDeleteRow();
    deleteRequestApprovalDeparment.clickBtnSubmit();
  });
});
