import ppmLogin from "../../pages/ppm/PPMLogin";
import PPMRequestCreate from "../../pages/ppm/PPMRequestCreate";

describe("Prueba Login PPM", () => {
  const ppmLog = new ppmLogin();
  const ppmReCreate = new PPMRequestCreate();

  it("Probar input", () => {
    ppmLog.goToSite();
    ppmLog.setValueFieldUsername("raquell.martinez");
    ppmLog.setValueFieldPassword("RqLzM-26");
    // ppmLog.selectItemFieldLanguage(1);
    ppmLog.checkFieldRememberme0();
    ppmLog.clickLabelLogonSubmitButtonCaption();
    ppmReCreate.goToSite();
    // ppmReCreate.setValueReqAssignedToUserIdacTf("Raquel");
    // ppmReCreate.selectItemReqPTipoReq("Acciones en Proyectos");
    // ppmReCreate.setValueReqPSolicitadoacTf("Lizue");
    // ppmReCreate.setValueReqPProjectacTf("123456");
    ppmReCreate.setValueReqPCustomer("IMSS");
    ppmReCreate.setValueReqPNombreProyecto("Prueba nombre proyecto");
  });
});
