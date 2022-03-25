import React from "react";
import styles from "../styles/CarHeader.module.css";
import Button from "./Button";
const CarHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src="assets/images/choosecar.png" />
        <h1>CHOOSE YOUR CAR</h1>
        <p>
          Incididunt ut labore dolore magna aliqua umt enim adinim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex consequat aute
          irure dolor in reprehenderit
        </p>
      </div>
      <div className={styles.ButtonGroups}>
          <Button title={'LATEST DEALS'}/>
          <Button title={'ECONOMY CLASS'}/>
          <Button title={'PREMIUM CLASS'}/>
      </div>
    </div>
  );
};

export default CarHeader;
