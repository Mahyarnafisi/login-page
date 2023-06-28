import React, { useState, useRef, useEffect, useContext } from "react";
import "./App.css";
import authContext from "./components/state/AuthContext";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import { motion } from "framer-motion";

function App(props) {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    const loginInfo = localStorage.getItem("logged in");
    if (loginInfo === "1") {
      setOnline(true);
    }
  }, []);

  const onlineStatusChanger = () => {
    setOnline(true);
    localStorage.setItem("logged in", "1");
  };
  console.log(online);
  const offlineStatusChanger = () => {
    setOnline(false);
    localStorage.setItem("logged in", "0");
  };
  return (
    <authContext.Provider value={{ online: online }}>
      <div className="app">
        {online && <Home setOffline={offlineStatusChanger} />}
        {!online && <Login setOnline={onlineStatusChanger} />}
      </div>
    </authContext.Provider>
  );
}

export default App;
