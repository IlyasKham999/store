import React, { useState } from "react";
import classes from "../styles/HeaderBurger.module.css";
import Navigation from "./Navigation";
import logoWhite from "../img/logoW.png";
import IconBurger from "../img/x.png";
import { useDispatch, useSelector } from "react-redux";
import { activeBorgerAction } from "../store/Burger";
import { NavLink } from "react-router-dom";
import Yuovelir from "./Yuovelir";
import Clock from "./Clock";
import Brend from "./Brend";
import Aromat from "./Aromat";
import Izdelia from "./Izdelia";
import apleSotre from "../img/iconApleStore.png";
import googlePlay from "../img/iconPlayMarcet.png";
import iconButton from "../img/arrow.png";
import iconFacebook from "../img/iconfacebook.png";
import iconinstagram from "../img/iconInstagram.png";
import {
  activeBrandAction,
  activeClockAction,
  activeJewelryAction,
  activeLeatherAction,
  activePerfumeAction,
} from "../store/BurgerUrl";

const HeaderBurger = () => {
  const dispatch = useDispatch();
  const activeBurger = () => {
    dispatch(activeBorgerAction(true));
  };
  const activPage = useSelector((state) => state.burgerUrl.activJewelry);
  const activClock = useSelector((state) => state.burgerUrl.activClock);
  const activBrend = useSelector((state) => state.burgerUrl.activBrend);
  const activAromat = useSelector((state) => state.burgerUrl.activAromat);
  const activIzdelia = useSelector((state) => state.burgerUrl.activIzdelia);

  const actFun = (event) => {
    dispatch(activeJewelryAction(true));
  };
  const actClock = (event) => {
    dispatch(activeClockAction(true));
  };
  const actBrend = () => {
    dispatch(activeBrandAction(true));
  };
  const actAromat = () => {
    dispatch(activePerfumeAction(true));
  };
  const actizdelia = () => {
    dispatch(activeLeatherAction(true));
  };

  const styleBorderBottom = {
    borderBottom: "2px solid #fff",
  };
  const styleBorderBottomOff = {
    borderBottom: "none",
  };
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.content}>
          <div className={classes.wth}>
            <Navigation
              icon={logoWhite}
              iconBurger={IconBurger}
              func={activeBurger}
            ></Navigation>
          </div>
          <div className={classes.pages}>
            <div>
              <NavLink
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
                className={classes.active}
                style={
                  activBrend === true ? styleBorderBottom : styleBorderBottomOff
                }
                onClick={() => {
                  actBrend();
                }}
              >
                бренды
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/Perfume"
                className={classes.active}
                style={
                  activAromat === true
                    ? styleBorderBottom
                    : styleBorderBottomOff
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
                to="/LeatherProducts"
                className={classes.active}
                style={
                  activIzdelia === true
                    ? styleBorderBottom
                    : styleBorderBottomOff
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
          <div className={classes.headerBottom}>
            <div className={classes.colection}>
              <div>
                <div className={classes.titleText}>
                  Новая коллекция by Mercury
                </div>
                <h1 className={classes.badyText}>JUSTE UN CLOU</h1>
                <div className={classes.nextText}>
                  <div>Cмотреть коллекцию</div>
                  <div>
                    <img src={iconButton} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.telephone}>
              <div className={classes.contact}>
                <h2>телефон горячей линии</h2>
                <div className={classes.telephone}>+7 800 456 456</div>
                <div className={classes.link_social}>
                  <NavLink>
                    <img src={iconFacebook} alt="" />
                  </NavLink>
                  <NavLink>
                    <img src={iconinstagram} alt="" />
                  </NavLink>
                </div>
              </div>
              <div className={classes.subscription}>
                <h4>подпишитесь на новости</h4>
                <div className={classes.inputSubscr}>
                  <div>
                    <input type="email" placeholder="Введите E-mail" />
                  </div>
                  <div>
                    <img src={iconButton} alt="" />
                  </div>
                </div>
                <hr />
                <img style={{ marginBottom: "2px" }} src={apleSotre} alt="" />
                <img src={googlePlay} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBurger;
