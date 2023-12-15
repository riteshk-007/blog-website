import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-42c9f.firebaseapp.com",
  projectId: "blog-42c9f",
  storageBucket: "blog-42c9f.appspot.com",
  messagingSenderId: "72437094133",
  appId: "1:72437094133:web:4f840f31065d2d4dc457bc",
};

export const app = initializeApp(firebaseConfig);
