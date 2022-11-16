import React, {useState} from "react";


const Profile = (props) => {
    const userProfile = props.userProfile
    const setUserProfile = props.setUserProfile

    

  return (
    <div>
      <h2>This is Profile page</h2>
      <div>
        <h3>this is your Routines</h3>
        <h3>this is your Activities</h3>
      </div>
    </div>
  );
};

export default Profile;
