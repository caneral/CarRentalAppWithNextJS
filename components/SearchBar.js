import React from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "../styles/SearchBar.module.css";
import { MdLocationOn } from "react-icons/md";
import { FaRegCalendarAlt, FaChevronCircleRight } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col md="3">
            <div className={styles.find}>FIND YOUR PERFECT CAR</div>
          </Col>
          <Col md="7">
              <Row md="2" xs="2" className="py-2">
                <Col>
                  <div className="bg-white d-flex align-items-center justify-content-around px-4 py-3  ">
                    <input
                      style={{
                        fontWeight: 200,
                        fontStyle: "italic",
                        border: 0,
                      }}
                      placeholder="Pickup Location"
                    />
                    <MdLocationOn size={16} color={"#cdcdcd"} />
                  </div>
                </Col>
                <Col>
                  <div className="bg-white d-flex align-items-center justify-content-around px-4 py-3  ">
                    <input
                      style={{
                        fontWeight: 200,
                        fontStyle: "italic",
                        border: 0,
                      }}
                      placeholder="Drop-Off Location"
                    />
                    <MdLocationOn size={16} color={"#cdcdcd"} />
                  </div>
                </Col>
              </Row>
              <Row md="2" xs="2" className="py-2">
                <Col>
                  <div className="bg-white d-flex align-items-center justify-content-around px-4 py-3  ">
                    <input
                      style={{
                        fontWeight: 200,
                        fontStyle: "italic",
                        border: 0,
                      }}
                      placeholder="Pickup Date/Time"
                    />
                    <FaRegCalendarAlt size={16} color={"#cdcdcd"} />
                  </div>
                </Col>
                <Col>
                  <div className="bg-white d-flex align-items-center justify-content-around px-4 py-3  ">
                    <input
                      style={{
                        fontWeight: 200,
                        fontStyle: "italic",
                        border: 0,
                      }}
                      placeholder="Drop-Off Date/Time"
                    />
                    <FaRegCalendarAlt size={16} color={"#cdcdcd"} />
                  </div>
                </Col>
              </Row>
          </Col>
          <Col md="2">
              <div className={styles.searchButton}>
                <FaChevronCircleRight size={24} color={"white"} />
                SEARCH
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;
