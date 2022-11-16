import React, { useState } from "react";
import { personalRoutines } from "../apiFunctions";
import { Routines } from "./";

const Profile = (props) => {
  console.log(props);
  const routines = props.routines;
  const loggedIn = props.loggedIn;
  const userName = props.userName;
  const setUserName = props.userName;

  return (
    <div>
      <h2>This is Profile page</h2>
      <div id="routines">
        {routines.length ? (
          routines.map((routine) => {
            return (
              <div className="IRoutines" key={`routine-${routine.id}`}>
                <div className="title">{routine.name}</div>
                <div>Created by: {routine.creatorName} </div>
                <div>{routine.goal}</div>
              </div>
            );
          })
        ) : (
          <div>Please Log In...</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
