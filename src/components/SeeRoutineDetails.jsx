import React, {useState} from "react";
import { updateRoutine, addActivity, destroyRoutine, deleteRoutineActivity } from "../apiFunctions";
import { useNavigate, NavLink } from "react-router-dom";
import FullDetails from "./FullDetails";

const SeeRoutineDetails = (props) => {
  const routine=props.routine
  const routines = props.routines
  const setRoutines = props.setRoutines
  const activities=props.activities
  const singleRoutine=props.singleRoutine
  const setSingleRoutine=props.setSingleRoutine
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [update, setUpdate]= useState(false)



  const navigate = useNavigate()

  async function handleSubmit(event){
    try{
      const updateRoutines= await updateRoutine(name, goal, routine.id)
      setRoutines([...routines, updateRoutines])
      navigate("/routines")
    }catch(error){
      console.log(error)
    }
  }
function handleChange() {
    setIsPublic(!isPublic);
  }
  // function handleSelect(event){
  //   setSelectedActivity(event.target[event.target.selectedIndex].value)

  // }
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
    setRoutines([...routines])
  }


return(
<div className="IRoutines">
  <div id="Rname">{routine.name}</div>
  <div>Created by: {routine.creatorName} </div>
  <div>{routine.goal}</div>
  {/* <FullDetails routine={routine}/> */}
{/* took full details from here */}
<button >
  <NavLink onClick={()=>{
  setSingleRoutine(routine)
}} to="/fulldetails">Full details of Routine</NavLink></button>
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
