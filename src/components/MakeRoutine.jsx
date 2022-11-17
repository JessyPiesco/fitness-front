import React, { useState } from "react";
import { createRoutine } from "../apiFunctions";

const MakeRoutine = (props) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  async function handleSubmit(event) {
    try {
      const newRoutine = await createRoutine(name, goal, isPublic);
    } catch (error) {
      console.log(error);
    }
  }
  function handleChange() {
    setIsPublic(!isPublic);
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
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
    </div>
  );
};
export default MakeRoutine;
