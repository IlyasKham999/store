import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import classes from "../styles/HeaderBurger.module.css";
import logoWhite from "../img/logoW.png";
import Yuovelir from "./Yuovelir";
import Clock from "./Clock";
import Brend from "./Brend";
import Aromat from "./Aromat";
import Izdelia from "./Izdelia";
import iconBack from "../img/back.png"

function NavigationBurger() {


  const [activPage, setActivPage] = useState(true);
  const [activClock, setActivClock] = useState(false);
  const [activBrend, setActivBrend] = useState(false);
  const [activAromat, setActivAromat] = useState(false);
  const [activIzdelia, setAcctivIzdelia] = useState(false);

  const actFun = () => {
    if (activPage === false) {
      setActivPage(true);
      setActivClock(false);
      setActivBrend(false);
      setActivAromat(false);
      setAcctivIzdelia(false);
    }
  };
  const actClock = () => {
    if (activClock === false) {
      setActivClock(true);
      setActivPage(false);
      setActivBrend(false);
      setActivAromat(false);
      setAcctivIzdelia(false);
    }
  };
  const actBrend = () => {
    if (activBrend === false) {
      setActivClock(false);
      setActivPage(false);
      setActivBrend(true);
      setActivAromat(false);
      setAcctivIzdelia(false);
    }
  };
  const actAromat = () => {
    if (activAromat === false) {
      setActivClock(false);
      setActivPage(false);
      setActivBrend(false);
      setActivAromat(true);
      setAcctivIzdelia(false);
    }
  };
  const actizdelia = () => {
    if (activIzdelia === false) {
      setActivClock(false);
      setActivPage(false);
      setActivBrend(false);
      setActivAromat(false);
      setAcctivIzdelia(true);
    }
  };
  const styleBorderBottom = {
    borderBottom: "2px solid #fff",
  }
  const styleBorderBottomOff = {
    borderBottom: "none"
  }
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
                className={classes.active}
                style={activPage === true ? styleBorderBottom : styleBorderBottomOff}
                onClick={() => {
                  actFun();
                }}
              >
                Ювелирные изделия
              </NavLink>
            </div>
            <div className={classes.act}>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                style={activClock === true ? styleBorderBottom : styleBorderBottomOff}
                onClick={() => {
                  actClock();
                }}
              >
                часы
              </NavLink>
            </div>
            <div>
              <NavLink
                className={classes.active}
                style={activBrend === true ? styleBorderBottom : styleBorderBottomOff}
                onClick={() => {
                  actBrend();
                }}
              >
                бренды
              </NavLink>
            </div>
            <div>
              <NavLink
                className={classes.active}
                style={activAromat === true ? styleBorderBottom : styleBorderBottomOff}
                onClick={() => {
                  actAromat();
                }}
              >
                ароматы
              </NavLink>
            </div>
            <div className={classes.act}>
              <NavLink
                className={classes.active}
                style={activIzdelia === true ? styleBorderBottom : styleBorderBottomOff}
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