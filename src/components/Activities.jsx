import React, { useState } from "react";
import { MakeActivity, SeeActivityDetails } from "./";
import { NavLink } from "react-router-dom";

const Activities = (props) => {
  const activities = props.activities;
  const setActivities = props.setActivities;

  return (
    <div>
      <div id="activities">
        <h2 className="inputH">Check out these activities</h2>
        <h3>Add them to your routines today!</h3>
        <NavLink className="linkBar" to="/makeactivity">New Activity</NavLink>
      </div>
      <div id="activity">
        {activities && activities.length
          ? activities.map((activity) => {
              return (
                <SeeActivityDetails
                activity={activity}
                activities={activities}
                setActivities={setActivities}
                key={`activity-${activity.id}`}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
export default Activities;
