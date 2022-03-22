import React from "react";
import styles from "../styles/ContactBar.module.css";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { Col, Container, Row } from "reactstrap";

const ContactBar = () => {
  return (
    <nav className={styles.bar}>
      <Container className="text-white">
        <Row className="d-flex">
          <Col md="6" sm="5" xs="6" lg="6" className="float-start">
            <Row>
              <Col md="7" className="d-flex align-items-center p-3 gap-2">
                <FaPhoneSquareAlt size={16} />
                <div>(369) 2900 4800</div>
              </Col>
              <Col md="5" className="d-flex align-items-center p-3 gap-2">
                <ImMail size={16} />
                <div>support@domain.com</div>
              </Col>
            </Row>
          </Col>
          <Col md="6" sm="4" xs="6" lg="6">
            <Row className=" float-end">
              <Col>
                <div className={styles.socialMediaIcon}>
                  <img src="assets/icons/twitter.svg" width={20} />
                </div>
              </Col>
              <Col>
                <div className={styles.socialMediaIcon}>
                  <img src="assets/icons/facebook.svg" width={20} />
                </div>
              </Col>
              <Col>
                <div className={styles.socialMediaIcon}>
                  <img src="assets/icons/instagram.svg" width={20} />
                </div>
              </Col>
              <Col>
                <div className={styles.socialMediaIcon}>
                  <img src="assets/icons/youtube.svg" width={20} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default ContactBar;
