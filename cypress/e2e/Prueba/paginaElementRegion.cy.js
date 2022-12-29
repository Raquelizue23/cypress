import Region from "../../pages/element/Region/Region";
import DeleteRegion from "../../pages/element/Region/deleteRegion";
import EditRegion from "../../pages/element/Region/editRegion";
import NewRegion from "../../pages/element/Region/newRegion";
import TableMateriaUIElement from "../../utilities/tableMaterialUIElement";

describe("Prueba de Element", () => {
  const region = new Region();
  const newRegion = new NewRegion();
  const editRegion = new EditRegion();
  const deleteRegion = new DeleteRegion();
  const tableMaterialUIElement = new TableMateriaUIElement();

  it("Probar Region", () => {
    region.goToSite();
    region.clickBtnNewRegion();

    newRegion.clearRegionId();
    newRegion.setValueRegionId(8);
    newRegion.setValueRegionCd("EXA_RGN");
    newRegion.setValueDirNm("Ejemplo de Región");
    newRegion.clickBtnSubmit();

    region.setValueTextToFilterWith("EXA");
    region.verifyLengthRowsTableRegion(1);
    region.clearTextToFilterWith();
    region.clickNextAllPage();

    tableMaterialUIElement.clickMenuRow("EXA_RGN");
    tableMaterialUIElement.clickMenuEditRow();

    editRegion.clearRegionCd();
    editRegion.setValueRegionCd("EXA_RGN_2");
    editRegion.clearDirNm("");
    editRegion.setValueDirNm("Ejemplo modificado");
    editRegion.clickBtnSubmit();

    tableMaterialUIElement.clickMenuRow("EXA_RGN_2");
    tableMaterialUIElement.clickMenuDeleteRow();
    deleteRegion.clickBtnSubmit();
  });
});
