import React, { useState } from "react";
import { Routines } from './'

const Profile = (props) => {
  const routines = props.routines
  console.log(routines)
  const loggedIn = props.loggedIn;

  return (
    <div>
      <h2>This is Profile page</h2>
      <div>
      
      </div>
    </div>
  );
};

export default Profile;
