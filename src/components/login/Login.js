import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import LoginImage from "../../assets/7074555_3540174.webp";
import { BsChevronRight } from "react-icons/bs";
import { BiLogoCodepen } from "react-icons/bi";
function Login(props) {
  const [emailValidation, setEmailValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /** update email state*/
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  /**update password state */
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.setOnline();

    setEmail("");
    setPassword("");
  };

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
      <form className={styles.form} action="submit" onSubmit={formSubmitHandler}>
        <h3 className={styles.title}>User Login:</h3>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input id="email" className={!emailValidation ? styles.inputInvalid : styles.input} type="email" placeholder="Email" onChange={emailChangeHandler} value={email} />

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input id="password" className={!passwordValidation ? styles.inputInvalid : styles.input} type="password" placeholder="Password" onChange={passwordChangeHandler} value={password} />
        <button className={styles["btn-submit"]}>
          Login <BsChevronRight />
        </button>
      </form>
    </div>
  );
}

export default Login;
