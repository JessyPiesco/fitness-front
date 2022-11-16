import React, { useState, useEffect } from "react";
import { getActivities, getRoutines } from "../apiFunctions";
import {
  Navbar,
  Routines,
  Login,
  Register,
  Activities,
  Home,
  Profile,
  MakeActivity,
  MakeRoutine,
} from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActvities] = useState([]);
  // const[logIn, setLogIn] = useState("")
  const [loggedIn, setLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState([]);
  const [userName, setUserName] = useState("");

  

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
    const user = localStorage.getItem("username");
    if(user) {
      setUserName(user);
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
      <Navbar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        userProfile={userProfile}
        setUserProfile={setUserProfile}
      />
      <Routes>
        <Route path="/routines" element={<Routines routines={routines} />} />

        <Route path="/makeroutine" element={<MakeRoutine />} />
        <Route
          path="/login"
          element={
            <Login
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              getLoggedInUser={getLoggedInUser}
              userName={userName}
              setUserName={setUserName}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/activities"
          element={<Activities activities={activities} />}
        />
        <Route path="/makeactivity" element={<MakeActivity />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn} routines={routines}/>} />
      </Routes>
    </div>
  );
};

export default Main;
