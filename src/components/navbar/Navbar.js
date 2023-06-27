import React from "react";
import styles from "./Navbar.module.css";
import { BiLogoCodepen } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";
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
          <li className={styles.item} onClick={logoutHandler}>
            <a className={styles.link} href="#"></a>Logout <BsChevronRight />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
