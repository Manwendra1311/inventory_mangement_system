import React from "react";
import styles from "./ActionButton.module.css";

const ActionButton = ({ buttonText, click }) => {
  return (
    <div
      className={
        buttonText === "Approve"
          ? styles.approval_action_button_approve
          : styles.approval_action_button_decline
      }
      onClick={()=>click(buttonText)}
    >
      {buttonText}
    </div>
  );
};

export default ActionButton;
