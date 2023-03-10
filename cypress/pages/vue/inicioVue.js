class inicioVue {
    url = "https://crud-firebase-cypress.web.app/spa/#/index";
    goToSite() {
        cy.visit(this.url);
    }

    verifySite() {
        cy.url().should("eq", this.url);
    }
    clickBotonMenu() {
        cy.get("button[aria-page-object='BotonMenu']").click();
    }

    clickCerrarSesionMenu() {
        cy.get("button[aria-page-object='CerrarSesionMenu']").click();
    }

    clickLinkInicio() {
        cy.get("a[aria-page-object='LinkInicio']").click();
    }

    clickLinkClients() {
        cy.get("a[aria-page-object='LinkClients']").click();
    }

    clickLinkCatSociedades() {
        cy.get("a[aria-page-object='LinkCatSociedades']").click();
    }

    clickLinkPruebas() {
        cy.get("a[aria-page-object='LinkPruebas']").click();
    }
}
export default inicioVue;