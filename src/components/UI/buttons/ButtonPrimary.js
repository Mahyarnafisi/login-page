import React from "react";
import styles from "../buttons/ButtonPrimary.module.css";
function ButtonPrimary(props) {
  return (
    <button className={styles["btn-primary"]} onClick={props.children}>
      Login
    </button>
  );
}

export default ButtonPrimary;
