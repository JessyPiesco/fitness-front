import React, {useState, useEffect} from "react";
import { getRoutines } from "../apiFunctions";
import {Navbar, Routines} from "./"

const Main = () => {
  const[routines, setRoutines]= useState([])
  return (
    <div id="main">
<Navbar/>
  </div>
  );
};

export default Main;
