import schemata from "./schemata";

class PasswordRetrievalModel {
  static schemata = schemata;

  constructor({ userName = "" } = {}) {
    this.userName = userName;
    this.confirmationCode = "";
    this.password = "";
  }
}

export default PasswordRetrievalModel;
