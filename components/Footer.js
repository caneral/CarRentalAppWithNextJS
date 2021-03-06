import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.bg}>
      <div className="container">
        <div className={styles.Row}>
          <div className={styles.info}>
            <h4 className={styles.cardHeader}>About Us</h4>
            <p className={styles.cardText}>
              Commodo consequat duis aute irurts dolor in reprehen derit indy
              voluptate velit esse cillum dolore eu fugiat nulla pariatur
              excepteur sint.
            </p>
            <a style={{textDecoration:'none', color:'white'}} href="#" className="text-white">
              READ MORE
            </a>
          </div>
          <div>
            <h4 className={styles.cardHeader}>Quick Links</h4>
            <ul className={styles.ul}>
              <li className="my-2">About Limorex</li>
              <li className="my-2">Autos Gallery</li>
              <li className="my-2">Our Vehicles</li>
              <li className="my-2">Latest News</li>
              <li className="my-2">Get In Touch</li>
            </ul>
          </div>
          <div>
            <h4 className={styles.cardHeader}>Quick Links</h4>
            <ul className={styles.ul}>
              <li className="my-2">About Limorex</li>
              <li className="my-2">Autos Gallery</li>
              <li className="my-2">Our Vehicles</li>
              <li className="my-2">Latest News</li>
              <li className="my-2">Get In Touch</li>
            </ul>
          </div>
          <div>
            <h4 className={styles.cardHeader}>Inventory</h4>
            <ul className={styles.ul}>
              <li className="my-2">Cars by Make</li>
              <li className="my-2">Cars by Body Style</li>
              <li className="my-2">Cars by Price</li>
              <li className="my-2">Cars by Type</li>
            </ul>
          </div>
        </div>
        <div className={styles.cop}>
        (c) 2020 LIMOREX Car Hire Service. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
