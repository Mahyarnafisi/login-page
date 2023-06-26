import React from "react";
import styles from "./Home.module.css";
import Navbar from "../navbar/Navbar";
function Home(props) {
  return (
    <div className={styles["home"]}>
      <Navbar />
      <h1 className={styles["welcome"]}>Welcome to your Dashboard</h1>
    </div>
  );
}
export default Home;
