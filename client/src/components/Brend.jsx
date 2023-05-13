import React from "react";
import classes from "../styles/HeaderBurger.module.css";


const Brend = () => {
  return (
    <div className={classes.fltrBlock}>
        <div className={classes.filtr}>
          <div className={classes.nameColum}>Бренд</div>
          <div>Rolex</div>
          <div>Omega</div>
          <div>Hublot</div>
          <div>Breitling</div>
          <div>Panerai</div>
          <div>Hublot</div>
        </div>
    </div>
  );
};

export default Brend;
