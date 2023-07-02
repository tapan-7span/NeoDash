// AuthService.js

import { generateRandomString } from "@/Utilities/other.js";
import PackageJson from "../../package.json";
import { useToast } from "vue-toastification";
const toast = useToast();

class AuthService {
  login(Data) {
    const encypted = atob(Data);
    if (encypted == "×mø") {
      const Token1 = generateRandomString(25);
      const Token2 = generateRandomString(21);
      const userJson = JSON.stringify(Token1 + encypted + Token2);
      localStorage.setItem("UT-Data", userJson);
      return true;
    } else {
      return false;
    }
  }

  // Incomplte Logout Logic
  logout() {
    const processStep = this.checkToken();
    if (processStep) {
      localStorage.removeItem("UT-Data");
      return true;
    }
  }

  isAuthenticated() {
    const response = this.checkToken();
    if (response) {
      return true;
    } else {
      return false;
    }
  }

  checkToken(str) {
    if (str) {
      const trimmedStr = str.slice(25, -21);
      const encodedPassword = btoa(trimmedStr);
      if (encodedPassword == 1234) return true;
      else return false;
    } else {
      const getFromStore = JSON.parse(localStorage.getItem("UT-Data"));
      if (getFromStore) {
        const trimmedData = getFromStore.slice(25, -21);
        const encodedPassword = btoa(trimmedData);
        if (encodedPassword == 1234) {
          return true;
        } else {
          localStorage.removeItem("UT-Data");
          return false;
        }
      } else return false;
    }
  }

  checkLocalVersion() {
    const LocalVersion = localStorage.getItem("Version");
    if (LocalVersion) {
      return LocalVersion;
    } else {
      return false;
    }
  }
  checkNewVersion() {
    const LocalVersion = localStorage.getItem("Version");
    const ProjectVersion = PackageJson.version;
    if (LocalVersion == ProjectVersion) {
      return {
        res: true,
        version: ProjectVersion,
      };
    } else {
      localStorage.setItem("Version", ProjectVersion);
      return {
        res: false,
        version: ProjectVersion,
      };
    }
  }
}

export default new AuthService();
