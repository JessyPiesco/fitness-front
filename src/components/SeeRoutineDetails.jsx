import React, {useState} from "react";
import { updateRoutine, addActivity, destroyRoutine } from "../apiFunctions";

const SeeRoutineDetails = (props) => {
  const routine=props.routine
  const setRoutines = props.setRoutines
  const activities=props.activities
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [update, setUpdate]= useState(false)
  const [selectedActivity, setSelectedActivity]=useState()
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);


  async function handleSubmit(event){
    try{
      const updateRoutines= await updateRoutine(name, goal, routine.id)
    }catch(error){
      console.log(error)
    }
  }
function handleChange() {
    setIsPublic(!isPublic);
  }
  function handleSelect(event){
    setSelectedActivity(event.target[event.target.selectedIndex].value)

  }
  async function addActivityToRoutine(){
    try{
      const addActivities= await addActivity(routine.id, selectedActivity, count, duration)
    }catch(error){
      console.error(error)
    }
  }

  async function handleDelete(e){
    e.preventDefault();
    console.log(e, "LUigi")
    const toDelete = e.target.id;
    const token = localStorage.getItem("token");
    const deleted = await destroyRoutine(toDelete, token);
    navigate("/routines");
  }

return(
<div className="IRoutines">
  <div>{routine.name}</div>
  <div>Created by: {routine.creatorName} </div>
  <div>{routine.goal}</div>
{routine.activities.map((activity) => {
    return(
  <div key={`routineActivities-${routine.id}-${activity.id}`}>{activity.name}</div>)})}
<select required onChange={handleSelect}>
<option disabled>--Pick an activity--</option>

{
  activities.map((activity)=>{
    return(
      <option value={activity.id}>
        {activity.name}
      </option>
    )
  })
}
</select>
<button onClick={addActivityToRoutine}>
Add Activity
</button>
<button onClick={handleDelete} id={routine.id}>
          Delete
        </button>
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
