import React from "react";
import styles from "./Navbar.module.css";
function Navbar(props) {
  return (
    <div className={styles["navbar"]}>
      <div className={styles.logo}>
        <h2>SuperLogin</h2>
      </div>
      <div className={styles.navigation}>
        <ul>
          <li className={styles.item}>
            <a className={styles.link} href="#"></a>Messages
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="#"></a>Contact
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="#"></a>Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
