import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { deleteRoutineActivity, addActivity, updateRoutineActivity } from "../apiFunctions";

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
  const [update, setUpdate]= useState(false)

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
      const routineCopy = {...routine}
      routineCopy.activities = [...routine.activities, addActivities]
      setSingleRoutine(routineCopy)
    } catch (error) {
      console.error(error);
    }
  }
  async function handleUpdateActivities(event){
    {
      try{
        const updateActivity= await updateRoutineActivity(routine.id, selectedActivity, count, duration)

      }catch(error){
        console.log(error)
      }
    }
  }

  async function handleDeleteActivities(event) {
    event.preventDefault();
    const toDelete = event.target.id;
    const token = localStorage.getItem("token");
    const deleted = await deleteRoutineActivity(toDelete);
    const warning = routine.activities.filter((activity) => {
     return activity.routineActivityId !== deleted.id
    })
    const routineCopy = {...routine}
    routineCopy.activities = warning
    setSingleRoutine(routineCopy)
  }

  return (
    <>
      <div id="Rname">{routine.name}</div>
      <div>Created by: {routine.creatorName} </div>
      <div>{routine.goal}</div>

      {routine.activities ? routine.activities.map((activity) => {
        return (

          <div key={`routineActivities-${routine.id}-${activity.id}`} >

            <div

              id="Aname"
            >
              {activity.name}
            </div>
            <div>Count:{activity.count}</div>
            <div>Duration:{activity.duration}</div>
            <button id={activity.routineActivityId} onClick={handleDeleteActivities}>Delete Activity</button>
            {!update ?
                <button onClick={()=>{
                    setUpdate(true)
                }}>Update Activity</button>:
                <form onSubmit={(event)=>{
                    event.preventDefault();
                    handleUpdateActivities()
                  }}>
                    <input placeholder="Count"
                    className="count"
                    type="text"
                    value={count}
                    onChange={(event)=>{
                      setCount(event.target.value)
                    }}
                    required>
                    </input>
                    <input placeholder="Duration"
                    className="duration"
                    type="text"
                    value={duration}
                    onChange={(event)=>{
                      setDuration(event.target.value)
                    }}
                    required>
                     </input>
                     <button onSubmit={handleUpdateActivities} type="submit">Submit</button>

                  </form>
            }

          </div>
        );
      }): (<p>loading...</p>)}

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
