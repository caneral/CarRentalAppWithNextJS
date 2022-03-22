import React, { useEffect } from "react";
import { Button, Col, Row } from "reactstrap";
import styles from "../styles/Cars.module.css";
import { AiOutlineDashboard, AiOutlineHeart } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { VscPerson } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
import { useSelector } from "react-redux";
import { fetchCars } from "../features/carSlice";
import { useDispatch } from "react-redux";


const Cars = () => {
  const dispatch = useDispatch()	

  useEffect(() => {
    dispatch(fetchCars())
  },[])

  const cars = useSelector(state => state.car)

  return (
    <div>
      <Row md="2" sm="1" lg="3" xl="4" xs="1">
        {cars.data?.response.results.map((item, index) => {
          return(
            <Col key={index} className="pb-4">
          <div className={styles.Card}>
            <img
              className={styles.CardImage}
              src={item.urls.regular}
            />
            <p className={styles.CardText}>{item.alt_description.length > 25 ? item.alt_description.slice(0,25) + "..." : item.alt_description }  </p>
            <div className={styles.Price}>
              From{" "}
              <p
                className="mx-2"
                style={{ color: "#db4a51", fontWeight: "bold" }}
              >
                $30
              </p>
              / Day
            </div>
            <div className={styles.features}>
              <Row>
                <Col  className="d-flex align-items-center gap-2 my-2">
                  <AiOutlineDashboard size={28} />
                  <div className={styles.subText}>56,500</div>
                </Col>
                <Col  className="d-flex align-items-center gap-2 my-2">
                  <GoSettings size={28} />
                  <div className={styles.subText}>Automatic</div>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex align-items-center gap-2 my-2">
                  <VscPerson size={28} />
                  <div className={styles.subText}>4 Persons</div>
                </Col>
                <Col className="d-flex align-items-center gap-2 my-2">
                  <BsHandbag size={28} />
                  <div className={styles.subText}>3 Bags</div>
                </Col>
              </Row>
            </div>
            <div className={styles.bookNow}>
              <button>BOOK NOW</button>
              <AiOutlineHeart size={24} />
            </div>
          </div>
        </Col>
          )
        })}
      </Row>
    </div>
  );
};

export default Cars;
