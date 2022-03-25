import React from "react";
import styles from "../styles/Input.module.css";

const InputWithIcon = ({ placeHolder, children}) => {
  return (
    <div className={styles.inputwithicon}>
      <input className={styles.input} placeholder={placeHolder} />
      <div className={styles.icon}>{children}</div>
    </div>
  );
};

export default InputWithIcon;
