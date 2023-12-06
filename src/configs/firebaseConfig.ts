// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseOptions, FirebaseApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig: FirebaseOptions = {
	apiKey: "AIzaSyDt1SjIrsz4wZKRiF_DmYRfYYpVaLS728E",
	authDomain: "industry-user.firebaseapp.com",
	projectId: "industry-user",
	storageBucket: "industry-user.appspot.com",
	messagingSenderId: "298111990920",
	appId: "1:298111990920:web:b77f673cedebfb6af3b33d",
	measurementId: "G-CPQ60ZR58M",
};

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);

// Get the auth data for our application
export const auth = getAuth(app);

// export the googleProvider API
export const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();

// Export the Firebase firestore instance
export const database: Firestore = getFirestore(app);
