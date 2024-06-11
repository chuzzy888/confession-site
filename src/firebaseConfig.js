import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBfFhsNAfWQeVAy8lghEc6QDBXNuvZwB7w",
    authDomain: "unburden-2be77.firebaseapp.com",
    projectId: "unburden-2be77",
    storageBucket: "unburden-2be77.appspot.com",
    messagingSenderId: "980284511534",
    appId: "1:980284511534:web:6a6f350f0f92d4fec216bf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
