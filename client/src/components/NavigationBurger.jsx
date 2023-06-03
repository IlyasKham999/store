import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import classes from "../styles/HeaderBurger.module.css";
import logoWhite from "../img/logoW.png";
import Yuovelir from "./Yuovelir";
import Clock from "./Clock";
import Brend from "./Brend";
import Aromat from "./Aromat";
import Izdelia from "./Izdelia";
import iconBack from "../img/back.png";
import { useDispatch, useSelector } from "react-redux";
import {
  activeBrandAction,
  activeClockAction,
  activeJewelryAction,
  activeLeatherAction,
  activePerfumeAction,
} from "../store/BurgerUrl";
import { fromFilterAction } from "../store/FilterState";

function NavigationBurger({ act }) {
  const dispatch = useDispatch();
  const filterState = (stateFrom) => {
    dispatch(fromFilterAction(stateFrom));
  };
  const activPage = useSelector((state) => state.burgerUrl.activJewelry);
  const activClock = useSelector((state) => state.burgerUrl.activClock);
  const activBrend = useSelector((state) => state.burgerUrl.activBrend);
  const activAromat = useSelector((state) => state.burgerUrl.activAromat);
  const activIzdelia = useSelector((state) => state.burgerUrl.activIzdelia);

  const actFun = () => {
    dispatch(activeJewelryAction(true));
    filterState("add");
  };
  const actClock = () => {
    dispatch(activeClockAction(true));
    filterState("add");
  };
  const actBrand = () => {
    dispatch(activeBrandAction(true));
    filterState("add");
  };
  const actAromat = () => {
    dispatch(activePerfumeAction(true));
    filterState("add");
  };
  const actizdelia = () => {
    dispatch(activeLeatherAction(true));
    filterState("add");
  };

  const styleBorderBottom = {
    borderBottom: "2px solid #fff",
  };
  const styleBorderBottomOff = {
    borderBottom: "none",
  };
  const backFunc = "/";
  return (
    <div className={classes.Jewelry}>
      <div className={classes.wth}>
        <Navigation
          icon={logoWhite}
          iconBurger={iconBack}
          url={backFunc}
        ></Navigation>
      </div>
      <div className={classes.pages}>
        <div>
          <NavLink
            state={{ fromLink: "add" }}
            to="/Jewelry"
            className={classes.active}
            style={
              activPage === true ? styleBorderBottom : styleBorderBottomOff
            }
            onClick={() => {
              actFun();
            }}
          >
            Ювелирные изделия
          </NavLink>
        </div>
        <div className={classes.act}>
          <NavLink
            state={{ fromLink: "add" }}
            to="/Clock"
            className={classes.active}
            style={
              activClock === true ? styleBorderBottom : styleBorderBottomOff
            }
            onClick={() => {
              actClock();
            }}
          >
            часы
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/Brand"
            className={classes.active}
            style={
              activBrend === true ? styleBorderBottom : styleBorderBottomOff
            }
            onClick={() => {
              actBrand();
            }}
          >
            бренды
          </NavLink>
        </div>
        <div>
          <NavLink
            state={{ fromLink: "add" }}
            to="/Perfume"
            className={classes.active}
            style={
              activAromat === true ? styleBorderBottom : styleBorderBottomOff
            }
            onClick={() => {
              actAromat();
            }}
          >
            ароматы
          </NavLink>
        </div>
        <div className={classes.act}>
          <NavLink
            state={{ fromLink: "add" }}
            to="/LeatherProducts"
            className={classes.active}
            style={
              activIzdelia === true ? styleBorderBottom : styleBorderBottomOff
            }
            onClick={() => {
              actizdelia();
            }}
          >
            изделия из кожи
          </NavLink>
        </div>
      </div>
      <div style={{ marginLeft: "162px", marginRight: "162px" }}>
        {activPage === true ? <Yuovelir></Yuovelir> : ""}
        {activClock === true ? <Clock></Clock> : ""}
        {activBrend === true ? <Brend></Brend> : ""}
        {activAromat === true ? <Aromat></Aromat> : ""}
        {activIzdelia === true ? <Izdelia></Izdelia> : ""}
      </div>
    </div>
  );
}

export default NavigationBurger;
