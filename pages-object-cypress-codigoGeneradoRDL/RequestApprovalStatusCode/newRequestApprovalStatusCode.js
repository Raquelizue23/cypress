class NewRequestApprovalStatusCode{
	url = "http://localhost:3000/CrudRequestApprovalStatusCode";
	goToSite() {
		cy.visit(this.url);
	}
	
	verifySite() {
		cy.url().should("eq", this.url);
	}
setValueRequestApprvlStatCd(value) {
			cy.get("input[name='RequestApprvlStatCd']").type(value);
		}
			
		getValueRequestApprvlStatCd() {
			cy.get("input[name='RequestApprvlStatCd']")
			   .invoke("val")
			    .then((value) => {
			     cy.log(value);
			});
		}
			
		clearRequestApprvlStatCd() {
			cy.get("input[name='RequestApprvlStatCd']").clear();
		}
setValueRequestApprvlStatDesc(value) {
			cy.get("input[name='RequestApprvlStatDesc']").type(value);
		}
			
		getValueRequestApprvlStatDesc() {
			cy.get("input[name='RequestApprvlStatDesc']")
			   .invoke("val")
			   .then((value) => {
			      cy.log(value);
			});
		}
			
		clearRequestApprvlStatDesc() {
			cy.get("input[name='RequestApprvlStatDesc']").clear();
		}
	clickBtnClose() {
    	cy.get("button[name='BtnClose']").click();
  	}

  	clickBtnSubmit() {
    	cy.get("button[name='BtnSubmit']").click();
  	}
}
export default NewRequestApprovalStatusCode;
