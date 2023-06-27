import React from "react";
import styles from "./Navbar.module.css";
import { BiLogoCodepen } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";
function Navbar(props) {
  const logoutHandler = () => {
    props.setOffline();
  };
  return (
    <div className={styles["navbar"]}>
      <div className={styles.logo}>
        <h2>
          SuperLogin <BiLogoCodepen />
        </h2>
      </div>
      <div className={styles.navigation}>
        <ul>
          <li className={styles.item}>
            <a className={styles.link} href="#"></a>Messages
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="#"></a>Contact
          </li>
          <motion.li className={styles.item} onClick={logoutHandler} initial={{ x: 250 }} animate={{ x: 0 }} transition={{ ease: "backIn", duration: 1 }}>
            <a className={styles.link} href="#"></a>Logout <BsChevronRight />
          </motion.li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
