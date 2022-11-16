import React, {useState} from "react";
import { createActivity } from "../apiFunctions";

const MakeActivity = (props) => {
  const [name, setName]= useState("")
  const [description, setDescription]=useState("")

  async function handleSubmit(event){
    try{
      const newActivity= await createActivity(name, description)
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
