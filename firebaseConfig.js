import { initializeApp, getApps } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQnE5FeS1N5bDiYpr5TjKmrg-WXkmVyMM",
  authDomain: "fir-2024-72255.firebaseapp.com",
  projectId: "fir-2024-72255",
  storageBucket: "fir-2024-72255.appspot.com",
  messagingSenderId: "486828788885",
  appId: "1:486828788885:web:04bb89e9f0e018b1951f9c",
  measurementId: "G-624LEVD5BD",
};

// Initialize Firebase app only if it hasn’t been initialized already
const apps = getApps();
const app = apps.length === 0 ? initializeApp(firebaseConfig) : apps[0];

// Initialize Firebase Authentication with persistence (only once)
const auth = getAuth(app);

export const signUpWithEmailPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signInWithEmailPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error(error.message);
  }
};

export { auth };
