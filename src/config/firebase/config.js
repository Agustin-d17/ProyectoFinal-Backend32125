
const admin = require("firebase-admin");

const serviceAccount = require("./backend-32125-firebase-adminsdk-f7uus-21a389f695.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin