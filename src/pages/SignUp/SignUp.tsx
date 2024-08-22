/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import "./SignUp.css";
import InputText from "../../components/InputText/InputText";
import Button from "../../components/Button/Button";
import NetflixLogo from "../../components/NetflixLogo/NetflixLogo";
import { useState } from "react";
import { doRegister } from "../../firebaseAuth/auth";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleOnClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    await doRegister(email, password);
  };
  return (
    <section className="signin-section d-flex justify-content-center overflow-hidden px-4 px-lg-0 pt-4">
      <div className="container-lg">
        <NetflixLogo />
        <div className="row justify-content-center mt-5">
          <div className="signin-form">
            <h1 className="signin-title">Sign Up</h1>
            <form className="d-flex flex-column gap-4">
              <InputText
                label="First Name"
                value={firstName}
                setValueChange={setFirstName}
              />
              <InputText
                label="Email Address"
                value={email}
                setValueChange={setEmail}
              />
              <InputText
                label="Password"
                value={password}
                setValueChange={setPassword}
              />
              <Button title="sign up" handleOnClick={handleOnClick} />
            </form>

            <div className="mt-4">
              <span className="new-to-netflix">Already A User? </span>
              <NavLink to="/signin" className="signin">
                Sign In.
              </NavLink>
            </div>
            <p className="captcha mt-4">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.<a href="#">Learn more.</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
