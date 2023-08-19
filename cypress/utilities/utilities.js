const csv = require("csv-parser");
const fs = require("fs");

class Utilities {
  getObjData() {
    return new Promise((resolve, reject) => {
      const jsonArray = [];
      cy.fixture("data.csv").then((csvContent) => {
        const lines = csvContent.split("\n");
        lines.pop();
        const headers = lines[0].split(",");
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(",");
          const jsonObject = {};
          for (let j = 0; j < headers.length; j++) {
            jsonObject[
              headers[j].replace(/\r/g, "").replace(/"/g, "").replace(/\s/g, "")
            ] = values[j].replace(/\r/g, "");
          }
          jsonArray.push(jsonObject);
        }
        resolve(jsonArray);
      });
    });
  }
}
export default Utilities;
