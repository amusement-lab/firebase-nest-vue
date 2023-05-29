import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

import firebaseConfig from "../../firebaseWeb.config.js";

// Init firebase
initializeApp(firebaseConfig);

// Setup firebase
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
provider.addScope("https://www.googleapis.com/auth/userinfo.email");
provider.addScope("openid");

export { auth,  provider };
