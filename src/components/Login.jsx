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
      
      
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
      localStorage.removeItem("username");
      localStorage.setItem("username", username);

      
      setLoggedIn(true);
      getLoggedInUser();
      setUserName(username);
      
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
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
    <div id="background">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/200/682/non_2x/modern-night-city-skyline-landscape-backgrounds-illustration-eps10-vector.jpg"
            alt="Gotham City"
          />
    </div>
    </>
  );
};

export default Login;
