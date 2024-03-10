const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APPID,
};
console.log(process.env.FIREBASE_API_KEY);
const app = initializeApp(firebaseConfig);
module.exports = app;

// let firestoreDB;
// let app;

// const initializeFirebaseApp = () => {
//   try {
//     app = initializeApp(firebaseConfig);
//     firestoreDB = getFirestore();
//     return app;
//   } catch (error) {
//     console.log("Error initializing Firebase App: ", error);
//   }
// };

// const uploadProcessedData = async () => {
//   const dataToUpload = {
//     name: "Tokyo",
//     country: "Japan",
//   };

//   try {
//     const document = doc(firestoreDB, "dins", "myDin");
//     let dataUpdated = await setDoc(document, dataToUpload);
//   } catch (error) {
//     console.log("Error uploading data: ", error);
//   }
// };

// const getFirebaseApp = () => app;

// module.exports = {
//   initializeApp,
//   initializeFirebaseApp,
//   uploadProcessedData,
// };
