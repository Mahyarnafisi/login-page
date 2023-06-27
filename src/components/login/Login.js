import React from "react";
import styles from "./Login.module.css";
import ButtonPrimary from "../UI/buttons/ButtonPrimary";
import LoginImage from "../../assets/7074555_3540174.webp";
import { BsChevronRight } from "react-icons/bs";
import { BiLogoCodepen } from "react-icons/bi";
function Login(props) {
  return (
    <div className={styles["login"]}>
      <div className={styles.img}>
        <div className={styles.text}>
          <BiLogoCodepen className={styles.logo} />
          <h3>
            Welcome to <br /> <span>SuperLogin</span>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae incidunt distinctio veritatis iste consequuntur id blanditiis minus nam ullam repellendus?</p>
        </div>
        <img src={LoginImage} alt="login image" />
      </div>
      <form className={styles.form} action="submit">
        <h3 className={styles.title}>User Login:</h3>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input id="email" className={styles.input} type="email" placeholder="Email" />

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input id="password" className={styles.input} type="password" placeholder="Password" />
        <button className={styles["btn-submit"]}>
          Login <BsChevronRight />
        </button>
      </form>
    </div>
  );
}

export default Login;
