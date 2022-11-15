import React from "react";

const Activities = (props) => {
  const activities = props.activities;


  return (
    <div>
      <div id="activities">
        <h2>Check out these activities</h2>
        <h3>Add them to your routines today!</h3>
      </div>
      <div id="activity">
        {activities && activities.length
          ? activities.map((activity) => {
              return (
                <div className="IActivities" key={`activity-${activity.id}`}>
                  <div className="title">{activity.name}</div>
                  <div>{activity.description}</div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
export default Activities;
