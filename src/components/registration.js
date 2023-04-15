import React from "react";
import "./registration.css";
import LeftContainer from "./leftContainer";

function Registration() {
  return (
    <>
      <div className="Registration">
      <LeftContainer/>
        <div className="rightContainer">
          <div className="upperContainer">Super app</div>
          <p className="createAccount">Create your new account</p>
          <div className="EmailAccount">
            Email{"   "} <span className="highlight">|{"   "}</span>
            {"   "}Google
          </div>
          <b className="termcondition">
            By clicking on Sign up. You agree to Superapp{" "}
            <span className="highlight"> Terms and Conditions of Use</span>
          </b>
          <b className="PrivacyPolicy">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <span className="highlight">Privacy Policy</span>
          </b>
        </div>
      </div>
    </>
  );
}

export default Registration;
