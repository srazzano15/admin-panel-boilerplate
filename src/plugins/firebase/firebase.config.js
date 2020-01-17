import Firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAwGuMFPd_NAiaDXZSNgW4ZfJkWUiqyun4",
  authDomain: "admin-panel-boilerplate.firebaseapp.com",
  databaseURL: "https://admin-panel-boilerplate.firebaseio.com",
  projectId: "admin-panel-boilerplate",
  storageBucket: "admin-panel-boilerplate.appspot.com",
  messagingSenderId: "942386533713",
  appId: "1:942386533713:web:0dc81492fb7eefd37f2f70",
  measurementId: "G-VNXCD8HM36"
};

export default Firebase.initializeApp(firebaseConfig);
