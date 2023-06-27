import React, { useState, useRef } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
// import { motion } from "framer-motion";

import ButtonPrimary from "./components/UI/buttons/ButtonPrimary";
import ButtonSecondary from "./components/UI/buttons/ButtonSecondary";

function App(props) {
  const [online, setOnline] = useState(false);

  const onlineStatusChanger = () => {
    setOnline(!online);
  };
  console.log(online);
  const offlineStatusChanger = () => {
    setOnline(!online);
  };
  return (
    <div className="app">
      {online && <Home setOffline={offlineStatusChanger} />}
      {!online && <Login setOnline={onlineStatusChanger} />}
    </div>
  );
}

export default App;
