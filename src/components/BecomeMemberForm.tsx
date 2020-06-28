import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { IBecomeMemberFormProps } from "../models/components.props";
export function BecomeMemberForm(props: IBecomeMemberFormProps) {
  const [phoneNumber, setPhoneNumber] = useState({ value: "", valid: false });
  const [displayName, setDisplayName] = useState("");
  const [gender, setGender] = useState("male");
  const [masjidZimmedar, setMasjidZimmedar] = useState("I am Not");
  const [nearestMasjid, setNearestMasjid] = useState("");
  const [age, setAge] = useState(18);
  const [areaOfInterest, setAreaOfInterest] = useState("None");
  const [profession, setProfession] = useState("");
  const submitButtonClicked = () => {
    props.submitButtonClicked({
      phoneNumber,
      displayName,
      gender,
      masjidZimmedar,
      nearestMasjid,
      age,
      profession,
    });
  };
  const handleMobileNumberChange = (value: string) => {
    const phoneno = /^\+?([0-9]{2})([0-9]{10})$/;
    if (value.match(phoneno) && value) {
      setPhoneNumber({ value, valid: true });
    } else {
      setPhoneNumber({ value: phoneNumber.value, valid: false });
    }
    return true;
  };
  return (
    <div className="form">
      <div className="form-group">
        <TextField
          required
          label="Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          variant="outlined"
        />
      </div>
      <div className="form-group">
        <PhoneInput
          country={"in"}
          value={phoneNumber.value}
          inputProps={{
            name: "Mobile Number",
            required: true,
          }}
          onChange={handleMobileNumberChange}
        />
      </div>
      <div className="form-group">
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          row
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          defaultValue="top"
        >
          <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="Female"
          />
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="Male"
          />
        </RadioGroup>
      </div>
      <div className="form-group">
        <FormControl variant="outlined">
          <InputLabel>Age</InputLabel>
          <Select
            value={age}
            onChange={(e) => setAge(e.target.value as number)}
            label="Age"
          >
            {Array.from(Array(80), (e, i) => {
              return (
                <MenuItem key={i} value={i}>
                  {i}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
      <div className="form-group">
        <FormControl variant="outlined">
          <InputLabel>Profession</InputLabel>
          <Select
            value={profession}
            onChange={(e) => setProfession(e.target.value as string)}
            label="Profession"
          >
            {Array.from(
              [
                "Business Man",
                "Doctor",
                "Engineer",
                "HouseWife",
                "Lawyer",
                "M.R",
                "Student",
                "Teacher",
                "Mufti",
                "Alim",
                "Hafiz",
              ],
              (e) => {
                return (
                  <MenuItem key={e} value={e}>
                    {e}
                  </MenuItem>
                );
              }
            )}
          </Select>
        </FormControl>
      </div>
      <div className="form-group">
        <FormControl variant="outlined">
          <InputLabel>Area of Interest</InputLabel>
          <Select
            value={areaOfInterest}
            onChange={(e) => setAreaOfInterest(e.target.value as string)}
            label="Area of Interest"
          >
            {Array.from(
              [
                "None",
                "Charity",
                "School education",
                "Madarsa & Maktab",
                "Health & Medicine",
                "Journalism",
                "Health & hygiene",
                "Scholarship & schemes",
                "Job assistance",
                "Teaching",
              ],
              (e) => {
                return (
                  <MenuItem key={e} value={e}>
                    {e}
                  </MenuItem>
                );
              }
            )}
          </Select>
        </FormControl>
      </div>
      <div className="form-group">
        <FormControl variant="outlined">
          <InputLabel>Masjid Zimmedar</InputLabel>
          <Select
            value={masjidZimmedar}
            onChange={(e) => setMasjidZimmedar(e.target.value as string)}
            label="Masjid Zimmedar"
          >
            {Array.from(
              ["I am Not", "I am Trustee", "I am Imam", "I am Muezzin"],
              (e) => {
                return (
                  <MenuItem key={e} value={e}>
                    {e}
                  </MenuItem>
                );
              }
            )}
          </Select>
        </FormControl>
      </div>
      <div className="form-group">
        <TextField
          required
          label="Nearest Masjid"
          value={nearestMasjid}
          onChange={(e) => setNearestMasjid(e.target.value)}
          variant="outlined"
        />
      </div>
      {!props.codeSent && (
        <div id="recaptcha-container" className="form-group"></div>
      )}
      <div className="form-group">
        <button
          className="button button-primary clickable"
          type="submit"
          id="submit-button"
          disabled={
            !(
              phoneNumber.valid &&
              displayName &&
              age &&
              profession &&
              masjidZimmedar &&
              props.captchaValue
            )
          }
          onClick={submitButtonClicked}
        >
          Become a Member
        </button>
      </div>
      {props.error && (
        <div className="form-group error"> {props.error.message} </div>
      )}
    </div>
  );
}
