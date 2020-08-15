import React, { useState } from "react";
import { getFireBaseApp } from "../../services/firebase-service";
import * as firebase from "firebase/app";
import axios from "axios";
import { AdminPanel } from "./AdminPanel";
// const testAdmin = {
//   displayName: "Javed Dosani",
//   email: "javeddosani2011@gmail.com",
//   phoneNumber: null,
//   providerId: "google.com",
//   uid: "102270563813599047746",
// };
getFireBaseApp(); // setup firebase app
export function Manage() {
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
          // const profile = testAdmin as firebase.UserInfo;
          if (profile) {
            const { admin } = await axios
              .post("/.netlify/functions/check-admin-member", {
                email: profile.email,
              })
              .then(({ data }) => data);
            setUser(profile);
            setIsAdmin(admin);
          }
        }
      })
      .catch(function (error) {
        setError(error);
      });
  };
  if (error) {
    return <div className="d-flex m-auto">Error in Signing with Google</div>;
  }
  if (user) {
    if (isAdmin) {
      return <AdminPanel />;
    } else {
      return <div className="d-flex m-auto">You are not an admin</div>;
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
