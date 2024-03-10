var admin = require("firebase-admin");

var serviceAccount = require("./tayo-db-firebase-adminsdk-k9ki1-9a1ceb4563.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { admin, db };
