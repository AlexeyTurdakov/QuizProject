import React from "react";
import "./Button.css";

const Button = (props) => {
  let cls = ["Button", [props.type]];
  return (
    <button
      onClick={props.onClick}
      className={cls.join(" ")}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
