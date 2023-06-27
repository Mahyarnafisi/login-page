import React from "react";
import styles from "./Home.module.css";
import Navbar from "../navbar/Navbar";
import { BiLogoCodepen } from "react-icons/bi";
function Home(props) {
  const logoutHandler = () => {
    props.setOffline();
  };
  return (
    <div className={styles["home"]}>
      <Navbar setOffline={logoutHandler} />
      <BiLogoCodepen className={styles.logo} />
      <h1 className={styles["welcome"]}>Welcome to your Dashboard</h1>
    </div>
  );
}
export default Home;
