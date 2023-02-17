import RequestStatusCode from "../../pages/element/RequestStatusCode/requestStatusCode";
import DeleteRequestStatusCode from "../../pages/element/RequestStatusCode/deleteRequestStatusCode";
import EditRequestStatusCode from "../../pages/element/RequestStatusCode/editRequestStatusCode";
import NewRequestStatusCode from "../../pages/element/RequestStatusCode/newRequestStatusCode";
import TableMateriaUIElement from "../../utilities/tableMaterialUIElement";

describe("Prueba de Element", () => {
  const requestStatusCode = new RequestStatusCode();
  const newRequestStatusCode = new NewRequestStatusCode();
  const editRequestStatusCode = new EditRequestStatusCode();
  const deleteRequestStatusCode = new DeleteRequestStatusCode();
  const tableMaterialUIElement = new TableMateriaUIElement();

  it("Probar RequestStatusCode", () => {
    requestStatusCode.goToSite();
    requestStatusCode.clickBtnNewRequestStatusCode();
    
   	newRequestStatusCode.clearRequestStatCd();
   	newRequestStatusCode.setValueRequestStatCd(50);
   	newRequestStatusCode.setValueRequestStatDesc("Ejemplo RequestStatDesc");
   	newRequestStatusCode.setValueRptRequestStatDesc("Ejemplo RptRequestStatDesc");
    newRequestStatusCode.clickBtnSubmit();

    requestStatusCode.setValueTextToFilterWith("Ejemplo");
    requestStatusCode.verifyLengthRowsTableRequestStatusCode(1);
    requestStatusCode.clearTextToFilterWith();
    requestStatusCode.clickNextAllPage();

    tableMaterialUIElement.clickMenuRow("Ejemplo");
    tableMaterialUIElement.clickMenuEditRow();
    
    editRequestStatusCode.clearRequestStatDesc();
    editRequestStatusCode.setValueRequestStatDesc("Ejemplo modificado RequestStatDesc");
    editRequestStatusCode.clearRptRequestStatDesc();
    editRequestStatusCode.setValueRptRequestStatDesc("Ejemplo modificado RptRequestStatDesc");
    editRequestStatusCode.clickBtnSubmit();

    tableMaterialUIElement.clickMenuRow("Ejemplo");
    tableMaterialUIElement.clickMenuDeleteRow();
    deleteRequestStatusCode.clickBtnSubmit();
  });
});
