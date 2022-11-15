import React, {useState, useEffect} from "react";
import { getRoutines } from "../apiFunctions";
import {Navbar, Routines, Login, Register} from "./"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  const[routines, setRoutines]= useState([])

  useEffect(()=>{
    async function fetchRoutines(){
      const allRoutines = await getRoutines();
    setRoutines(allRoutines);
  }
  fetchRoutines();
  }, [])
  return (
    <div id="main">
<Navbar/>
<Routes>
<Route path="/routines" element ={<Routines routines={routines}/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
</Routes>

  </div>
  );
};

export default Main;
