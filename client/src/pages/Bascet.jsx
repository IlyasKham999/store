import React, { useEffect, useState, Component } from "react";
import classes from "../styles/HeaderBurger.module.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import logoWhite from "../img/logoW.png";
import IconBurger from "../img/x.png";

function Bascet() {
  return (
    <div className={classes.Jewelry}>
      <div className={classes.wth} style={{ marginTop: "27px" }}>
        <Navigation
          icon={logoWhite}
          iconBurger={IconBurger}
          url={"/"}
        ></Navigation>
      </div>
      <div className={classes.bascet}></div>
      <p style={{ borderTop: "2px solid #fff", margin: "30px 162px" }}></p>
      <div style={{ height: "300px" }}></div>
      <p style={{ borderTop: "2px solid #fff", margin: "30px 162px" }}></p>
      <Footer></Footer>
    </div>
  );
}

export default Bascet;
