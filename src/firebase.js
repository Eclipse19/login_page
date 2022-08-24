import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_E6IBPmIJW8wO8W_DN7M1uUNGb-70RmI",
  authDomain: "campus-studio-3d239.firebaseapp.com",
  projectId: "campus-studio-3d239",
  storageBucket: "campus-studio-3d239.appspot.com",
  messagingSenderId: "42320511159",
  appId: "1:42320511159:web:16c9ca920197d414980d32",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
