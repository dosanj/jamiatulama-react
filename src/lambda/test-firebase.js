// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

import axios from "axios";
import admin from "firebase-admin";

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
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://jamiatulama-solapur.firebaseio.com",
});

export async function handler(event, context) {
  console.log(serviceAccount);
  try {
    const response = await axios.get("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" },
    });
    const data = response.data;
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data.joke }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: process.env.TEST }), // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
