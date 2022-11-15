const BASE = "http://fitnesstrac-kr.herokuapp.com/api"

export async function getRoutines(){
  const response= await fetch(`${BASE}/routines`);
  const result = await response.json();

  return result;
}

export async function loginUser(username, password) {
    try{
        const loginResult = await fetch(`${BASE_URL}/users/login`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(response => response.json())
          .then(result => {
            console.log(result);
          });
    }
    catch(error){
        console.error(error)
    }
}
