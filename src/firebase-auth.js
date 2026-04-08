import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBcu_s1JW0MogS5kpYmrJSaxtUU8sHKIWk",
  authDomain: "onlinetickets-c8df8.firebaseapp.com",
  projectId: "onlinetickets-c8df8",
  storageBucket: "onlinetickets-c8df8.firebasestorage.app",
  messagingSenderId: "588473662084",
  appId: "1:588473662084:web:bcf2747d4d5704c41d60d1",
  measurementId: "G-YKG1RY1D15"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 
export const analytics = getAnalytics(app);
export const db = getFirestore(app); 

export default app;