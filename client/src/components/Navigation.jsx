import React from "react";
import IconLike from "../img/icon_like.png";
import IconAccaunt from "../img/icon_accaunt.png";
import IconBascet from "../img/icon_bascet.png";
import { NavLink } from "react-router-dom";
import classes from "../styles/Header.module.css";
import { useSelector } from "react-redux";

const Navigation = ({ icon, iconBurger, func, url }) => {
  const activUserName = useSelector((state) => state.UserName.name);
  return (
    <div>
      <div>
        <h1 className={classes.UserName}>{activUserName}</h1>
      </div>
      <div className={classes.nav}>
        <div className={classes.logo}>
          <NavLink to="/">
            <img src={icon} alt="logo"></img>
          </NavLink>
        </div>
        <div className={classes.icon_btn}>
          <NavLink to="/" className={classes.IconLike}>
            <img src={IconLike} alt="" />
          </NavLink>
          <NavLink to="/Auto">
            <img src={IconAccaunt} alt="" />
          </NavLink>
          <NavLink to="/Bascet">
            <img src={IconBascet} alt="" />
          </NavLink>
        </div>
        <div className={classes.burger_menu}>
          {url ? (
            <div>
              <NavLink className={classes.burger_btn} to={url}>
                <img src={iconBurger} alt="" />
              </NavLink>
            </div>
          ) : (
            <NavLink className={classes.burger_btn} onClick={() => func()}>
              <img src={iconBurger} alt="" />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
