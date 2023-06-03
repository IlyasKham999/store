import React, { useEffect, useState } from "react";
import classes from "../styles/HeaderBurger.module.css";
import axios from "axios";

const Brend = () => {
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "api/brand")
      .then((response) => setBrand(response.data));
  }, []);
  return (
    <div className={classes.fltrBlock}>
      <div className={classes.filtr}>
        <div className={classes.nameColum}>Бренд</div>
        {brand.map((brand) => (
          <div key={brand.id}>{brand.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Brend;
