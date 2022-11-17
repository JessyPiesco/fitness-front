import React from "react";

const SeeRoutineDetails = (props) => {
  const routine=props.routine

return(<>
<div className="IRoutines">
  <div>{routine.name}</div>
  <div>Created by: {routine.creatorName} </div>
  <div>{routine.goal}</div>

  {routine.activities.map((activity) => {
    return(
  <div key={`routineActivities-${routine.id}-${activity.id}`}>{activity.name}</div>)})}
</div>
</>
)
}

export default SeeRoutineDetails;
