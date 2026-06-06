  const admin = require("firebase-admin");

  const serviceAccount = require('../kanban-board-eb784-firebase-adminsdk-fbsvc-76476fbadf.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  module.exports = admin;