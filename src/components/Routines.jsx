import React, { useEffect, useState } from "react";
import { getRoutines } from "../apiFunctions";
import { NavLink } from "react-router-dom";

const Routines = (props) => {
  const routines = props.routines;
  

  return (
    <div>
      <div id="routine">
        <h2>Check out these Routines</h2>
        <h3>Try them all!</h3>
      </div>
      <div id="routines">
        {routines && routines.length
          ? routines.map((routine) => {
              return (
                <div className="IRoutines" key={`routine-${routine.id}`}>
                  <div className="title">{routine.name}</div>
                  <div>Created by: {routine.creatorName} </div>
                  <div>{routine.goal}</div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Routines;
