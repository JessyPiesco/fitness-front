import React, { useState } from "react";
import { loginUser } from "../apiFunctions";
import { NavLink, useNavigate } from "react-router-dom";

const Login = (props) => {
  const userName = props.userName
  const setUserName = props.setUserName
  const setLoggedIn = props.setLoggedIn;
  const loggedIn = props.loggedIn;
  const getLoggedInUser = props.getLoggedInUser;
  const navigate = useNavigate()

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const username = e.target[0].value;
      const password = e.target[1].value;
      
      const token = await loginUser(username, password);
      console.log(username)
      
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
      localStorage.removeItem("username");
      localStorage.setItem("username", username);

      
      setLoggedIn(true);
      getLoggedInUser();
      setUserName(username);
      console.log(userName, "AUGHHHHH")
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="login-register">
      <div className="box">
        <h2 className="inputH">Log in</h2>
        <form className="dataInput" onSubmit={handleSubmit}>
          <div className="userBox">
            <input className="userInput" type="text" placeholder="username" />
          </div>
          <div className="passBox">
            <input
              className="userInput"
              type="password"
              placeholder="password"
            />
          </div>
          <button className="submitBtn" type="submit">
            Login
          </button>
        </form>
        <NavLink className="signBtn" to="/register">
          New User Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
