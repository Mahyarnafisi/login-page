import React, { useState, useRef, useEffect } from "react";
import "./App.css";
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
    <div className="app">
      {online && <Home setOffline={offlineStatusChanger} />}
      {!online && <Login setOnline={onlineStatusChanger} />}
    </div>
  );
}

export default App;
