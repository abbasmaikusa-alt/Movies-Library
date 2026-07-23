import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {

apiKey: "AIzaSyBsM33urF805efXhUx-sViVfFXd031rU70",

authDomain: "movies-def16.firebaseapp.com",

projectId: "movies-def16",

storageBucket: "movies-def16.firebasestorage.app",

messagingSenderId: "615191164892",

appId: "1:615191164892:web:5fca68daa3982245e9c119"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);