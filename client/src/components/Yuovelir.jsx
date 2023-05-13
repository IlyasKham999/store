import React from "react";
import classes from "../styles/HeaderBurger.module.css";
import { NavLink } from "react-router-dom";

const Yuovelir = () => {
  return (
    <div className={classes.fltrBlock}>
      <div className={classes.filtr}>
        <div className={classes.nameColum}>Для кого</div>
        <div>
          <NavLink to="/Jewelry" className={classes.active}>Для женщин</NavLink>
        </div>
        <div>
          <NavLink to="/Jewelry" className={classes.active}>Для мужчин</NavLink>
        </div>
      </div>
      <div className={classes.filtr}>
        <div className={classes.nameColum}>Бренд ювелирных изделий</div>
        <div>
          <NavLink className={classes.active}>Mercury</NavLink>
        </div>
        <div>
          <NavLink className={classes.active}>Chopard</NavLink>
        </div>
        <div>
          <NavLink className={classes.active}>Graff</NavLink>
        </div>
        <div>
          <NavLink className={classes.active}>Garrard</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Yuovelir;
