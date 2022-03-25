import React, { useEffect } from "react";
import styles from "../styles/Cars.module.css";
import { useSelector } from "react-redux";
import { fetchCars } from "../features/carSlice";
import { useDispatch } from "react-redux";
import Card from "./Card";
import CardSubBody from "./CardSubBody";

const Cars = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const cars = useSelector((state) => state.car);

  return (
    <div className="container">
      <div className={styles.Wrapper}>
        {cars.data?.response.results.map((item, index) => {
          return (
            <Card
              key={index}
              imageUri={item.urls.regular}
              title={item.alt_description.length > 25 ? item.alt_description.slice(0,20).toLowerCase() + "..." : item.alt_description.toLowerCase()}
              desc={"$30"}
              buttonText={"BOOK NOW"}
            >
              <CardSubBody feature_1={"56,000"} feature_2={"Automatic"} feature_3={"4 persons"} feature_4={"3 Bags"}/>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Cars;
