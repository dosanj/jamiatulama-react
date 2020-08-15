import { getFireBase } from "./firebase/setup-firebase";
const db = getFireBase("fetch-members").firestore();
export async function handler(event, context) {
  try {
    const membersRef = db.collection("members");
    const snapshot = await membersRef.get();
    const members = [];
    snapshot.forEach((doc) => members.push(doc.data()));
    return {
      statusCode: 200,
      body: JSON.stringify({
        members,
        type: "success",
      }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
  }
}
