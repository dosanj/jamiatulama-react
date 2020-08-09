// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import React, { useState } from "react";
import "react-phone-input-2/lib/material.css";
import { IUserDetails } from "../models/components.props";
import { BecomeMemberForm } from "./BecomeMemberForm";
import { VerifyCode } from "./VerifyCode";

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
  const [error, setError] = useState(null as any);

  const updateBackendWithMemberDetail = async () => {
    return fetch("/.netlify/functions/add-member", {
      method: "POST",
      body: JSON.stringify(
        details ? { ...details, phoneNumber: details.phoneNumber.value } : {}
      ),
    });
  };

  const verifyCode = () => {
    (window as any).confirmationResult
      .confirm(code)
      .then((result: any) => {
        setCurrentUser(details);
        setIsNewUser(result.additionalUserInfo.isNewUser);
        updateBackendWithMemberDetail();
      })
      .catch((error: any) => {
        setError(error);
      });
  };

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
      {process.env.TEST}
      {codeSent ? verifyCodeTemplate() : getDetailsTemplate()}
    </div>
  );
}
