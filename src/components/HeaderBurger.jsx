import React from "react";
import classes from "../styles/HeaderBurger.module.css";
import Navigation from "./Navigation";
import logoWhite from "../img/logoW.png";
import IconBurger from "../img/x.png";
import { useDispatch } from "react-redux";
import { activeBorgerAction } from "../store/Burger";

const HeaderBurger = () => {
  const dispatch = useDispatch();
  const activeBurger = () => {
    dispatch(activeBorgerAction(true));
  };

  return (
    <div>
      <div className={classes.main}>
        <div className={classes.content}>
          <Navigation
            icon={logoWhite}
            iconBurger={IconBurger}
            func={activeBurger}
          ></Navigation>
        </div>
      </div>
    </div>
  );
};

export default HeaderBurger;
