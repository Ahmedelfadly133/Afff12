
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3SmzjOimEvoHFRG_Hn4XBd4x0ajYdAN8",
  authDomain: "af1-sales-mentor.firebaseapp.com",
  projectId: "af1-sales-mentor",
  storageBucket: "af1-sales-mentor.firebasestorage.app",
  messagingSenderId: "1061083784212",
  appId: "1:1061083784212:web:c3983bcca592750074b301",
  measurementId: "G-BN3B6CTHDR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
