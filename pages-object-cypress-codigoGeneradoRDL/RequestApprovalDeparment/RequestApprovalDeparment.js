import TableMateriaUIElement from "../../../utilities/tableMaterialUIElement";
class RequestApprovalDeparment{
	tableMaterialUIElement = new TableMateriaUIElement();
	url = "http://localhost:3000/CrudRequestApprovalDeparment";
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
	
	clickBtnNewRequestApprovalDeparment() {
	   cy.get("button[name='BtnNewRequestApprovalDeparment']").click();
	}
	
	verifyLengthRowsTableRequestApprovalDeparment(rows) {
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
export default RequestApprovalDeparment;
