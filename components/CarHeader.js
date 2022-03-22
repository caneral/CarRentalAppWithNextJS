import React from "react";
import { Button, Col, Row } from "reactstrap";
import styles from "../styles/CarHeader.module.css";
const CarHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src="assets/images/choosecar.png" />
        <h1 className="h1 fw-bold m-4">CHOOSE YOUR CAR</h1>
        <p>
          Incididunt ut labore dolore magna aliqua umt enim adinim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex consequat aute
          irure dolor in reprehenderit
        </p>
      </div>
      <div className="d-flex gap-1 my-4">
          <Button className={styles.customButton} >LATES DEALS</Button>
          <Button  className={styles.customButton}>ECONOMY CLASS</Button>
          <Button  className={styles.customButton}>PREMIUM CLASS</Button>
      </div>
    </div>
  );
};

export default CarHeader;
