import React, {useState} from "react";
import { createActivity } from "../apiFunctions";
import { useNavigate } from "react-router-dom"

const MakeActivity = (props) => {
  const activities = props.activities
  const setActivities = props.setActivities
  const [name, setName]= useState("")
  const [description, setDescription]=useState("")
  const navigate = useNavigate()

  async function handleSubmit(event){
    try{
      const newActivity= await createActivity(name, description)
      console.log(newActivity, "hellop")
      setActivities([newActivity, ...activities])
      navigate("/activities")
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
        setName(event.target.value)
      }}
      required>
      </input>
      <input placeholder="Description"
      className="description"
      type="text"
      value={description}
      onChange={(event)=>{
        setDescription(event.target.value)
      }}
      required>
       </input>
       <button onSubmit={handleSubmit} type="submit">Submit</button>

    </form>
  </div>
);
};
  export default MakeActivity;
