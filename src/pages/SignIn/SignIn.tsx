/* eslint-disable jsx-a11y/anchor-is-valid */
import "./SignIn.css";
import Button from "../../components/Button/Button";
import { GoCheck } from "react-icons/go";
import { useState } from "react";
import InputText from "../../components/InputText/InputText";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import NetflixLogo from "../../components/NetflixLogo/NetflixLogo";
import { useAuth } from "../../contexts/authContext";
import { doSignIn, doSignOut } from "../../firebaseAuth/auth";
import { auth } from "../../firebaseAuth/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";

const SignIn = () => {
  const [displayCheck, setDisplayCheck] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signingIn, setSigningIn] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  const [error, setError] = useState("");
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        setError("");
        navigate("/home", { state: { email, password } });
      })
      .catch((err) => {
        setSigningIn(false);
        switch (err.code) {
          case "auth/invalid-email":
            email.length === 0
              ? setError("Please Enter You Email")
              : setError("Enter a Valid Email");
            break;
          case "auth/missing-password":
            setError("Please Enter Your Password");
            break;
          case "auth/invalid-credential":
            setError("Invalid Email Or Password");
            break;
        }
        console.log(err.code);
      }); // Assuming doSignIn returns a boolean or some status
  };

  return (
    <section className="signin-section d-flex justify-content-center overflow-hidden px-4 px-lg-0 pt-4">
      <div className="container-lg">
        <NavLink to={"/"}>
          <NetflixLogo />
        </NavLink>
        <div className="row justify-content-center mt-5">
          <div className="signin-form">
            <h1 className="signin-title">Sign In</h1>
            <form className="d-flex flex-column gap-4">
              <InputText
                label="Email or mobile number"
                value={email}
                setValueChange={setEmail}
              />
              <InputText
                label="Password"
                value={password}
                setValueChange={setPassword}
              />
              {error && <span className="err-msg">{error}</span>}
              <Button title="sign in" handleOnClick={handleOnClick} />
            </form>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div
                className="remember-me-box d-flex"
                onClick={() => setDisplayCheck(!displayCheck)}
              >
                <div
                  className="checkbox"
                  style={{
                    backgroundColor: displayCheck ? "#fff" : "#000",
                    border: displayCheck ? "none" : "1px solid gray",
                  }}
                >
                  <span
                    className="check"
                    style={{ opacity: displayCheck ? 1 : 0 }}
                  >
                    <GoCheck fill="black" size={14} />
                  </span>
                </div>
                <span className="remember-me">Remember me</span>
              </div>
              <a href="#" className="need-help">
                Need help?
              </a>
            </div>
            <div className="mt-5">
              <span className="new-to-netflix">New To Netflix? </span>
              <NavLink to="/signup" className="signup">
                Sign up now.
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

export default SignIn;
