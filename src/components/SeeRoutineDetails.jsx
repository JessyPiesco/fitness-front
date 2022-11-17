import React, {useState} from "react";
import { updateRoutine } from "../apiFunctions";

const SeeRoutineDetails = (props) => {
  const routine=props.routine
  const [update, setUpdate]= useState(false)

  async function handleSubmit(event){
    try{
      const updateRoutines= await updateRoutine(name, goal, routine.id)
    }catch(error){
      console.log(error)
    }
  }

return(
<div className="IRoutines">
  <div>{routine.name}</div>
  <div>Created by: {routine.creatorName} </div>
  <div>{routine.goal}</div>
{routine.activities.map((activity) => {
    return(
  <div key={`routineActivities-${routine.id}-${activity.id}`}>{activity.name}</div>)})}

{!update ?
                <button onClick={()=>{
                    setUpdate(true)
                }}>Update Activity</button>:

                <form onSubmit={(event)=>{
                    event.preventDefault();
                    handleSubmit()
                  }}>

        <input
          placeholder="Name"
          className="name"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
        ></input>
        <input
          placeholder="Goal"
          className="goal"
          type="text"
          value={goal}
          onChange={(event) => {
            setGoal(event.target.value);
          }}
          required
        ></input>
        <label htmlFor="isPublic">Would you like this to be a public Routine?</label>
        <input
            id="isPublic"
          className="isPublic"
          type="checkbox"
          checked={isPublic}
          onChange={handleChange}
        >
        </input>
        <button onSubmit={handleSubmit} type="submit">
          Submit
        </button>
      </form>

        }</div>)
}

export default SeeRoutineDetails;
