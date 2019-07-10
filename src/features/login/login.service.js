import axios from "axios";
import { BASE_URL_USER_SERVICE } from "../../constants/api.constants";
import Log from "../../common/logging/log";

class LoginService {
  performLogin = payload => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${BASE_URL_USER_SERVICE}/auth/login`, { ...payload })
        .then(success => {
          Log.info("login sucessfull, " + success);
          this.storeProfileDetails(success.data.data);
          resolve();
        })
        .catch(error => {
          Log.info("login failed " + error);
          alert("login failed", error);
          reject(error);
        });
    });
  };
  storeProfileDetails = response => {
    Log.info(response);
    //store auth token, store role, store profule
  };
}

export default LoginService;
