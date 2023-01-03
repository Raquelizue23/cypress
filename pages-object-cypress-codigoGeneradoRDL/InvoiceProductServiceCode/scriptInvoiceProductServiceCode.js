import InvoiceProductServiceCode from "../../pages/element/InvoiceProductServiceCode/invoiceProductServiceCode";
import DeleteInvoiceProductServiceCode from "../../pages/element/InvoiceProductServiceCode/deleteInvoiceProductServiceCode";
import EditInvoiceProductServiceCode from "../../pages/element/InvoiceProductServiceCode/editInvoiceProductServiceCode";
import NewInvoiceProductServiceCode from "../../pages/element/InvoiceProductServiceCode/newInvoiceProductServiceCode";
import TableMateriaUIElement from "../../utilities/tableMaterialUIElement";

describe("Prueba de Element", () => {
  const invoiceProductServiceCode = new InvoiceProductServiceCode();
  const newInvoiceProductServiceCode = new NewInvoiceProductServiceCode();
  const editInvoiceProductServiceCode = new EditInvoiceProductServiceCode();
  const deleteInvoiceProductServiceCode = new DeleteInvoiceProductServiceCode();
  const tableMaterialUIElement = new TableMateriaUIElement();

  it("Probar InvoiceProductServiceCode", () => {
    invoiceProductServiceCode.goToSite();
    invoiceProductServiceCode.clickBtnNewInvoiceProductServiceCode();
    
   	newInvoiceProductServiceCode.setValueInvProdSvcCd("Ejemplo InvProdSvcCd");
    newInvoiceProductServiceCode.clickBtnSubmit();

    invoiceProductServiceCode.setValueTextToFilterWith("Ejemplo");
    invoiceProductServiceCode.verifyLengthRowsTableInvoiceProductServiceCode(1);
    invoiceProductServiceCode.clearTextToFilterWith();
    invoiceProductServiceCode.clickNextAllPage();

    tableMaterialUIElement.clickMenuRow("Ejemplo");
    tableMaterialUIElement.clickMenuEditRow();
    
    newInvoiceProductServiceCode.clearInvProdSvcCd();
    newInvoiceProductServiceCode.setValueInvProdSvcCd("Ejemplo modificado InvProdSvcCd");
    editInvoiceProductServiceCode.clickBtnSubmit();

    tableMaterialUIElement.clickMenuRow("Ejemplo");
    tableMaterialUIElement.clickMenuDeleteRow();
    deleteInvoiceProductServiceCode.clickBtnSubmit();
  });
});
