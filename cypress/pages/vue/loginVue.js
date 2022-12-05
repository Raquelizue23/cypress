class loginVue {
  url = "http://localhost:8080/#/auth";
  //constante url=http://localhost:8080/#/auth
  goToSite() {
    cy.visit(this.url);
  }
  verifySite() {
    cy.url().then((url) => {
      const currentURL = url;
      if (currentURL == this.url) cy.log(true);
      else cy.log(false);
    });
  }
  setValueEmail(value) {
    cy.get("input[aria-page-object='email']").type(value);
  }

  getValueEmail() {
    cy.get("[aria-page-object='email']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearEmail() {
    cy.get("input[aria-page-object='email']").clear();
  }

  setValuePassword(value) {
    cy.get("input[aria-page-object='password']").type(value);
  }

  getValuePassword() {
    cy.get("[aria-page-object='password']")
      .invoke("val")
      .then((value) => {
        cy.log(value);
      });
  }

  clearPassword() {
    cy.get("input[aria-page-object='password']").clear();
  }

  clickLoginSubmit() {
    cy.get("button[aria-page-object='LoginSubmit']").click();
  }

  clickBotonMenu() {
    cy.get("button[aria-page-object='BotonMenu']").click();
  }

  clickLinkClients() {
    cy.get("a[aria-page-object='LinkClients']").click();
  }
}
export default loginVue;
