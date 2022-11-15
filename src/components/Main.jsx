import React, { useState, useEffect } from "react";
import { getActivities, getRoutines } from "../apiFunctions";
import { Navbar, Routines, Login, Register, Activities } from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActvities] = useState([]);
  // const[logIn, setLogIn] = useState("")
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function fetchRoutines() {
      const allRoutines = await getRoutines();
      setRoutines(allRoutines);
    }
    fetchRoutines();
  }, []);

  useEffect(() => {
    async function fetchActivities() {
      const allActivities = await getActivities();
      setActvities(allActivities);
    }
    fetchActivities();
  }, []);

  const getLoggedInUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getLoggedInUser();
    }
  }, []);

  return (
    <div id="main">
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Routes>
        <Route path="/routines" element={<Routines routines={routines} />} />
        <Route
          path="/login"
          element={
            <Login
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              getLoggedInUser={getLoggedInUser}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/activities"
          element={<Activities activities={activities} />}
        />
      </Routes>
    </div>
  );
};

export default Main;
