import React from "react";
import { registerUser } from "../apiFunctions";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  async function handleRegister(e) {
    try {
      e.preventDefault();
      const username = e.target[0].value;
      const password = e.target[1].value;
      const token = await registerUser(username, password);

      localStorage.removeItem("token");
      localStorage.setItem("token", token);

      if (token) {
        navigate("/login");
        alert("Thank you for Signing Up, please Log In");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div id="login-register">
      <div className="box">
        <h2 className="inputH">Register</h2>
        <form className="dataInput" onSubmit={handleRegister}>
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
            Register
          </button>
        </form>
      </div>
    </div>
    <div id="background">
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/093/076/non_2x/modern-city-skyline-sunset-landscape-backgrounds-illustration-eps10-vector.jpg"
            alt="Daytime Gotham"
          />
    </div>
    </>
  );
};

export default Register;
