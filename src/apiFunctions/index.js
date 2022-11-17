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

  console.log(response);
  console.log(result);

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
    return result.activities
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
  return result.routines
}

export async function updateRoutine(title, goal, id){
  const options={
      method:"PATCH",
      headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
          title,
          goal,
      }),
  };
  const response= await fetch(`${BASE}/routines/${id}`, options);
  const result= await response.json();
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
