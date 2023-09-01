"use client";

// hooks
import { useState } from "react";
import { useDispatch } from "react-redux";

// Components
import SubTitle from "../common/SubTitle";
import Title from "../common/Title";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";

// Actions
import { addCurrentUser } from "@/redux/slices/currentUserSlice";

// lib
import { currentUserSchema } from "./AuthValidation";
import { validateHandler } from "@/app/lib/validateHandler";

// css
import "./Auth.css";

const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";
const EMAIL = "email";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const Auth = () => {
  const [currentUser, setCurrentUser] = useState(initialState);
  const [errors,setErrors] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name , value} = e.target;
    setCurrentUser((prev) => ({...prev, [name] : value}));
    if(errors) setErrors([])
  };

  const handleSubmit = async () => {
      const errors = await validateHandler(currentUserSchema,currentUser);
      if(errors.length){
        setErrors(errors);
        return;
      }

      dispatch(addCurrentUser(currentUser));
  }

  const getErrorMessage = (field) => {
    const error = errors.find((error) => error.name === field);
    if(error) return error.message;
    return null;
  }

  return (
    <div className="authContainer">
      <Title className="signUp">Register</Title>
      <SubTitle className="signUpSubTitle">
        Please register yourself here to start quiz
      </SubTitle>
      <div className="auth-form">
        <div className="userName">
          <TextInput
            label="First Name: "
            placeholder="Enter your first name"
            name={FIRST_NAME}
            value={currentUser.firstName}
            onChange={handleChange}
            errorMessage={getErrorMessage(FIRST_NAME)}
          />
          <TextInput
            label="Last Name: "
            placeholder="Enter your last name"
            name={LAST_NAME}
            value={currentUser.lastName}
            onChange={handleChange}
            errorMessage={getErrorMessage(LAST_NAME)}
          />
        </div>
        <TextInput
          label="Email: "
          placeholder="Enter your email address"
          name={EMAIL}
          value={currentUser.email}
          onChange={handleChange}
          errorMessage={getErrorMessage(EMAIL)}
        />
        <Button disabled={errors.length} onClick={handleSubmit}>Start Quiz</Button>
      </div>
    </div>
  );
};

export default Auth;
