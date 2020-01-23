import firebase from "firebase"
var Config = {
  apiKey: "AIzaSyAYMF_P4QVWhFzAHxqvUJquASDv74cjC_Y",
  authDomain: "todolistreact-23b8e.firebaseapp.com",
  databaseURL: "https://todolistreact-23b8e.firebaseio.com",
  projectId: "todolistreact-23b8e",
  storageBucket: "todolistreact-23b8e.appspot.com",
  messagingSenderId: "366478014488",
  appId: "1:366478014488:web:333ab9bb156bc2673c6b6d"
};
export const fire = firebase.initializeApp(Config)
export const storage = fire.storage();

