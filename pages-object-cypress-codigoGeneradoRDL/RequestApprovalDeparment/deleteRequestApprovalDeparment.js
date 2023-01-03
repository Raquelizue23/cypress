class DeleteRequestApprovalDeparment{
	url = "http://localhost:3000/CrudRequestApprovalDeparment";
	goToSite() {
		cy.visit(this.url);
	}
	
	verifySite() {
		cy.url().should("eq", this.url);
	}
	
	clickBtnClose() {
	    cy.get("button[name='BtnClose']").click();
	}
	
	clickBtnSubmit() {
	   cy.get("button[name='BtnSubmit']").click();
	}
}
export default DeleteRequestApprovalDeparment;
