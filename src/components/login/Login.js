import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import LoginImage from "../../assets/7074555_3540174.webp";
import { BsChevronRight } from "react-icons/bs";
import { BiLogoCodepen } from "react-icons/bi";
import { motion } from "framer-motion";

function Login(props) {
  const [emailValidation, setEmailValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validForm, setValidForm] = useState(false);
  console.log(validForm);

  useEffect(() => {
    setValidForm(email.trim().includes("@") && password.trim().length > 3);
  }, [email, password]);

  /** update email state*/
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  /**update password state */
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onValidationEmail = () => {
    setEmailValidation(email.includes("@"));
  };

  const onValidationPassword = () => {
    setPasswordValidation(password.trim().length > 3);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.setOnline();

    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles["login"]}>
      <motion.div className={styles.img} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <div className={styles.text}>
          <BiLogoCodepen className={styles.logo} />
          <h3>
            Welcome to <br /> <span>SuperLogin</span>
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae incidunt distinctio veritatis iste consequuntur id blanditiis minus nam ullam repellendus?</p>
        </div>
        <img src={LoginImage} alt="loginimage" />
      </motion.div>

      <form className={styles.form} action="submit" onSubmit={formSubmitHandler}>
        <h3 className={styles.title}>User Login:</h3>
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input id="email" className={!emailValidation ? styles.inputInvalid : styles.input} type="email" placeholder="Email" onChange={emailChangeHandler} value={email} onBlur={onValidationEmail} />

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input id="password" className={!passwordValidation ? styles.inputInvalid : styles.input} type="password" placeholder="Password" onChange={passwordChangeHandler} value={password} onBlur={onValidationPassword} />

        <button className={`${styles["btn-submit"]} ${!validForm ? styles.btnDisable : ""}`} disabled={!validForm ? true : false}>
          Login <BsChevronRight />
        </button>
      </form>
    </div>
  );
}

export default Login;
