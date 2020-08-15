import { getFireBase } from "./firebase/setup-firebase";
const db = getFireBase("add-member").firestore();
export async function handler(event, context) {
  try {
    const member = JSON.parse(event.body);
    if (Object.keys(member).length) {
      const membersRef = db.collection("members");
      const snapshot = await membersRef
        .where("phoneNumber", "==", member.phoneNumber)
        .limit(1)
        .get();
      if (!snapshot.length) {
        await membersRef.add(member);
        return {
          statusCode: 200,
          body: JSON.stringify({
            type: "success",
            message: "Member got added to database",
          }),
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify({
          type: "success",
          message: "Member is already part of database",
        }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({
        type: "error",
        msg: "Please provide valid details",
      }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
  }
}
