import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATM13eUTu_dxb7HVsuztzwHt-nLqO_0a4",
  authDomain: "paper-trading-38d7a.firebaseapp.com",
  projectId: "paper-trading-38d7a",
  storageBucket: "paper-trading-38d7a.appspot.com",
  messagingSenderId: "1001224403196",
  appId: "1:1001224403196:web:990427e550ec1f40feff79",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
