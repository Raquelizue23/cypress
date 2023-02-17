import RequestDocumentType from "../../pages/element/RequestDocumentType/requestDocumentType";
import DeleteRequestDocumentType from "../../pages/element/RequestDocumentType/deleteRequestDocumentType";
import EditRequestDocumentType from "../../pages/element/RequestDocumentType/editRequestDocumentType";
import NewRequestDocumentType from "../../pages/element/RequestDocumentType/newRequestDocumentType";
import TableMateriaUIElement from "../../utilities/tableMaterialUIElement";

describe("Prueba de Element", () => {
  const requestDocumentType = new RequestDocumentType();
  const newRequestDocumentType = new NewRequestDocumentType();
  const editRequestDocumentType = new EditRequestDocumentType();
  const deleteRequestDocumentType = new DeleteRequestDocumentType();
  const tableMaterialUIElement = new TableMateriaUIElement();

  it("Probar RequestDocumentType", () => {
    requestDocumentType.goToSite();
    requestDocumentType.clickBtnNewRequestDocumentType();
    
   	newRequestDocumentType.clearDocTypId();
   	newRequestDocumentType.setValueDocTypId(50);
   	newRequestDocumentType.setValueDocTypDesc("Ejemplo DocTypDesc");
   	newRequestDocumentType.setValueDocTypExt("Ejemplo DocTypExt");
    newRequestDocumentType.clickBtnSubmit();

    requestDocumentType.setValueTextToFilterWith("Ejemplo");
    requestDocumentType.verifyLengthRowsTableRequestDocumentType(1);
    requestDocumentType.clearTextToFilterWith();
    requestDocumentType.clickNextAllPage();

    tableMaterialUIElement.clickMenuRow("Ejemplo");
    tableMaterialUIElement.clickMenuEditRow();
    
    editRequestDocumentType.clearDocTypDesc();
    editRequestDocumentType.setValueDocTypDesc("Ejemplo modificado DocTypDesc");
    editRequestDocumentType.clearDocTypExt();
    editRequestDocumentType.setValueDocTypExt("Ejemplo modificado DocTypExt");
    editRequestDocumentType.clickBtnSubmit();

    tableMaterialUIElement.clickMenuRow("Ejemplo");
    tableMaterialUIElement.clickMenuDeleteRow();
    deleteRequestDocumentType.clickBtnSubmit();
  });
});
