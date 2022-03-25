import React from "react";
import styles from "../styles/ContactBar.module.css";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import IconWithText from "./IconWithText";
const ContactBar = () => {
  return (
    <div className={styles.bar}>
      <div className="container">
        <header className={styles.Header}>
          <nav>
            <ul className={styles.Left}>
              <li>
                <a>
                  <IconWithText>
                    <FaPhoneSquareAlt size={16} />
                    <div>(369) 2900 4800</div>
                  </IconWithText>
                </a>
              </li>
              <li>
                <a>
                  <IconWithText>
                    <ImMail size={16} />
                    <div>support@domain.com</div>
                  </IconWithText>
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className={styles.NavLinks}>
              <li>
                <a>
                  <img src="assets/icons/twitter.svg" width={20} />
                </a>
              </li>
              <li>
                <a>
                  <img src="assets/icons/facebook.svg" width={20} />
                </a>
              </li>
              <li>
                <a>
                  <img src="assets/icons/instagram.svg" width={20} />
                </a>
              </li>
              <li>
                <a>
                  <img src="assets/icons/youtube.svg" width={20} />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default ContactBar;
