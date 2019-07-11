import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var firebaseConfig = {
  apiKey: "AIzaSyAIC4ngeq4IJMS-36x_IZOl5l_8toDzZSI",
  authDomain: "alfred-maurya.firebaseapp.com",
  databaseURL: "https://alfred-maurya.firebaseio.com",
  projectId: "alfred-maurya",
  storageBucket: "alfred-maurya.appspot.com",
  messagingSenderId: "372533636323",
  appId: "1:372533636323:web:092c970d6a25b569"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 