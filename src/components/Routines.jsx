import React, { useEffect, useState } from "react";
import { MakeRoutine, SeeRoutineDetails } from "./";
import { getRoutines } from "../apiFunctions";
import { NavLink } from "react-router-dom";

const Routines = (props) => {
  const routines = props.routines;
  const setRoutines = props.setRoutines
  const activities = props.activities;

  return (
    <div>
      <div id="routine">
        <h2>Check out these Routines</h2>
        <h3>Try them all!</h3>
        <NavLink to="/makeroutine">New Routine</NavLink>
      </div>
      <div id="routines">
        {routines && routines.length
          ? routines.map((routine) => {
              return (
                <SeeRoutineDetails
                  routines={routines}
                  setRoutines={setRoutines}
                  activities={activities}
                  routine={routine}
                  key={`routine-${routine.id}`}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Routines;
