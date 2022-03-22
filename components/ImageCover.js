import React from "react";
import { Container } from "reactstrap";
import styles from "../styles/ImageCover.module.css";

const ImageCover = () => {
  return (
    <div>
      <div className={styles.cover}>
        <Container>
          <div className={styles.headImageText}>
          WELCOME TO LIMOREX
          </div>
          <div className={styles.imageText}>Drive The Car You Ever Dream</div>
          <div className={styles.subImageText}>
          Dolore magna aliqua ut enim ad minim veniam quis nostrud exercita
          ullamco laboris nisiut aliquip ex ea commodo consequat.
        </div>
        </Container>
      </div>
    </div>
  );
};

export default ImageCover;
