import ApprovalPhase from "../../pages/element/approvalPhase";
import DeleteApprovalPhase from "../../pages/element/deleteApprovalPhase";
import EditApprovalPhase from "../../pages/element/editApprovalPhase";
import NewApprovalPhase from "../../pages/element/newApprovalPhase";

describe("Prueba de Vue", () => {
  const apprvalPhase = new ApprovalPhase();
  const newApprovalPhase = new NewApprovalPhase();
  const editApprovalPhase = new EditApprovalPhase();
  const deleteApprovalPhase = new DeleteApprovalPhase();

  // beforeEach(() => {
  // login.goToSite();
  // login.verifySite();
  // login.setValueEmail("test@test.com");
  // login.setValuePassword("123456");
  // login.clickLoginSubmit();
  // });

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
    // apprvalPhase.clearTextToFilterWith();

    // apprvalPhase.clickPaginationRight();
    apprvalPhase.getElementInTable("Ejemplo desde Cypress").prev().click();
    apprvalPhase.clickEditar();
    editApprovalPhase.clearApprvlActionDesc();
    editApprovalPhase.setValueApprvlActionDesc(
      "Ejemplo de edición desde cypress"
    );
    editApprovalPhase.clearPhaseSlaHrs();
    editApprovalPhase.setValuePhaseSlaHrs(10);
    editApprovalPhase.clickBtnSubmit();

    // apprvalPhase.clickPaginationRight();
    apprvalPhase
      .getElementInTable("Ejemplo de edición desde cypress")
      .prev()
      .click();
    apprvalPhase.clickEliminar();
    deleteApprovalPhase.clickBtnSubmit();
  });

  // afterEach(() => {
  //   cy.setLocalStorage("persist:session", '{"isAuthenticated":"false"}');
  // });
});
