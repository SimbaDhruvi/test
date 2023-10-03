import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAiQZBlJZTtD4NtQ-fG9uQCS9Eu7KkejAM",
    authDomain: "simba-d5637.firebaseapp.com",
    databaseURL: "https://simba-d5637-default-rtdb.firebaseio.com",
    projectId: "simba-d5637",
    storageBucket: "simba-d5637.appspot.com",
    messagingSenderId: "964263424821",
    appId: "1:964263424821:web:bca527260923acd638527c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;