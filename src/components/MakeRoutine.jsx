import React, {useState} from "react";
import { createRoutine } from "../apiFunctions";

const MakeRoutine = (props) => {

    const [name, setName]= useState("")
    const [goal, setGoal]=useState("")
    const [isPublic, setIsPublic]= useState(false)

    async function handleSubmit(event){
      try{
        const newRoutine= await createRoutine(title, goal)
      }catch(error){
        console.log(error)
      }
    }
  return(
    <div>
      <form onSubmit={(event)=>{
        event.preventDefault();
        handleSubmit()
      }}>
        <input placeholder="Name"
        className="name"
        type="text"
        value={name}
        onChange={(event)=>{
          setTitle(event.target.value)
        }}
        required>
        </input>
        <input placeholder="Goal"
        className="goal"
        type="text"
        value={goal}
        onChange={(event)=>{
          setGoal(event.target.value)
        }}
        required>
         </input>
         <input
        className="isPublic"
        type="checkbox"
        value={isPublic}
        onChange={(event)=>{
          setIsPublic(event.target.value)
        }}
        required>
         </input>
         <button onSubmit={handleSubmit} type="submit">Submit</button>

      </form>
    </div>
  );
  };
export default MakeRoutine;
