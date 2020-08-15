import * as admin from "firebase-admin";
export function getFireBase(name = "default") {
  let serviceAccount = require("./serviceAccountKey.json");
  let localPrivateKey = {};
  try {
    localPrivateKey = require("./local-privatekey.json");
  } catch (e) {
    console.log("Local private key not found, using environment variables");
  }
  serviceAccount = {
    ...serviceAccount,
    private_key_id: process.env.private_key_id,
    private_key: process.env.private_key.replace(/\\n/g, "\n"),
    ...localPrivateKey,
  };
  return admin.initializeApp(
    {
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://jamiatulama-solapur.firebaseio.com",
    },
    name
  );
}
