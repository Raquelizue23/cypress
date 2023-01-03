class EditRequestDocumentType{
	url = "http://localhost:3000/CrudRequestDocumentType";
	goToSite() {
		cy.visit(this.url);
	}
	
	verifySite() {
		cy.url().should("eq", this.url);
	}
setValueDocTypId(value) {
			cy.get("input[name='DocTypId']").type(value);
		}
			
		getValueDocTypId() {
			cy.get("input[name='DocTypId']")
			   .invoke("val")
			    .then((value) => {
			     cy.log(value);
			});
		}
			
		clearDocTypId() {
			cy.get("input[name='DocTypId']").clear();
		}
setValueDocTypDesc(value) {
			cy.get("input[name='DocTypDesc']").type(value);
		}
			
		getValueDocTypDesc() {
			cy.get("input[name='DocTypDesc']")
			   .invoke("val")
			   .then((value) => {
			      cy.log(value);
			});
		}
			
		clearDocTypDesc() {
			cy.get("input[name='DocTypDesc']").clear();
		}
setValueDocTypExt(value) {
			cy.get("input[name='DocTypExt']").type(value);
		}
			
		getValueDocTypExt() {
			cy.get("input[name='DocTypExt']")
			   .invoke("val")
			   .then((value) => {
			      cy.log(value);
			});
		}
			
		clearDocTypExt() {
			cy.get("input[name='DocTypExt']").clear();
		}
	clickBtnClose() {
    	cy.get("button[name='BtnClose']").click();
  	}

  	clickBtnSubmit() {
    	cy.get("button[name='BtnSubmit']").click();
  	}
}
export default EditRequestDocumentType;
