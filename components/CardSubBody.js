import React from "react";
import styles from "../styles/Card.module.css";
import { AiOutlineDashboard, AiOutlineHeart } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { VscPerson } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
import IconWithText from "./IconWithText";

const CardSubBody = ({ feature_1, feature_2, feature_3, feature_4 }) => {
  return (
    <div className={styles.Wrapper}>
      <IconWithText>
        <AiOutlineDashboard size={24} />
        {feature_1}
      </IconWithText>
      <IconWithText>
        <GoSettings size={24} />
        {feature_2}
      </IconWithText>
      <IconWithText>
        <VscPerson size={24} />
        {feature_3}
      </IconWithText>
      <IconWithText>
        <BsHandbag size={24} />
        {feature_4}
      </IconWithText>
    </div>
  );
};

export default CardSubBody;
