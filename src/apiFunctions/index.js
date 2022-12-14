const BASE = "http://fitnesstrac-kr.herokuapp.com/api";

export async function getRoutines() {
  const response = await fetch(`${BASE}/routines`);
  const result = await response.json();

  return result;
}

export async function getActivities(){
    const response= await fetch(`${BASE}/activities`);
    const result= await response.json();
    return result;
}

export async function loginUser(username, password) {
  try {
    const loginResult = await fetch(`${BASE}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const resp = await loginResult.json();
    console.log(resp);
    if (resp.error) {
      alert(resp.error);
    }
    return resp.token;
  } catch (error) {
    console.log(error);
  }
}

export async function registerUser(username, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  const response = await fetch(`${BASE}/users/register`, options);
  const result = await response.json();


  if (result.error) {
    alert(result.error);
  }
  return result.token;
}

export async function createActivity(name, description){
    const options ={
        method: "POST",
        headers:{
            "Content-type":"application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
            name,
            description,
        }),
    }
    const response= await fetch(`${BASE}/activities`, options);
    const result= await response.json();
    return result
}

export async function updateActivity(name, description, id){
    const options={
        method:"PATCH",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
            name,
            description,
        }),
    };
    const response= await fetch(`${BASE}/activities/${id}`, options);
    const result= await response.json();
    return result;
}

export async function createRoutine(name, goal, isPublic){
  const options ={
      method: "POST",
      headers:{
          "Content-type":"application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
          name,
          goal,
          isPublic,
      }),
  }
  const response= await fetch(`${BASE}/routines`, options);
  const result= await response.json();
  return result
}
export async function addActivity(routineId, activityId, count, duration){
  const options ={
    method: "POST",
    headers:{
        "Content-type":"application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      activityId,
        count,
        duration,
    }),
}
const response= await fetch(`${BASE}/routines/${routineId}/activities`, options);
const result= await response.json();
console.log(result, "addResult")
return result;
}

export async function updateRoutine(name, goal, id){
  const options={
      method:"PATCH",
      headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
          name,
          goal,
      }),
  };
  const response= await fetch(`${BASE}/routines/${id}`, options);
  const result= await response.json();
  return result;
}

export async function destroyRoutine(id){
  const options={
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    }
  };
  const response = await fetch(`${BASE}/routines/${id}`, options);
  const result = await response.json()
  return result;
}

export async function personalRoutines(username){
  try {
    const response = await fetch(`${BASE}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json()
    return result
  } catch (error) {
    console.log(error);
  }
}

export async function deleteRoutineActivity(id){
  const options={
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    }
  };
  const response = await fetch(`${BASE}/routine_activities/${id}`, options);
  const result = await response.json()
  return result;
}

export async function updateRoutineActivity(routineId, activityId, count, duration){
  const options={
      method:"PATCH",
      headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
          activityId,
          count,
          duration,
      }),
  };
  const response= await fetch(`${BASE}/routines/${routineId}/activities`, options);
  const result= await response.json();
  return result;
}
