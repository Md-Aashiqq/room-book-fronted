import React from "react";
import "./Signup.css";
function Signup() {
  return (
    <div className="login__section">
      <div>Some Image</div>

      <div className="login">
        <h1 className="login__heading"> Signup for your account</h1>
        <div className="inputField__container">
          <input
            className="login__input"
            placeholder="Enter your Name"
            type="text"
          />{" "}
        </div>
        <div className="inputField__container">
          <input
            className="login__input"
            placeholder="Enter your Email"
            type="text"
          />{" "}
        </div>
        <div className="inputField__container">
          <input
            className="login__input"
            placeholder="Enter your password"
            type="password"
          />
        </div>

        <div className="btn__grp">
          {" "}
          <div className="login_btn"> SIgnUp </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
