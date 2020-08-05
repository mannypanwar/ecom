import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCJvIsgHqq1M1-SvxHtmvzpPC7SfaTpU94",
  authDomain: "crown-db-5e2bb.firebaseapp.com",
  databaseURL: "https://crown-db-5e2bb.firebaseio.com",
  projectId: "crown-db-5e2bb",
  storageBucket: "crown-db-5e2bb.appspot.com",
  messagingSenderId: "824522672712",
  appId: "1:824522672712:web:5a1ddb02ba0d9b9c01e67d",
  measurementId: "G-7674JLM73P",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
