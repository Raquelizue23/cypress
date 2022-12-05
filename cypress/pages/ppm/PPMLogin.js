class PPMLogin {
  goToSite() {
    cy.visit("https://ppm.softtek.com/itg/web/knta/global/Logon.jsp");
  }

  setValueFieldUsername(value) {
    cy.get("input[id='field-username']").type(value);
  }
  getValueFieldUsername() {
    cy.get("input[id='field-username']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }
  clearFieldUsername() {
    cy.get("input[id='field-username']").clear();
  }
  setValueFieldPassword(value) {
    cy.get("input[id='field-password']").type(value);
  }
  getValueFieldPassword() {
    cy.get("input[id='field-password']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }
  clearFieldPassword() {
    cy.get("input[id='field-password']").clear();
  }
  getLengthFieldLanguage() {
    cy.get("select[id='field-language']")
      .children()
      .then((childs) => {
        cy.log(childs);
        cy.log(
          "FieldLanguage tiene un total de " + childs.length + " elemento(s)"
        );
      });
  }
  selectItemFieldLanguage(item) {
    cy.get("select[id='field-language']").select(item);
  }
  checkFieldRememberme0() {
    cy.get("input[id='field-rememberme']").eq(0).check();
  }
  unheckFieldRememberme0() {
    cy.get("input[id='field-rememberme']").eq(0).uncheck();
  }

  clickLabelLogonSubmitButtonCaption() {
    cy.get("div[id='label-LOGON_SUBMIT_BUTTON_CAPTION']").click();
  }
}
export default PPMLogin;
