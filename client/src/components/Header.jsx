import React from "react";
import classes from "../styles/Header.module.css";
import MainProduct from "./MainProduct";
import Navigation from "./Navigation";
import logoBlack from "../img/logo.png";
import IconBurger from "../img/burger.png";
import { useDispatch } from "react-redux";
import { activeBorgerAction } from "../store/Burger";

const Header = () => {
  const dispatch = useDispatch();
  const activeBurger = () => {
    dispatch(activeBorgerAction(false));
  };
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.content}>
          <Navigation
            icon={logoBlack}
            iconBurger={IconBurger}
            func={activeBurger}
          ></Navigation>
          <MainProduct />
        </div>
      </div>
    </div>
  );
};

export default Header;
