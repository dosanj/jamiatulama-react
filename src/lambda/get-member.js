import { getFireBase } from "./firebase/setup-firebase";
export async function handler(event, context) {
  const db = getFireBase().firestore();
  const { phoneNumber } = JSON.parse(event.body);
  try {
    const membersRef = db.collection("members");
    const snapshot = await membersRef
      .where("phoneNumber", "==", phoneNumber)
      .limit(1)
      .get();
    const members = [];
    snapshot.forEach((doc) => members.push(doc.data()));
    const match = members.length ? members[0] : {};
    console.log(match);
    return {
      statusCode: 200,
      body: JSON.stringify({
        type: "success",
        data: match,
      }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
  }
}
