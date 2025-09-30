/* eslint-disable no-undef */
// // src/firebase.js
// /* eslint-env node */
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";
import { collection, addDoc, getDocs } from "@firebase/firestore";

// Load environment variables in Node.js only
// for add-data
// if (typeof process !== "undefined" && process.versions?.node) {
//   const { config } = await import("dotenv");
//   config();
// }

// // Use import.meta.env for Vite, process.env for Node.js
// const env = typeof import.meta !== "undefined" && import.meta.env ? import.meta.env : process.env;

let env = typeof import.meta !== "undefined" && import.meta.env ? import.meta.env : process.env;
if (typeof process !== "undefined" && process.versions?.node) {
  try {
    // Use dynamic import without await at top level
    import("dotenv").then(({ config }) => {
      config();
      // Update env after loading dotenv
      env = process.env;
    });
  } catch (e) {
    console.error("Failed to load dotenv:", e);
  }
}

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Log config for debugging (remove in production)
console.log("Firebase Config:", firebaseConfig);

// Initialize or retrieve Firebase app
let app;
try {
  app = getApp("portfolio-app");
} catch (e) {
  if (e.code === "app/no-app") {
    app = initializeApp(firebaseConfig, "portfolio-app");
  } else {
    throw e;
  }
}

const db = getFirestore(app);
const storage = getStorage(app);

let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, storage, analytics, collection, addDoc, getDocs };



// // src/firebase.js
// /* eslint-env node */
// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAnalytics, isSupported } from "firebase/analytics";
// import { collection, addDoc, getDocs } from "@firebase/firestore";

// // Load dotenv only in Node.js, without top-level await
// let env = typeof import.meta !== "undefined" && import.meta.env ? import.meta.env : process.env;
// if (typeof process !== "undefined" && process.versions?.node) {
//   try {
//     // Use dynamic import without await at top level
//     import("dotenv").then(({ config }) => {
//       config();
//       // Update env after loading dotenv
//       env = process.env;
//     });
//   } catch (e) {
//     console.error("Failed to load dotenv:", e);
//   }
// }

// const firebaseConfig = {
//   apiKey: env.VITE_FIREBASE_API_KEY,
//   authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: env.VITE_FIREBASE_APP_ID,
//   measurementId: env.VITE_FIREBASE_MEASUREMENT_ID,
// };

// // Log config for debugging (remove in production)
// console.log("Firebase Config:", firebaseConfig);

// // Initialize or retrieve Firebase app
// let app;
// try {
//   app = getApp("portfolio-app");
// } catch (e) {
//   if (e.code === "app/no-app") {
//     app = initializeApp(firebaseConfig, "portfolio-app");
//   } else {
//     throw e;
//   }
// }

// const db = getFirestore(app);
// const storage = getStorage(app);

// let analytics = null;
// if (typeof window !== "undefined") {
//   isSupported().then((supported) => {
//     if (supported) {
//       analytics = getAnalytics(app);
//     }
//   });
// }

// export { app, db, storage, analytics, collection, addDoc, getDocs };