import React, { useState } from "react";
import styles from "../styles/NavBar.module.css";
import { MenuItems } from "../fakedb/data";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={styles.bg}>
      <div className="container">
        <header className={styles.Header}>
          <img className={styles.Brand} src="assets/logo/logo.png" />
          <nav>
            <ul className={styles.NavLinks}>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.url}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button className={styles.loginButton}>Login / Register</button>
          <div className={styles.HamburgerIcon} onClick={handleClick}>
            <GiHamburgerMenu size={24} color={"black"} />
          </div>
          <ul className={clicked ? ` ${styles.MobileMenu}` : styles.close}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.url}>{item.title}</a>
                </li>
              );
            })}
            <button className={styles.loginMobileButton}>
              Login / Register
            </button>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default NavBar;
