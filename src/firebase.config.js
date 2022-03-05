import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCu1yGIRCrYnadnE7a5KhEhP62MEsAemkQ",
  authDomain: "house-marketplace-app-e3a16.firebaseapp.com",
  projectId: "house-marketplace-app-e3a16",
  storageBucket: "house-marketplace-app-e3a16.appspot.com",
  messagingSenderId: "221273029997",
  appId: "1:221273029997:web:c96bbf0446f2d8d270ae64",
  measurementId: "G-DCZBGPBF8E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
