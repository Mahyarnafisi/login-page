import React from "react";
import "../buttons/ButtonPrimary.css";
function ButtonPrimary(props) {
  return (
    <button className="btn-primary" onClick={props.children}>
      Login
    </button>
  );
}

export default ButtonPrimary;
