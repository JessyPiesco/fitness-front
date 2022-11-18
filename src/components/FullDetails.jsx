import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { deleteRoutineActivity, addActivity } from "../apiFunctions";

const FullDetails = (props) => {
  const routine = props.singleRoutine;
  const routines = props.routines
  const activities = props.activities;
  const setActivities = props.setActivities;
  const setSingleRoutine = props.setSingleRoutine
  const setRoutines = props.setRoutines
  const [selectedActivity, setSelectedActivity] = useState();
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [localActivities, setLocalActivities] = useState([])
  const navigate = useNavigate()

  function handleSelect(event) {
    setSelectedActivity(event.target[event.target.selectedIndex].value);
  }
  useEffect (()=> {
    setLocalActivities(activities)
  },[activities])

  useEffect (()=> {
    setSingleRoutine(routine)
  },[routine])

  async function addActivityToRoutine() {
    try {
      const addActivities = await addActivity(
        routine.id,
        selectedActivity,
        count,
        duration
      );
      // setRoutines([...routine, addActivities])
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteActivities(event) {
    console.log(event, "NOOOO")
    event.preventDefault();
    const toDelete = event.target.id;
    console.log(toDelete, "This is toDelete")
    const token = localStorage.getItem("token");
    const deleted = await deleteRoutineActivity(toDelete);
    console.log(deleted, "this is deleted")
    const warning = routine.activities.filter((activity) => {
     console.log(activity, "hello") 
     return activity.routineActivityId !== deleted.id
    })
    
    // setLocalActivities(warning);


    const routineCopy = {...routine}
    routineCopy.activities = warning
    console.log(routineCopy, "this is a copy")
    setRoutines([routineCopy, ...routines])
    setSingleRoutine(routine)
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
        {localActivities.map((activity) => {
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
