class JiraMethods {
  createBug(summary) {
    cy.request({
      method: "POST",
      url: "https://raquelizue.atlassian.net/rest/api/2/issue",
      headers: {
        Authorization:
          "Basic cmFxdWVsaXp1ZUBvdXRsb29rLmVzOlRjQURJejJCSndmVncxZmpwclp5OUVDNQ==",
        "User-Agent": "test-agent",
        "Content-Type": "application/json",
      },
      body: {
        fields: {
          project: {
            key: "ET3",
          },
          summary: summary,
          description:
            "Este bug fue creado automáticamente desde un test de Cypress",
          issuetype: {
            name: "Bug",
          },
        },
      },
    }).then((response) => {
      console.log("Hola");
      console.log(response);
    });
  }
}
export default JiraMethods;
