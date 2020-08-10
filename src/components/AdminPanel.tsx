import React, { useState } from "react";
import { getFireBaseApp } from "../services/firebase-service";
import * as firebase from "firebase/app";
getFireBaseApp();
export function AdminPanel() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState((null as unknown) as firebase.UserInfo);
  const [isAdmin, setIsAdmin] = useState(false);
  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(async function (result: any) {
        const user = firebase.auth().currentUser;
        if (user != null && user.providerData?.length) {
          const [profile] = user.providerData;
          if (profile) {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
            setUser(profile);
            const { admin } = await fetch(
              "/.netlify/functions/check-admin-member",
              {
                method: "POST",
                body: JSON.stringify({ email: profile.email }),
              }
            ).then((response) => response.json());
            setIsAdmin(admin);
          }
        }
      })
      .catch(function (error) {
        setError(error);
      });
  };
  if (error) {
    return <div>Error in Signing with Google</div>;
  }
  if (user) {
    if (isAdmin) {
      return <div>You're signed in as an Admin</div>;
    } else {
      return <div>You are not an admin</div>;
    }
  }
  return (
    <div className="google-signin">
      <button
        className="google-signin-button"
        onClick={(e) => signInWithGoogle()}
      >
        <img
          width="20px"
          alt="Google sign-in"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
        />
        Login with Google
      </button>
    </div>
  );
}
