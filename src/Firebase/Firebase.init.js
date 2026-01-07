import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWIvTGXYdc_-WCXTyOpDfLVRiibX5qt6M",
  authDomain: "gamehub-db6d4.firebaseapp.com",
  projectId: "gamehub-db6d4",
  storageBucket: "gamehub-db6d4.firebasestorage.app",
  messagingSenderId: "325593200956",
  appId: "1:325593200956:web:a1e5e8c091f9f3bbb2c639",
  measurementId: "G-JGKP6J01XJ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
