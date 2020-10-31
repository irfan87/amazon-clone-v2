import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDfUltkWiY0LNDY7zEcsT058nPJff6y49U",
	authDomain: "clone-v2-c67f8.firebaseapp.com",
	databaseURL: "https://clone-v2-c67f8.firebaseio.com",
	projectId: "clone-v2-c67f8",
	storageBucket: "clone-v2-c67f8.appspot.com",
	messagingSenderId: "464794222677",
	appId: "1:464794222677:web:6ff1ed98eb0a81e60dd4dc",
	measurementId: "G-0R0M6E1D8E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
