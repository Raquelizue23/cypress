import TableMateriaUIElement from "../../../utilities/tableMaterialUIElement";
class RequestApprovalStatusCode{
	tableMaterialUIElement = new TableMateriaUIElement();
	url = "http://localhost:3000/CrudRequestApprovalStatusCode";
	goToSite() {
		cy.visit(this.url);
	}
	
	verifySite() {
		cy.url().should("eq", this.url);
	}
	
	setValueTextToFilterWith(value) {
	    cy.get("input[name='textToFilterWith']").type(value);
	  }
	
	getValueTextToFilterWith() {
	    cy.get("input[name='textToFilterWith']")
	      .invoke("val")
	      .then((value) => {
	        cy.log(value);
	      });
	}
	
	clearTextToFilterWith() {
	   cy.get("input[name='textToFilterWith']").clear();
	}
	
	clickBtnNewRequestApprovalStatusCode() {
	   cy.get("button[name='BtnNewRequestApprovalStatusCode']").click();
	}
	
	verifyLengthRowsTableRequestApprovalStatusCode(rows) {
   		this.tableMaterialUIElement.verifyLengthRowsTable("TableContainerElement",rows);
 	}

	clickNextPage() {
		this.tableMaterialUIElement.getNextPage("TableContainerElement").click({ force: true });
	 }

  	clickNextAllPage() {
    	this.tableMaterialUIElement.getNextAllPages("TableContainerElement").click({ force: true });
  	}

  	clickPrevPage() {
    	this.tableMaterialUIElement.getPrevPage("TableContainerElement").click({ force: true });
  	}

  	clickPrevAllPage() {
    	this.tableMaterialUIElement.getPrevAllPages("TableContainerElement").click({ force: true });
  	}
}
export default RequestApprovalStatusCode;
