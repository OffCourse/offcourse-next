import {
  AuthenticationDetails,
  CognitoUserAttribute,
  CognitoUser,
  CognitoUserPool
} from "amazon-cognito-identity-js";

class Cognito {
  constructor({ UserPoolId, ClientId }) {
    this.userPool = new CognitoUserPool({
      UserPoolId,
      ClientId
    });
  }

  signOut = async () => {
    console.log(cognitoUser);
    await cognitoUser.signOut();
  };

  resetPassword = async ({ userName }) => {
    const cognitoUser = new CognitoUser({
      Username: userName,
      Pool: this.userPool
    });
    const errorResponses = {
      LimitExceededException: {
        general: "You tried too many times, wait a bit..."
      },
      UserNotFoundException: { userName: "Unknown User Name" }
    };
    return new Promise((resolve, reject) => {
      cognitoUser.forgotPassword({
        onSuccess: resolve,
        onFailure: error => {
          console.log(error);
          reject(errorResponses[error.name]);
        }
      });
    });
  };

  confirmNewPassword = async ({ userName, password, confirmationCode }) => {
    const cognitoUser = new CognitoUser({
      Username: userName,
      Pool: this.userPool
    });

    const errorResponses = {};

    return new Promise((resolve, reject) => {
      cognitoUser.confirmPassword(confirmationCode, password, {
        onSuccess: resolve,
        onFailure: error => {
          console.log(error);
          reject({ confirmationCode: "invalid confirmation code" });
        }
      });
    });
  };

  signUp = ({ userName, password, email }) => {
    const dataEmail = {
      Name: "email",
      Value: email
    };
    const attributeEmail = new CognitoUserAttribute(dataEmail);
    const attributeList = [attributeEmail];

    const errorResponses = {
      UsernameExistsException: {
        userName: "user name is taken"
      }
    };

    return new Promise((resolve, reject) => {
      this.userPool.signUp(
        userName,
        password,
        attributeList,
        null,
        (error, result) => {
          if (error) {
            console.log(error);
            reject(errorResponses[error.name]);
            return;
          }
          return resolve(result);
        }
      );
    });
  };

  confirmSignUp = async ({ userName, confirmationCode }) => {
    const cognitoUser = new CognitoUser({
      Username: userName,
      Pool: this.userPool
    });

    return new Promise((resolve, reject) => {
      cognitoUser.confirmRegistration(
        confirmationCode,
        true,
        (error, result) => {
          if (error) {
            console.log(error);
            reject(error);
            return;
          }
          resolve(result);
        }
      );
    });
  };

  signIn = async ({ userName, password }) => {
    const authData = new AuthenticationDetails({
      Username: userName,
      Password: password
    });

    const cognitoUser = new CognitoUser({
      Username: userName,
      Pool: this.userPool
    });

    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authData, {
        onSuccess: ({ accessToken, refreshToken }) => {
          resolve({
            userName: userName,
            accessToken: accessToken.jwtToken,
            refreshToken: refreshToken.token
          });
        },
        onFailure: error => {
          reject({ general: "invalid user name or password" });
        }
      });
    });
  };
}

const cognito = new Cognito({
  UserPoolId: "us-east-1_KrD1aUKhs",
  ClientId: "ga43rgf1nmg1ejbevg375se20"
});

export default cognito;
