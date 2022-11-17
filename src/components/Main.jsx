import React, { useState, useEffect } from "react";
import { getActivities, getRoutines, personalRoutines } from "../apiFunctions";
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
  const [userRoutines, setUserRoutines] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      const allProfile = await personalRoutines(userName);
      setUserRoutines(allProfile)
    }
    if(userName){
    fetchProfile()}
  }, [userName])

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


      />
      <Routes>
        <Route path="/routines" element={<Routines routines={routines} activities={activities}/>} />

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
        <Route path="/profile" element={<Profile routines={userRoutines} loggedIn={loggedIn} setLoggedIn={setLoggedIn}
        userName={userName} setUserName={setUserName}/>} />
      </Routes>
    </div>
  );
};

export default Main;
