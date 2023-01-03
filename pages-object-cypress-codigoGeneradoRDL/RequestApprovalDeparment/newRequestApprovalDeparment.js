class NewRequestApprovalDeparment{
	url = "http://localhost:3000/CrudRequestApprovalDeparment";
	goToSite() {
		cy.visit(this.url);
	}
	
	verifySite() {
		cy.url().should("eq", this.url);
	}
setValueDeptId(value) {
			cy.get("input[name='DeptId']").type(value);
		}
			
		getValueDeptId() {
			cy.get("input[name='DeptId']")
			   .invoke("val")
			    .then((value) => {
			     cy.log(value);
			});
		}
			
		clearDeptId() {
			cy.get("input[name='DeptId']").clear();
		}
setValueDeptNm(value) {
			cy.get("input[name='DeptNm']").type(value);
		}
			
		getValueDeptNm() {
			cy.get("input[name='DeptNm']")
			   .invoke("val")
			   .then((value) => {
			      cy.log(value);
			});
		}
			
		clearDeptNm() {
			cy.get("input[name='DeptNm']").clear();
		}
	clickBtnClose() {
    	cy.get("button[name='BtnClose']").click();
  	}

  	clickBtnSubmit() {
    	cy.get("button[name='BtnSubmit']").click();
  	}
}
export default NewRequestApprovalDeparment;
