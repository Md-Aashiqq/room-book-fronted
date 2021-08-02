import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDataLayerValue } from "./Datalayer";
import "./Login.css";
function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const [{ isLogin, token }, dispatch] = useDataLayerValue();

  const history = useHistory();

  const url = "http://localhost:3001/user/login/";
  const submitHandler = async () => {
    console.log(loginData);

    try {
      const res = await axios.post(url, loginData);
      console.log(res.data.data);
      dispatch({ type: "SETAUTH", isLogin: true });
      // dispatch({ type: "SETUSERID", userId: res.data.user._id });
      dispatch({ type: "SETTOKEN", token: res.data.data.token });
      history.replace("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login__section">
      <div>Some Image</div>

      <div className="login">
        <h1 className="login__heading"> Login With Your Credtinal</h1>
        <div className="inputField__container">
          <input
            className="login__input"
            placeholder="Enter your Email"
            name="email"
            onChange={handleChange}
            type="email"
            value={loginData.email}
          />{" "}
        </div>
        <div className="inputField__container">
          <input
            className="login__input"
            name="password"
            // onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={loginData.password}
          />
        </div>

        <div className="btn__grp">
          {" "}
          <div className="login_btn" onClick={() => submitHandler()}>
            {" "}
            Login{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
