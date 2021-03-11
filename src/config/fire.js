import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAzuW-r1CEBTyhbs_owOkaII0xHzlzXgKQ",
    authDomain: "movies-web-23.firebaseapp.com",
    projectId: "movies-web-23",
    storageBucket: "movies-web-23.appspot.com",
    messagingSenderId: "182924158824",
    appId: "1:182924158824:web:030d7a86d6bf2c213758dd",
    measurementId: "G-1NRFHR9H4D"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;