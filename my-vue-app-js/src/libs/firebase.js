import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  getRedirectResult,
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

// Method list
const login = () => signInWithRedirect(auth, provider);

const getLoginUser = (cb = () => {}) =>
  onAuthStateChanged(auth, (user) => {
    cb(user);
  });

const logout = (cb = () => {}) => {
  signOut(auth).then(() => {
    cb();
  });
};

const redirectResult = (cbRedirect) => {
  getRedirectResult(auth).then((result) => {
    if (result) {
      cbRedirect(auth);
    }
  });
};

export { login, getLoginUser, logout, redirectResult, auth, signOut };
