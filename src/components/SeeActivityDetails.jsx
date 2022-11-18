import React, {useState} from "react";
import { updateActivity } from "../apiFunctions";
import { useNavigate } from "react-router-dom"

const SeeActivityDetails = (props) => {
const activity=props.activity
const activities = props.activities
const setActivities = props.setActivities
const [update, setUpdate]= useState(false)
const [name, setName]= useState(activity.name)
const [description, setDescription]=useState(activity.description)
const navigate = useNavigate()

  async function handleSubmit(event){
    try{
      const newActivity= await updateActivity(name, description, activity.id)
      setActivities([...activities, newActivity])
      navigate("/activities")
    }catch(error){
      console.log(error)
    }
  }


return(
    <div className="IActivities" >
                  <div className="title">{activity.name}</div>
                  <div>{activity.description}</div>
                {!update ?
                <button onClick={()=>{
                    setUpdate(true)
                }}>Update Activity</button>:
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
            }



                </div>
)
}

export default SeeActivityDetails;
