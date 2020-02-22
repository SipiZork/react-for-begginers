import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp  = firebase.initializeApp({
  apiKey: "AIzaSyAcOm3SFdx_LjqFTbv2oDf5pP3-WXE8mDY",
  authDomain: "react-for-begginers-63d4d.firebaseapp.com",
  databaseURL: "https://react-for-begginers-63d4d.firebaseio.com",
  projectId: "react-for-begginers-63d4d",
  storageBucket: "react-for-begginers-63d4d.appspot.com",
  messagingSenderId: "297138924417",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
