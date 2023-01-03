class EditRequestStatusCode{
	url = "http://localhost:3000/CrudRequestStatusCode";
	goToSite() {
		cy.visit(this.url);
	}
	
	verifySite() {
		cy.url().should("eq", this.url);
	}
setValueRequestStatCd(value) {
			cy.get("input[name='RequestStatCd']").type(value);
		}
			
		getValueRequestStatCd() {
			cy.get("input[name='RequestStatCd']")
			   .invoke("val")
			    .then((value) => {
			     cy.log(value);
			});
		}
			
		clearRequestStatCd() {
			cy.get("input[name='RequestStatCd']").clear();
		}
setValueRequestStatDesc(value) {
			cy.get("input[name='RequestStatDesc']").type(value);
		}
			
		getValueRequestStatDesc() {
			cy.get("input[name='RequestStatDesc']")
			   .invoke("val")
			   .then((value) => {
			      cy.log(value);
			});
		}
			
		clearRequestStatDesc() {
			cy.get("input[name='RequestStatDesc']").clear();
		}
setValueRptRequestStatDesc(value) {
			cy.get("input[name='RptRequestStatDesc']").type(value);
		}
			
		getValueRptRequestStatDesc() {
			cy.get("input[name='RptRequestStatDesc']")
			   .invoke("val")
			   .then((value) => {
			      cy.log(value);
			});
		}
			
		clearRptRequestStatDesc() {
			cy.get("input[name='RptRequestStatDesc']").clear();
		}
	clickBtnClose() {
    	cy.get("button[name='BtnClose']").click();
  	}

  	clickBtnSubmit() {
    	cy.get("button[name='BtnSubmit']").click();
  	}
}
export default EditRequestStatusCode;
