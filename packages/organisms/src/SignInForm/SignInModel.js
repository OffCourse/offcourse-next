import schemata from "./schemata";

class SignInModel {
  static schemata = schemata;

  constructor({ userName = "" } = {}) {
    this.userName = userName;
    this.password = "";
  }
}

export default SignInModel;
