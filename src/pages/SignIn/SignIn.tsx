/* eslint-disable jsx-a11y/anchor-is-valid */
import "./SignIn.css";
import NetflixLogo from "../../assets/images/netflix-logo.svg";
import Button from "../../components/Button/Button";
import { GoCheck } from "react-icons/go";
import { MouseEventHandler, useState } from "react";
import InputText from "../../components/Button/InputText/InputText";
const SignIn = () => {
  const [displayCheck, setDisplayCheck] = useState(true);
  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };
  return (
    <section className="signin-section d-flex justify-content-center overflow-hidden pt-4">
      <div className="container">
        <img src={NetflixLogo} alt="logo" title="netflix" width={150} />
        <div className="row justify-content-center mt-5">
          <div className="signin-form">
            <h1 className="signin-title">Sign In</h1>
            <form className="d-flex flex-column gap-4">
              <InputText label="Email or mobile number" />
              <InputText label="Password" />
              <Button title="sign in" handleOnClick={handleOnClick} />
            </form>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div
                className="remember-me-box d-flex "
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
                    <GoCheck style={{ fill: "black" }} size={14} />
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
              <a href="#" className="signup">
                Sign up now.
              </a>
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
