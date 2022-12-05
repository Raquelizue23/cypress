class LinkDownload {
  goToLinkDownloadSite() {
    cy.visit("https://the-internet.herokuapp.com/download");
  }

  getSomeFile() {
    cy.contains("some-file.txt").click();
  }
}
export default LinkDownload;
