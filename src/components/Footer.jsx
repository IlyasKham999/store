import React from "react";
import classes from "../styles/Footer.module.css";
import logo from "../img/logoFuter.png";
import iconFacebook from "../img/iconfacebook.png";
import iconinstagram from "../img/iconInstagram.png";
import { NavLink } from "react-router-dom";
import iconButton from "../img/arrow.png";
import apleSotre from "../img/iconApleStore.png";
import googlePlay from "../img/iconPlayMarcet.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.topList}>
        <span>работа в компании</span>
        <span>условия пользования</span>
        <span>выходные данные</span>
        <span>политика конфиденциальности</span>
        <span>карта сайта</span>
      </div>
      <div className={classes.boottomList}>
        <div className={classes.logo}>
          <img src={logo} alt="" />
        </div>
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
          <img src={apleSotre} alt="" />
          <img src={googlePlay} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
