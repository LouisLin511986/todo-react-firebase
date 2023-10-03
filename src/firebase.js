import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4hYJ5V3tD0XMFD-QtOijDO_3iOwQKjEQ",
  authDomain: "todo-react-firebase-1a17b.firebaseapp.com",
  projectId: "todo-react-firebase-1a17b",
  storageBucket: "todo-react-firebase-1a17b.appspot.com",
  messagingSenderId: "1053703561549",
  appId: "1:1053703561549:web:e749c859726acd4332d704"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db }