import SubTitle from "../common/SubTitle";
import Title from "../common/Title";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="authContainer">
      <Title className="signUp">Register</Title>
      <SubTitle className="signUpSubTitle">Please register yourself here to start quiz</SubTitle>
      <div className="auth-form">
        <div className="userName">
            <TextInput label="First Name: " placeholder="Enter your first name" />
            <TextInput label="Last Name: " placeholder="Enter your last name" />
        </div>
        <TextInput label="Email: " placeholder="Enter your email address" />
        <Button>Start Quiz</Button>
      </div>
    </div>
  );
};

export default Auth;
