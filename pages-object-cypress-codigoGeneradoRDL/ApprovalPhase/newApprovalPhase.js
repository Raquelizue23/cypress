class NewApprovalPhase{
	url = "http://localhost:3000/CrudApprovalPhase";
	goToSite() {
		cy.visit(this.url);
	}
	
	verifySite() {
		cy.url().should("eq", this.url);
	}
setValueApprvlPhaseId(value) {
			cy.get("input[name='ApprvlPhaseId']").type(value);
		}
			
		getValueApprvlPhaseId() {
			cy.get("input[name='ApprvlPhaseId']")
			   .invoke("val")
			    .then((value) => {
			     cy.log(value);
			});
		}
			
		clearApprvlPhaseId() {
			cy.get("input[name='ApprvlPhaseId']").clear();
		}
setValueApprvlActionDesc(value) {
			cy.get("input[name='ApprvlActionDesc']").type(value);
		}
			
		getValueApprvlActionDesc() {
			cy.get("input[name='ApprvlActionDesc']")
			   .invoke("val")
			   .then((value) => {
			      cy.log(value);
			});
		}
			
		clearApprvlActionDesc() {
			cy.get("input[name='ApprvlActionDesc']").clear();
		}
setValueApprvlPhaseDesc(value) {
			cy.get("input[name='ApprvlPhaseDesc']").type(value);
		}
				
		getValueApprvlPhaseDesc() {
			cy.get("input[name='ApprvlPhaseDesc']")
				.invoke("val")
				.then((value) => {
				  cy.log(value);
			});
		}
				
		clearApprvlPhaseDesc() {
			cy.get("input[name='ApprvlPhaseDesc']").clear();
		}
setValuePhaseSlaHrs(value) {
			cy.get("input[name='PhaseSlaHrs']").type(value);
		}
			
		getValuePhaseSlaHrs() {
			cy.get("input[name='PhaseSlaHrs']")
			   .invoke("val")
			    .then((value) => {
			     cy.log(value);
			});
		}
			
		clearPhaseSlaHrs() {
			cy.get("input[name='PhaseSlaHrs']").clear();
		}
	clickBtnClose() {
    	cy.get("button[name='BtnClose']").click();
  	}

  	clickBtnSubmit() {
    	cy.get("button[name='BtnSubmit']").click();
  	}
}
export default NewApprovalPhase;
