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
      {routines && routines.length
          ? routines.map((routine) => {
            // console.log(routine, "HELLO")
            //   return (
            //     if(routine.creatorName === )
            //     <div className="IRoutines" key={`routine-${routine.id}`}>
            //       <div className="title">{routine.name}</div>
            //       <div>Created by: {routine.creatorName} </div>
            //       <div>{routine.goal}</div>
            //     </div>
            //   );
            })
          : null}
      </div>
    </div>
  );
};

export default Profile;
