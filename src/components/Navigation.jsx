import React from "react";
import IconLike from "../img/icon_like.png";
import IconAccaunt from "../img/icon_accaunt.png";
import IconBascet from "../img/icon_bascet.png";
import { NavLink } from "react-router-dom";
import classes from "../styles/Header.module.css";

const Navigation = ({ icon, iconBurger, func }) => {
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <NavLink to="/">
          <img src={icon} alt="logo"></img>
        </NavLink>
      </div>
      <div className={classes.icon_btn}>
        <NavLink to="/">
          <img src={IconLike} alt="" />
        </NavLink>
        <NavLink to="/ForMan">
          <img src={IconAccaunt} alt="" />
        </NavLink>
        <NavLink to="/">
          <img src={IconBascet} alt="" />
        </NavLink>
      </div>
      <div className={classes.burger_menu}>
        <div className={classes.burger_btn} onClick={() => func()}>
          <img src={iconBurger} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
