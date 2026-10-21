const admin = require("firebase-admin");
const fs = require("fs");
const path = require("path");

const requiredConfig = [
  "FIREBASE_PROJECT_ID",
  "FIREBASE_CLIENT_EMAIL",
  "FIREBASE_PRIVATE_KEY",
];

const hasEnvironmentConfig = requiredConfig.every((name) => process.env[name]);
const localCredentialsPath = path.join(
  __dirname,
  "..",
  "kanban-board-eb784-firebase-adminsdk-fbsvc-76476fbadf.json"
);

if (!hasEnvironmentConfig && !fs.existsSync(localCredentialsPath)) {
  const missingConfig = requiredConfig.filter((name) => !process.env[name]);
  throw new Error(
    `Missing Firebase configuration: ${missingConfig.join(", ")}`
  );
}

const serviceAccount = hasEnvironmentConfig
  ? {
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }
  : require(localCredentialsPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
