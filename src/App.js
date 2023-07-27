import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import axios from "axios";

import PublicRoutes from "./components/utils/PublicRoutes";
import {
  getToken,
  removeUserSession,
  setUserSession,
} from "./components/utils/common";

import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#0e3780";
      setMode("dark");
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
    }
  };

  const loggedout = () => {
    alert('Signed Out!');
  }

  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get(`http://localhost:3000/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
  }

  return (
    <>
      <h1>
        <div>
          <BrowserRouter>
            <div className="header">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
              >
               1. Home|
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/login"
              >
                2. SignIn|
              </NavLink>
              
              <button type="button" onClick={loggedout}>SignOut</button>
            </div>
            <div>
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route index element={<Home />} />
                <Route element={<PublicRoutes />}>
                  <Route path="/login" element={<Login />} />
                </Route>
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </h1>
      <div>
        <Navbar toggleMode={toggleMode} />
      </div>

      <div>
        <Weather />
      </div>
    </>
  );
}

export default App;
