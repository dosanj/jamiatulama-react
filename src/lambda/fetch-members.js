import { getFireBase } from "./firebase/setup-firebase";
export async function handler(event, context) {
  const db = getFireBase().firestore();
  try {
    const membersRef = db.collection("members");
    const snapshot = await membersRef.get();
    const members = [];
    snapshot.forEach((doc) => members.push(doc.data()));
    return {
      statusCode: 200,
      body: JSON.stringify({
        type: "success",
        data: members,
      }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
  }
}
