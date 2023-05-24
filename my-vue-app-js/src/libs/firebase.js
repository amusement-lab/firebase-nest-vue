import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
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

const getTokenAndRedirect = (cbRedirect) =>
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    user
      .getIdToken()
      .then((token) => {
        cbRedirect();
      })
      .catch((err) => {
        console.log({ messange: "No user login" });
      });
  });

const getToken = async () => {
  const user = auth.currentUser;
  if (user) {
    return await user.getIdToken();
  } else {
    return null;
  }
};

const logout = (cbRedirect) => {
  signOut(auth)
    .then(() => {
      cbRedirect();
    })
    .catch((err) => {
      console.log(err);
    });
};

export { login, getTokenAndRedirect, getToken, logout };
