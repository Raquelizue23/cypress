class PPMRequestCreate {
  goToSite() {
    cy.visit(
      "https://ppm.softtek.com/itg/web/knta/crt/RequestCreate.jsp?REQUEST_TYPE_CREATE=5.13.32850.Solicitud+PSG"
    );
  }

  setValueReqAssignedToUserIdacTf(value) {
    cy.get("input[id='REQ.ASSIGNED_TO_USER_IDAC_TF']").type(value);
  }
  getLengthReqPTipoReq() {
    cy.get("select[id='REQ.P.TIPO_REQ']")
      .children()
      .then((childs) => {
        cy.log(childs);
        cy.log(
          "ReqPTipoReq tiene un total de " + childs.length + " elemento(s)"
        );
      });
  }
  selectItemReqPTipoReq(item) {
    cy.get("select[id='REQ.P.TIPO_REQ']").select(item);
  }

  setValueReqPSolicitadoacTf(value) {
    cy.get("input[id='REQ.P.SOLICITADOAC_TF']").type(value);
  }

  setValueReqPProjectacTf(value) {
    cy.get("input[id='REQ.P.PROJECTAC_TF']").type(value);
  }

  setValueReqPCustomer(value) {
    cy.get("input[id='REQ.P.CUSTOMER']").type(value);
  }

  setValueReqPNombreProyecto(value) {
    cy.get("input[id='REQ.P.NOMBRE_PROYECTO']").type(value);
  }
}
export default PPMRequestCreate;
