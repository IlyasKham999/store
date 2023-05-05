import React from "react";
import classes from "../styles/HeaderBurger.module.css";


const Izdelia = () => {
  return (
    <div className={classes.fltrBlock}>
        <div className={classes.filtr}>
          <div className={classes.nameColum}>Для кого</div>
          <div>Для женщин</div>
          <div>Для мужчин</div>
        </div>
        <div className={classes.filtr}>
          <div className={classes.nameColum}>Бренды изделий</div>
          <div>Mercury</div>
          <div>Chopard</div>
          <div>Graff</div>
          <div>Garrard</div>
        </div>
    </div>
  );
};

export default Izdelia;
