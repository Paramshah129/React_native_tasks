import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyD9Ni_m_8CplBLf9kZvSc7s8j_eEouo6QY",
  authDomain: "uc-app1.firebaseapp.com",
  projectId: "uc-app1",
  storageBucket: "uc-app1.firebasestorage.app",
  messagingSenderId: "705009714772",
  appId: "1:705009714772:web:9a6b399b456ad401004fc1",
  measurementId: "G-YN8QS186BJ"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);