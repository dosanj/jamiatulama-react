import { getFireBase } from "./firebase/setup-firebase";
export async function handler(event, context) {
  const db = getFireBase().firestore();
  try {
    const member = JSON.parse(event.body);
    if (Object.keys(member).length) {
      await db.collection("members").add(member);
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
        type: "error",
        msg: "Please provide valid details",
      }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
  }
}
