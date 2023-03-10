class TestPageHeroku {

    url = "https://testpages.herokuapp.com/styled/basic-html-form-test.html";
    goToSite() {
        cy.visit(this.url);
    }

    verifySite() {
        cy.url().should("eq", this.url);
    }

    setValueUsername(value) {
        if (value != "")
            cy.get("input[name='username']").type(value);
        else this.clearUsername()
    }

    getValueUsername() {
        cy.get("input[name='username']")
            .invoke("val")
            .then((value) => {
                cy.log(value);
            });
    }

    clearUsername() {
        cy.get("input[name='username']").clear();
    }

    getFieldUsername() {
        return cy.get("input[name='username']");
    }

    setValuePassword(value) {
        if (value != "")
            cy.get("input[name='password']").type(value);
        else this.clearPassword()
    }

    getValuePassword() {
        cy.get("input[name='password']")
            .invoke("val")
            .then((value) => {
                cy.log(value);
            });
    }

    clearPassword() {
        cy.get("input[name='password']").clear();
    }

    getFieldPassword() {
        return cy.get("input[name='password']");
    }

    uploadFilename(file) {
        cy.get("input[name='filename']").selectFile(file, { force: true });
    }

    checkCheckboxes() {
        cy.get("input[name='checkboxes[]']").check();
    }

    uncheckCheckboxes() {
        cy.get("input[name='checkboxes[]']").uncheck();
    }

    checkCheckboxes() {
        cy.get("input[name='checkboxes[]']").check();
    }

    uncheckCheckboxes() {
        cy.get("input[name='checkboxes[]']").uncheck();
    }

    checkCheckboxes() {
        cy.get("input[name='checkboxes[]']").check();
    }

    uncheckCheckboxes() {
        cy.get("input[name='checkboxes[]']").uncheck();
    }

    checkRadioval() {
        cy.get("input[name='radioval']").check();
    }

    uncheckRadioval() {
        cy.get("input[name='radioval']").uncheck();
    }

    checkRadioval() {
        cy.get("input[name='radioval']").check();
    }

    uncheckRadioval() {
        cy.get("input[name='radioval']").uncheck();
    }

    checkRadioval() {
        cy.get("input[name='radioval']").check();
    }

    uncheckRadioval() {
        cy.get("input[name='radioval']").uncheck();
    }

    clickSubmitbutton() {
        cy.get("input[name='submitbutton']").click();
    }

    clickSubmitbutton() {
        cy.get("input[name='submitbutton']").click();
    }

    setValueReportmissingparams(value) {
        if (value != "")
            cy.get("input[name='reportmissingparams']").type(value);
        else this.clearReportmissingparams()
    }

    getValueReportmissingparams() {
        cy.get("input[name='reportmissingparams']")
            .invoke("val")
            .then((value) => {
                cy.log(value);
            });
    }

    clearReportmissingparams() {
        cy.get("input[name='reportmissingparams']").clear();
    }

    getFieldReportmissingparams() {
        return cy.get("input[name='reportmissingparams']");
    }

    setValueFormReturn(value) {
        if (value != "")
            cy.get("input[name='form_return']").type(value);
        else this.clearFormReturn()
    }

    getValueFormReturn() {
        cy.get("input[name='form_return']")
            .invoke("val")
            .then((value) => {
                cy.log(value);
            });
    }

    clearFormReturn() {
        cy.get("input[name='form_return']").clear();
    }

    getFieldFormReturn() {
        return cy.get("input[name='form_return']");
    }

    setValueComments(value) {
        if (value != "")
            cy.get("textarea[name='comments']").type(value);
        else this.clearComments()
    }

    getValueComments() {
        cy.get("textarea[name='comments']")
            .invoke("val")
            .then((value) => {
                cy.log(value);
            });
    }

    clearComments() {
        cy.get("textarea[name='comments']").clear();
    }

    getFieldComments() {
        return cy.get("textarea[name='comments']");
    }

    getLengthMultipleselect() {
        cy.get("select[name='multipleselect[]']").children().then((childs) => {
            cy.log(childs);
            cy.log("Multipleselect tiene un total de " + childs.length + " elemento(s)");
        });

    }

    selectItemMultipleselect(item) {
        cy.get("select[name='multipleselect[]']").select(item);
    }

    getLengthDropdown() {
        cy.get("select[name='dropdown']").children().then((childs) => {
            cy.log(childs);
            cy.log("Dropdown tiene un total de " + childs.length + " elemento(s)");
        });

    }

    selectItemDropdown(item) {
        cy.get("select[name='dropdown']").select(item);
    }


}
export default TestPageHeroku