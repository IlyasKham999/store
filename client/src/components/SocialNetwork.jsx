import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/SocialNetwork.module.css";
import iconFacebook from "../img/iconfacebook.png";
import iconinstagram from "../img/iconInstagram.png";
import Karusel from "./Karusel";

const SocialNetwork = () => {
  return (
    <div className={classes.block}>
      <div className={classes.text}>
        Мы<br></br> в социальных сетях
      </div>
      <div className={classes.karusel}>
        <Karusel></Karusel>
      </div>
      <div>
        <div className={classes.link_social}>
          <NavLink>
            <img src={iconFacebook} alt="" />
          </NavLink>
          <NavLink>
            <img src={iconinstagram} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SocialNetwork;
