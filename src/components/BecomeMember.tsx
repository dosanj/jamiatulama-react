// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import React, { useEffect, useState } from "react";
import "react-phone-input-2/lib/material.css";
import { BecomeMemberForm } from "./BecomeMemberForm";
import { VerifyCode } from "./VerifyCode";
import { IUserDetails } from "../models/components.props";

var firebaseConfig = {
  apiKey: "AIzaSyAaB-8OlMJ-gc1hFxya2hTXEww8rppZwXw",
  authDomain: "jamiatulama-solapur.firebaseapp.com",
  databaseURL: "https://jamiatulama-solapur.firebaseio.com",
  projectId: "jamiatulama-solapur",
  storageBucket: "jamiatulama-solapur.appspot.com",
  messagingSenderId: "351010064384",
  appId: "1:351010064384:web:d5258cf2806d522645b0e5",
  measurementId: "G-YP619B0WGR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export function BecomeMember() {
  const [details, setDetails] = useState((null as unknown) as IUserDetails);
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(
    (null as unknown) as IUserDetails
  );
  const [captchaValue, setCaptchValue] = useState("");
  const [error, setError] = useState(null as any);
  async function init() {
    try {
      const response = await fetch("/.netlify/functions/hello").then(
        (response) => {
          return response.json();
        }
      );
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    if (!(window as any).recaptchaVerifier && !codeSent && !currentUser) {
      firebase.auth().useDeviceLanguage();
      (window as any).recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      (window as any).recaptchaVerifier.render().then((widgetId: any) => {
        (window as any).recaptchaWidgetId = widgetId;
      });
      (window as any).recaptchaVerifier.verify().then((token: any) => {
        setCaptchValue(token);
      });
    }
    init();
  });
  const submitButtonClicked = (data: IUserDetails) => {
    let { phoneNumber } = data;
    if (phoneNumber.valid) {
      phoneNumber.value = `+${phoneNumber.value
        .replace(/ /g, "")
        .replace(/-/g, "")}`;
    }

    setDetails(data);
    const appVerifier = (window as any).recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber.value, appVerifier)
      .then((confirmationResult: any) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        (window as any).confirmationResult = confirmationResult;
        (window as any).grecaptcha.reset((window as any).recaptchaWidgetId);
        setCodeSent(true);
        setError(null);
      })
      .catch((error: any) => {
        setError(error);
      });
  };
  const verifyCode = () => {
    (window as any).confirmationResult
      .confirm(code)
      .then((result: any) => {
        // User signed in successfully.
        setIsNewUser(result.additionalUserInfo.isNewUser);
        if (isNewUser || !result.user.displayName) {
          result.user
            .updateProfile({ displayName: details.displayName })
            .then((response: any) => {
              setCurrentUser(details);
              setError(null);
            })
            .catch((error: any) => {
              setError(error);
            });
        }
      })
      .catch((error: any) => {
        setError(error);
      });
  };
  if (currentUser && isNewUser) {
    return (
      <div className="become-member">
        <h1>{currentUser.displayName}, Thanks for registring with us. </h1>
      </div>
    );
  }
  if (currentUser && !isNewUser) {
    return (
      <div className="become-member">
        <h1>{currentUser.displayName}, you are already registered with us.</h1>
      </div>
    );
  }

  const getDetailsTemplate = () => {
    return (
      <BecomeMemberForm
        codeSent={codeSent}
        error={error}
        captchaValue={captchaValue}
        submitButtonClicked={submitButtonClicked}
      />
    );
  };
  const verifyCodeTemplate = () => {
    return (
      <VerifyCode
        code={code}
        setCode={setCode}
        error={error}
        verifyCode={verifyCode}
      />
    );
  };
  return (
    <div className="become-member">
      <h1> Fill in the details</h1>
      {codeSent ? verifyCodeTemplate() : getDetailsTemplate()}
    </div>
  );
}
