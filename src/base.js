import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAcOm3SFdx_LjqFTbv2oDf5pP3-WXE8mDY",
  authDomain: "react-for-begginers-63d4d.firebaseapp.com",
  databaseURL: "https://react-for-begginers-63d4d.firebaseio.com",
  projectId: "react-for-begginers-63d4d",
  storageBucket: "react-for-begginers-63d4d.appspot.com",
  messagingSenderId: "297138924417",
};

const app = firebase.initializeApp(config);

const base = Rebase.createClass(app.database());

export { base };
