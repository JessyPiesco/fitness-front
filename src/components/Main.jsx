import React, { useState, useEffect } from "react";
import { getRoutines } from "../apiFunctions";
import { Navbar, Routines, Login, Register } from "./";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = () => {
  const [routines, setRoutines] = useState([]);
  // const[logIn, setLogIn] = useState("")
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function fetchRoutines() {
      const allRoutines = await getRoutines();
      setRoutines(allRoutines);
    }
    fetchRoutines();
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
      <Navbar />
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
      </Routes>
    </div>
  );
};

export default Main;
