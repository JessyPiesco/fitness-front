import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = (props) => {
  const setLoggedIn = props.setLoggedIn
  const loggedIn = props.loggedIn
  const userProfile = props.userProfile
  const setUserProfile = props.setUserProfile
  
  return (
    <>
      <div id="navbar">
        <h2> Workout Suits</h2>
        <div className="links">
          <NavLink className="linkBar" to="/">
            Home
          </NavLink>
          {
            loggedIn ?
            (
              <>
              <NavLink className="linkBar" onClick={()=>{
                localStorage.removeItem("token");
                setLoggedIn(false);
              }}>LogOut</NavLink> 
              <NavLink className="linkBar" to="/profile">
                Profile
              </NavLink>
              </>
            ): (<NavLink className="linkBar" to="/login">
              Login
            </NavLink>
            ) 
          
          }
          <NavLink className="linkBar"to="/routines">Routines</NavLink>
          <NavLink className="linkBar"to="/activities">Activities</NavLink> 
        </div>
      </div>
    </>
  );
};

export default Navbar;
