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
  FullDetails,
} from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userRoutines, setUserRoutines] = useState([]);
  const [userName, setUserName] = useState("");
  const [singleRoutine, setSingleRoutine] = useState({});

  useEffect(() => {
    async function fetchProfile() {
      const allProfile = await personalRoutines(userName);
      setUserRoutines(allProfile);
    }
    if (userName) {
      fetchProfile();
    }
  }, [userName]);

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
      setActivities(allActivities);
    }
    fetchActivities();
  }, []);

  const getLoggedInUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
    const user = localStorage.getItem("username");
    if (user) {
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
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route
          path="/routines"
          element={
            <Routines
              routines={routines}
              setRoutines={setRoutines}
              activities={activities}
              singleRoutine={singleRoutine}
              setSingleRoutine={setSingleRoutine}
            />
          }
        />

        <Route
          path="/makeroutine"
          element={
            <MakeRoutine routines={routines} setRoutines={setRoutines} />
          }
        />
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
          element={
            <Activities activities={activities} setActivities={setActivities} />
          }
        />
        <Route
          path="/makeactivity"
          element={
            <MakeActivity
              activities={activities}
              setActivities={setActivities}
            />
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <Profile
              routines={userRoutines}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              userName={userName}
              setUserName={setUserName}
            />
          }
        />
        <Route
          path="/fulldetails"
          element={
            <FullDetails
              setRoutines={setRoutines}
              setSingleRoutine={setSingleRoutine}
              setActivities={setActivities}
              routines={routines}
              activities={activities}
              singleRoutine={singleRoutine}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Main;
