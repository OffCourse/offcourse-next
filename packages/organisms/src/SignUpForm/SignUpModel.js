import schemata from "./schemata";

class SignUpModel {
  static schemata = schemata;

  constructor({ userName = "" } = {}) {
    this.userName = userName;
    this.email = "";
    this.password = "";
    this.confirmationCode = "";
  }
}

export default SignUpModel;
