import React, { useContext } from "react";
import authContext from "../state/AuthContext";
import styles from "./Home.module.css";
import Navbar from "../navbar/Navbar";
import { BiLogoCodepen } from "react-icons/bi";
import { motion } from "framer-motion";
function Home(props) {
  const ctx = useContext(authContext);

  const logoutHandler = () => {
    props.setOffline();
  };
  return (
    <motion.div className={styles["home"]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut" }}>
      <Navbar setOffline={logoutHandler} />
      <BiLogoCodepen className={styles.logo} />
      <motion.h1 className={styles["welcome"]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        Welcome to your Dashboard
      </motion.h1>
    </motion.div>
  );
}
export default Home;
