class NewRegion{
	url = "http://localhost:3000/CrudRegion";
	goToSite() {
		cy.visit(this.url);
	}
	
	verifySite() {
		cy.url().should("eq", this.url);
	}
setValueRegionId(value) {
			cy.get("input[name='RegionId']").type(value);
		}
			
		getValueRegionId() {
			cy.get("input[name='RegionId']")
			   .invoke("val")
			    .then((value) => {
			     cy.log(value);
			});
		}
			
		clearRegionId() {
			cy.get("input[name='RegionId']").clear();
		}
setValueRegionCd(value) {
			cy.get("input[name='RegionCd']").type(value);
		}
			
		getValueRegionCd() {
			cy.get("input[name='RegionCd']")
			   .invoke("val")
			   .then((value) => {
			      cy.log(value);
			});
		}
			
		clearRegionCd() {
			cy.get("input[name='RegionCd']").clear();
		}
setValueDirNm(value) {
			cy.get("input[name='DirNm']").type(value);
		}
			
		getValueDirNm() {
			cy.get("input[name='DirNm']")
			   .invoke("val")
			   .then((value) => {
			      cy.log(value);
			});
		}
			
		clearDirNm() {
			cy.get("input[name='DirNm']").clear();
		}
	clickBtnClose() {
    	cy.get("button[name='BtnClose']").click();
  	}

  	clickBtnSubmit() {
    	cy.get("button[name='BtnSubmit']").click();
  	}
}
export default NewRegion;
