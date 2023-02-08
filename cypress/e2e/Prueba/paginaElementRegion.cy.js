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
    region.verifyLengthRowsTableContainerElement(1);
    region.clearTextToFilterWith();
    region.clickNextAllPage();

    tableMaterialUIElement.clickMenuRow("Ejemplo RegionCd");
    tableMaterialUIElement.clickMenuEditRow();

    editRegion.clearRegionCd();
    editRegion.setValueRegionCd("Ejemplo modificado RegionCd");
    editRegion.clearDirNm();
    editRegion.setValueDirNm("Ejemplo modificado DirNm");
    editRegion.clickBtnSubmit();

    tableMaterialUIElement.clickMenuRow("Ejemplo");
    tableMaterialUIElement.clickMenuDeleteRow();
    deleteRegion.clickBtnSubmit();

    cy.task("TASKONDB", {
      dbConfig: Cypress.config("DB"),
      sql: "SELECT COUNT(*) FROM core.region",
    }).then((result) => {
      cy.log(result.rows[0].count);
    });

    cy.task("TASKONDB", {
      dbConfig: Cypress.config("DB"),
      sql: "DELETE FROM core.region WHERE region_id=50",
    }).then((result) => {
      console.log(result.rows);
    });

    cy.task("TASKONDB", {
      dbConfig: Cypress.config("DB"),
      sql: "SELECT COUNT(*) FROM core.region",
    }).then((result) => {
      cy.log(result.rows[0].count);
    });
  });

  //hacer el assert para que compruebe que se elimino un row
});
