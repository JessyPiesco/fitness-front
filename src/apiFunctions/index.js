const BASE = "http://fitnesstrac-kr.herokuapp.com/api";

export async function getRoutines() {
  const response = await fetch(`${BASE}/routines`);
  const result = await response.json();

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
        password
      }),
    });
    const resp = await loginResult.json();
    console.log(resp)
    return resp.token;
  } catch (error) {
    console.error(error);
  }
}

export async function registerUser(username, password) {
    const options = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, body: JSON.stringify({
            username, 
            password
        })
    }
    const response = await fetch(`${BASE}/users/register`,options)
    const result = await response.json()

    console.log(response)
    console.log(result)

    if (result.error){
        alert ("Account is already taken. Please choose a different Username")
    }
    return result.token
}
