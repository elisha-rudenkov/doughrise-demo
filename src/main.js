import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from 'firebase/functions';
import { getAuth, onAuthStateChanged } from "firebase/auth";
//const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");
import firebase from 'firebase/compat/app';





const firebaseConfig = {
    apiKey: "AIzaSyB7Empr_vFYZGy0d3w6yQxgU0yQKoS5jik",
    authDomain: "doughrise.elisharudenkov.com",
    projectId: "apexfilm-4a78c",
    storageBucket: "apexfilm-4a78c.appspot.com",
    messagingSenderId: "902721874662",
    appId: "1:902721874662:web:358250767255e999076927",
    measurementId: "G-S05RKPTDR2"
};

if (process.env.NODE_ENV == 'development') {

    window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;

}

const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const functions = getFunctions(app);
const auth = getAuth(app);
/* const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('RECAPTCHA_KEY'),
    isTokenAutoRefreshEnabled: true
}); */


let vue_app;

onAuthStateChanged(auth, (user) => {
    if (!vue_app) {
        console.log("USR:  " + user);

        vue_app = createApp(App).use(store).use(router).mount("#app");


    }
})

export { app, db, analytics, functions, auth, firebase };

