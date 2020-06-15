import React, { useEffect, useState } from "react";
declare const firebase: any;
export function BecomeMember() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [user, setCurrentUser] = useState(null as any);
  const [error, setError] = useState(null as any);
  console.log(user);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    if (!(window as any).recaptchaVerifier && !codeSent) {
      firebase.auth().useDeviceLanguage();
      (window as any).recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      (window as any).recaptchaVerifier.render().then((widgetId: any) => {
        (window as any).recaptchaWidgetId = widgetId;
      });
    }
  });
  const submitButtonClicked = () => {
    const appVerifier = (window as any).recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult: any) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        (window as any).confirmationResult = confirmationResult;
        (window as any).grecaptcha.reset((window as any).recaptchaWidgetId);
        (window as any).recaptchaVerifier = null;
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
        user
          .updateProfile({
            displayName: displayName,
          })
          .then(() => {
            setIsNewUser(result.additionalUserInfo.isNewUser);
            setError(null);
          })
          .catch((error: any) => {
            setError(error);
          });
      })
      .catch((error: any) => {
        setError(error);
      });
  };
  if (user && isNewUser) {
    return (
      <div className="become-member">
        <h1>Thanks for registring with us.</h1>
      </div>
    );
  }
  if (user && !isNewUser) {
    return (
      <div className="become-member">
        <h1>This number is already registered with us.</h1>
      </div>
    );
  }
  const handleMobileNumberChange = (value: string) => {
    const phoneno = /^\+?([0-9]{2})([0-9]{10})$/;
    if (value.match(phoneno) && value) {
      debugger;
      setPhoneNumber(value);
    }
    return true;
  };
  const getDetailsTemplate = () => {
    return (
      <div className="form">
        <div className="form-group">
          <label> Name </label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label> Mobile Number </label>
          <input
            type="tel"
            onChange={(e) => handleMobileNumberChange(e.target.value)}
          />
        </div>
        {!codeSent && (
          <div id="recaptcha-container" className="form-group"></div>
        )}
        <div className="form-group">
          <button
            className="button button-primary clickable"
            type="submit"
            id="submit-button"
            disabled={!(phoneNumber && displayName)}
            onClick={submitButtonClicked}
          >
            Submit
          </button>
        </div>
        {error && <div className="form-group error"> {error.message} </div>}
      </div>
    );
  };
  const verifyCodeTemplate = () => {
    return (
      <div className="form">
        <div className="form-group">
          <label> Verify Code </label>
          <input
            type="text"
            value={code}
            onChange={(e) => {
              console.log(e);
              setCode(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <button
            className="button button-primary clickable"
            type="submit"
            id="submit-button"
            disabled={!code}
            onClick={verifyCode}
          >
            Verify
          </button>
        </div>
        {error && <div className="form-group error"> {error.message} </div>}
      </div>
    );
  };
  return (
    <div className="become-member">
      <h1> Fill in the details to become a member</h1>
      {codeSent ? verifyCodeTemplate() : getDetailsTemplate()}
    </div>
  );
}
