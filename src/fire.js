import firebase from 'firebase';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBeYsk3IxNx0uIh6KuVBeYLm5mnhiPgNys",
    authDomain: "fieldnotesmanager.firebaseapp.com",
    databaseURL: "https://fieldnotesmanager.firebaseio.com",
    projectId: "fieldnotesmanager",
    storageBucket: "fieldnotesmanager.appspot.com",
    messagingSenderId: "448676250268",
    appId: "1:448676250268:web:6086a39ade10d3de3e2359"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
export default fire;