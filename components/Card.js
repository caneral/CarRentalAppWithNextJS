import React from "react";
import styles from "../styles/Card.module.css";
import IconWithText from "./IconWithText";
import { AiOutlineHeart } from "react-icons/ai";

const Card = ({ imageUri, title, desc, buttonText, children }) => {
  return (
    <div className={styles.Card}>
      <div className={styles.CardBody}>
        <img src={imageUri} className={styles.CardImage} />
        <h3 className={styles.CardTitle}>{title}</h3>
        <p className={styles.CardDescription}>
          From <span className={styles.SubDesc}>{desc}</span> / Day
        </p>
        {children}
      </div>
      <div>
        <IconWithText>
          <button className={styles.CardButton}>{buttonText}</button>
          <AiOutlineHeart size={24} />
        </IconWithText>
      </div>
    </div>
  );
};

export default Card;
