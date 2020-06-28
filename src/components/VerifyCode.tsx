import React from "react";
import { IVerifyCodeProps } from "../models/components.props";
import { TextField } from "@material-ui/core";
export function VerifyCode(props: IVerifyCodeProps) {
  return (
    <div className="form">
      <div className="form-group">
        <TextField
          required
          label="OTP Code"
          value={props.code}
          onChange={(e) => props.setCode(e.target.value)}
          variant="outlined"
        />
      </div>
      <div className="form-group">
        <button
          className="button button-primary clickable"
          type="submit"
          id="submit-button"
          disabled={!(props.code && props.code.length === 6)}
          onClick={props.verifyCode}
        >
          Verify
        </button>
      </div>
      {props.error && (
        <div className="form-group error"> {props.error.message} </div>
      )}
    </div>
  );
}
