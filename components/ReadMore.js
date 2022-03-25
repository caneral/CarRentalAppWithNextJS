import React, { useEffect } from "react";
import styles from "../styles/ReadMore.module.css";
import { useSelector, useDispatch } from "react-redux";
import { get } from "../features/infoSlice";
const ReadMore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get());
  }, []);

  const informations = useSelector((state) => state.info);
  
  return (
    <div>
      <div className="container">
        <div className={styles.wrapper}>
          {informations?.data.map((item, index) => {
            return (
              <div key={index} className={styles.info}>
                <img src={item.imagePath} width={120} />
                <h4 className={styles.cardText}>
                  {item.title}
                </h4>
                <p className={styles.cardText}>
                  {item.subtitle}
                </p>
                <a href="#">READ MORE</a>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.border} />
    </div>
  );
};

export default ReadMore;
