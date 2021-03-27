import React, { useState } from "react";
import moment from "moment-timezone";
import { useDispatch } from "react-redux";
import DateFnsUtils from "@date-io/date-fns";
import enLocale from "date-fns/locale/en-US";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { USER_ROLES } from "../../enums/roles";
import { addUser } from "../../containers/root/state/actions";
import { validateEmail, validatePhone } from "../../utils/common";
import "./styles.css";

const UserForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("");
  const [dob, setDOB] = useState(new Date());

  const [nameValidationError, setNameValidationError] = useState(false);
  const [emailValidationError, setEmailValidationError] = useState(false);
  const [contactValidationError, setContactValidationError] = useState(false);
  const [roleValidationError, setRoleValidationError] = useState(false);
  const [dobValidationError, setDOBValidationError] = useState(false);

  const handleName = (event) => {
    if (nameValidationError) {
      setNameValidationError(false);
    }

    setName(event.target.value);
  };

  const handleEmail = (event) => {
    if (emailValidationError) {
      setEmailValidationError(false);
    }

    setEmail(event.target.value);
  };

  const handleDOB = (date) => {
    if (dobValidationError) {
      setDOBValidationError(false);
    }

    setDOB(date);
  };

  const handleContact = (event) => {
    if (contactValidationError) {
      setContactValidationError(false);
    }

    if (!validatePhone(event.target.value)) {
      return;
    }

    if (event.target.value.length <= 10) {
      setContact(event.target.value);
    }
  };

  const handleRole = (event) => {
    if (roleValidationError) {
      setRoleValidationError(false);
    }

    setRole(event.target.value);
  };

  const isInputValid = () => {
    let isValid = true;

    if (!name) {
      setNameValidationError(true);
      isValid = false;
    }

    if (!email || !validateEmail(email)) {
      setEmailValidationError(true);
      isValid = false;
    }

    if (!role) {
      setRoleValidationError(true);
      isValid = false;
    }

    return isValid;
  };

  const handleSave = () => {
    if (!isInputValid()) {
      return;
    }

    const payload = {
      name,
      email,
      contact,
      dob: moment(dob).format("Do MMMM, YYYY"),
      role,
    };

    dispatch(addUser(payload));
  };

  return (
    <div className="user-form-container">
      <div className="user-form-form-container">
        <div className="user-form-input-field-container">
          <TextField
            label="Name"
            variant="outlined"
            error={nameValidationError}
            required
            value={name}
            onChange={handleName}
            autoComplete="new-password"
            className="input-text-field"
          />
        </div>

        <div className="user-form-input-field-container">
          <TextField
            label="Email"
            variant="outlined"
            error={emailValidationError}
            required
            value={email}
            onChange={handleEmail}
            autoComplete="new-password"
            className="input-text-field"
          />
        </div>

        <div className="user-form-input-field-container">
          <TextField
            label="Contact"
            variant="outlined"
            error={contactValidationError}
            required
            value={contact}
            onChange={handleContact}
            autoComplete="new-password"
            className="input-text-field"
          />
        </div>

        <div className="user-form-input-field-container">
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enLocale}>
            <DatePicker
              variant="inline"
              inputVariant="outlined"
              format="dd/MM/yyyy"
              label="DOB"
              error={dobValidationError}
              inputadornmentprops={{ position: "end" }}
              className="input-text-field"
              autoComplete="off"
              value={dob}
              onChange={handleDOB}
              autoOk
            />
          </MuiPickersUtilsProvider>
        </div>

        <div className="user-form-input-field-container">
          <FormControl variant="outlined" className="input-select-field">
            <InputLabel>Role</InputLabel>
            <Select
              value={role}
              onChange={handleRole}
              label="Role"
              autoComplete="off"
              inputProps={{
                autoComplete: "new-password",
              }}
              error={roleValidationError}
            >
              <MenuItem value="">
                <em>Select Role</em>
              </MenuItem>

              {USER_ROLES.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="user-form-button-container">
          <Button variant="contained" color="primary" onClick={handleSave}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
