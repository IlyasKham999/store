import React from "react";
import classes from "../styles/HeaderBurger.module.css";


const Clock = () => {
  return (
    <div className={classes.fltrBlock}>
        <div className={classes.filtr}>
          <div className={classes.nameColum}>Для кого</div>
          <div>Для женщин</div>
          <div>Для мужчин</div>
        </div>
        <div className={classes.filtr}>
          <div className={classes.nameColum}>Бренды часов</div>
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

export default Clock;