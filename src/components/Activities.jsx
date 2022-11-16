import React, {useState} from "react";
import { MakeActivity, SeeActivityDetails } from "./";
import { NavLink } from "react-router-dom";

const Activities = (props) => {
  const activities = props.activities;


  return (
    <div>
      <div id="activities">
        <h2>Check out these activities</h2>
        <h3>Add them to your routines today!</h3>
        <NavLink to="/makeactivity">New Activity</NavLink>
      </div>
      <div id="activity">
        {activities && activities.length
          ? activities.map((activity) => {
            console.log(activity)
              return (
               <SeeActivityDetails activity={activity} key={`activity-${activity.id}`}/>
              );
            })
          : null}
      </div>
    </div>
  );
};
export default Activities;
