import React from "react";
import { NavLink } from "react-router-dom"

const Profile = (props) => {
  console.log(props);
  const routines = props.routines;
  const loggedIn = props.loggedIn;
  const userName = props.userName;
  const setUserName = props.userName;

  return (
    <div>
      <h2>This is Profile page</h2>
      <NavLink className="linkBar" to="/makeroutine">Make a New Routine</NavLink>
      <div id="routines">
        {routines.length ? (
          routines.map((routine) => {
            return (
              <div key={`routine-${routine.id}`}>
              <div className="IRoutines" key={`routine-${routine.id}`}>
                <div className="title">{routine.name}</div>
                <div>Created by: {routine.creatorName} </div>
                <div>{routine.goal}</div>
              </div>
              {/* <NavLink className="linkBar" to="/makeroutine">Make a New Routine</NavLink> */}
              </div>
            );
          })
        ) : (
          <>
          {loggedIn ? (
            <div>
              <div>Your Routines</div>

            </div>
          ) : (
           <div>Please Log In...</div>
          )}
          </>
          )}
      </div>
    </div>
  );
};

export default Profile;
