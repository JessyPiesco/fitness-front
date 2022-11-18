import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { deleteRoutineActivity, addActivity } from "../apiFunctions";

const FullDetails = (props) => {
  const routine = props.singleRoutine;
  const activities = props.activities;
  const setActivities = props.setActivities;
  const [selectedActivity, setSelectedActivity] = useState();
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);

  function handleSelect(event) {
    setSelectedActivity(event.target[event.target.selectedIndex].value);
  }

  async function addActivityToRoutine() {
    try {
      const addActivities = await addActivity(
        routine.id,
        selectedActivity,
        count,
        duration
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteActivities(event) {
    console.log(event, "event")
    event.preventDefault();
    const toDelete = event.target.id;
    console.log(toDelete, "WHY??")
    const token = localStorage.getItem("token");
    const deleted = await deleteRoutineActivity(toDelete);
    setActivities([...activities]);
  }

  return (
    <>
      <div id="Rname">{routine.name}</div>
      <div>Created by: {routine.creatorName} </div>
      <div>{routine.goal}</div>

      {routine.activities.map((activity) => {
        return (

          <div key={`routineActivities-${routine.id}-${activity.id}`} >
            <form>
            <div

              id="Aname"
            >
              {activity.name}
            </div>
            <div>Count:{activity.count}</div>
            <div>Duration:{activity.duration}</div>
            <button id={activity.routineActivityId} onClick={handleDeleteActivities}>Delete Activity</button>
          </form>
          </div>
        );
      })}

      <select required onChange={handleSelect}>
        <option disabled>--Pick an activity--</option>
        {activities.map((activity) => {
          return (
            <option
              key={`individualActivity-${activity.id}`}
              value={activity.id}
            >
              {activity.name}
            </option>
          );
        })}
      </select>
      <form></form>
      <button onClick={addActivityToRoutine}>Add Activity</button>
    </>
  );
};

export default FullDetails;
