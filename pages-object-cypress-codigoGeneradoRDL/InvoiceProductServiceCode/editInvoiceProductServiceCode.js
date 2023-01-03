class EditInvoiceProductServiceCode{
	url = "http://localhost:3000/CrudInvoiceProductServiceCode";
	goToSite() {
		cy.visit(this.url);
	}
	
	verifySite() {
		cy.url().should("eq", this.url);
	}
setValueInvProdSvcCd(value) {
			cy.get("input[name='InvProdSvcCd']").type(value);
		}
			
		getValueInvProdSvcCd() {
			cy.get("input[name='InvProdSvcCd']")
			   .invoke("val")
			   .then((value) => {
			      cy.log(value);
			});
		}
			
		clearInvProdSvcCd() {
			cy.get("input[name='InvProdSvcCd']").clear();
		}
	clickBtnClose() {
    	cy.get("button[name='BtnClose']").click();
  	}

  	clickBtnSubmit() {
    	cy.get("button[name='BtnSubmit']").click();
  	}
}
export default EditInvoiceProductServiceCode;
