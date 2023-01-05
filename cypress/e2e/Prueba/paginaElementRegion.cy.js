import Region from "../../pages/element/Region/region";
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
    newRegion.setValueRegionId(50);
    newRegion.setValueRegionCd("Ejemplo RegionCd");
    newRegion.setValueDirNm("Ejemplo DirNm");
    newRegion.clickBtnSubmit();

    region.setValueTextToFilterWith("Ejemplo");
    region.verifyLengthRowsTableRegion(1);
    region.clearTextToFilterWith();
    region.clickNextAllPage();

    tableMaterialUIElement.clickMenuRow("Ejemplo");
    tableMaterialUIElement.clickMenuEditRow();

    newRegion.clearRegionCd();
    newRegion.setValueRegionCd("Ejemplo modificado RegionCd");
    newRegion.clearDirNm();
    newRegion.setValueDirNm("Ejemplo modificado DirNm");
    editRegion.clickBtnSubmit();

    tableMaterialUIElement.clickMenuRow("Ejemplo");
    tableMaterialUIElement.clickMenuDeleteRow();
    deleteRegion.clickBtnSubmit();

    cy.task("READFROMDB", {
      dbConfig: Cypress.config("DB"),
      sql: "select * from core.region",
    }).then((result) => {
      console.log(result.rows);
    });
  });
});
