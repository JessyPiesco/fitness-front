import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = (props) => {
  const setLoggedIn = props.setLoggedIn
  const loggedIn = props.loggedIn

  
  return (
    <>
      <div id="navbar">
        <h2> Workout Suits</h2>
        <div className="links">
          <NavLink to="/">
            Home
          </NavLink>
          {
            loggedIn ?
            (
              <NavLink onClick={()=>{
                localStorage.removeItem("token");
                setLoggedIn(false);
              }}>LogOut</NavLink>
            ): (<NavLink to="/login">
              Login
            </NavLink>
            )
            
          }
          
          <NavLink to="/routines">Routines</NavLink>
          <NavLink to="/activities">Activities</NavLink> 
        </div>
      </div>
    </>
  );
};

export default Navbar;
