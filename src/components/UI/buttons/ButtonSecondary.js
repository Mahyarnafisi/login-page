import React from "react";
import styles from "./ButtonSecondary.module.css";
function ButtonSecondary(props) {
  return (
    <button className={styles["btn-secondary"]} onClick={props.children}>
      Secondary
    </button>
  );
}

export default ButtonSecondary;
