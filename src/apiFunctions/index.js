const BASE = "http://fitnesstrac-kr.herokuapp.com/api"

export async function getRoutines(){
  const response= await fetch(`${BASE}/routines`);
  const result = await response.json();
  const routines= result.routines
  return routines;
}
