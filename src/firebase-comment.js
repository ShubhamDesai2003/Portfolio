import { initializeApp, getApps, getApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, getDocs } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPsUJENSE6O6-jlD0DWRAOuZAtqTDN_V0",
  authDomain: "portfolio-e8cb6.firebaseapp.com",
  projectId: "portfolio-e8cb6",
  storageBucket: "portfolio-e8cb6.firebasestorage.app",
  messagingSenderId: "435143368324",
  appId: "1:435143368324:web:84d565baf4ddd5b402ecd1",
  measurementId: "G-7Q7N3J4W4G"
};

// Initialize primary Firebase app
// const app = initializeApp(firebaseConfig, "portfolio-app");
const app = getApps().length === 0 ? initializeApp(firebaseConfig, "portfolio-app") : getApp("portfolio-app");
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

// Initialize secondary app for comments (without Analytics)
const commentsApp = initializeApp(firebaseConfig, "comments-app");
const commentsDb = getFirestore(commentsApp);
const commentsStorage = getStorage(commentsApp);

export { 
  app, 
  db, 
  storage, 
  analytics, 
  commentsApp, 
  commentsDb, 
  commentsStorage, 
  collection, 
  addDoc, 
  getDocs 
};
