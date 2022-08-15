import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "ap-southeast-1_xZMHCYVUS",
    ClientId: "6ko73e53jh15inl91sibpkgpul"
}

export default new CognitoUserPool(poolData);