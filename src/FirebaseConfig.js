// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS5zj1kuRd2t3p7588HFk7uDnWQm5oxhE",
  authDomain: "ptswebsite-16219.firebaseapp.com",
  databaseURL: "https://ptswebsite-16219-default-rtdb.firebaseio.com",
  projectId: "ptswebsite-16219",
  storageBucket: "ptswebsite-16219.appspot.com",
  messagingSenderId: "53527251557",
  appId: "1:53527251557:web:1a699c8a505612ac7b548c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;