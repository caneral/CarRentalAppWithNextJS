import React from "react";
import styles from "../styles/HeroSection.module.css";
import NavBar from "./NavBar";

const HeroSection = () => {
  return (
      <div className={styles.hero}>
        <NavBar/>
        <div className="container">
          <div className={styles.headImageText}>
          WELCOME TO LIMOREX
          </div>
          <div className={styles.imageText}>Drive The Car You Ever Dream</div>
          <div className={styles.subImageText}>
          Dolore magna aliqua ut enim ad minim veniam quis nostrud exercita
          ullamco laboris nisiut aliquip ex ea commodo consequat.
        </div>
        </div>
      </div>
  );
};

export default HeroSection;
