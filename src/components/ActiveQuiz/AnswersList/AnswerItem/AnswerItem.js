import React from "react";
import "./AnswerItem.css";

const AnswerItem = (props) => {
  let cls = "AnswerItem";

  if (props.state) {
    cls = cls.concat(" ", props.state);
  }

  return (
    <li className={cls} onClick={() => props.onAnswerClick(props.answer.id)}>
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
