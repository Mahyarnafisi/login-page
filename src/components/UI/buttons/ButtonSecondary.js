import React from "react";
import "./ButtonSecondary.css";
function ButtonSecondary(props) {
  return (
    <button className="btn-secondary" onClick={props.children}>
      Secondary
    </button>
  );
}

export default ButtonSecondary;
