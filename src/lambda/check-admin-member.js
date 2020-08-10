import { getFireBase } from "./firebase/setup-firebase";
export async function handler(event, context) {
  const db = getFireBase().firestore();
  const { email } = JSON.parse(event.body);
  try {
    const membersRef = db.collection("admins");
    const snapshot = await membersRef
      .where("email", "==", email)
      .limit(1)
      .get();
    const members = [];
    snapshot.forEach((doc) => members.push(doc.data()));
    return {
      statusCode: 200,
      body: JSON.stringify({
        type: "success",
        admin: !!members.length,
      }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
  }
}
