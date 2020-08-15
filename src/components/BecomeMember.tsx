import React, { useState } from "react";
import "react-phone-input-2/lib/material.css";
import { IUserDetails } from "../models/components.props";
import { BecomeMemberForm } from "./BecomeMemberForm";
import { VerifyCode } from "./VerifyCode";
import { getFireBaseApp } from "../services/firebase-service";
import axios from "axios";
const firebase = getFireBaseApp();

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
    const body = details
      ? { ...details, phoneNumber: details.phoneNumber.value }
      : {};

    return axios.post("/.netlify/functions/add-member", body);
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
