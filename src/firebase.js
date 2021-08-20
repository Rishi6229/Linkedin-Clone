import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAiNRpp6kCFNfhMjOLPqHsNapO43jHZWlU",
    authDomain: "linkedin-clone-yt-fa1e6.firebaseapp.com",
    projectId: "linkedin-clone-yt-fa1e6",
    storageBucket: "linkedin-clone-yt-fa1e6.appspot.com",
    messagingSenderId: "534722759141",
    appId: "1:534722759141:web:64c5d20753d552c910070c",
    measurementId: "G-D6RPM0LDMC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};
  