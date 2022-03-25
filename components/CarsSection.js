import React from "react";
import CarHeader from "./CarHeader";
import Cars from "./Cars";

const CarsSection = () => {
  return (
    <div>
      <div className="container">
        <CarHeader />
        <Cars />
      </div>
    </div>
  );
};

export default CarsSection;
