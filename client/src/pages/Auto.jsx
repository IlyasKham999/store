import React from "react";
import classes from "../styles/HeaderBurger.module.css";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import logoWhite from "../img/logoW.png";
import IconBurger from "../img/x.png";
import Registration from "../components/aut/Registration";
import Autorithation from "../components/aut/Autorithation";

function Auto() {
  const regist = useSelector((state) => state.burger.regist);
  const activUserName = useSelector((state) => state.UserName.name);
  return (
    <div className={classes.Jewelry}>
      <div className={classes.wth} style={{ marginTop: "27px" }}>
        <Navigation
          icon={logoWhite}
          iconBurger={IconBurger}
          url={"/"}
        ></Navigation>
      </div>
      <p style={{ borderTop: "2px solid #fff", margin: "30px 162px" }}></p>
      {regist ? <Registration></Registration> : <Autorithation></Autorithation>}

      <p style={{ borderTop: "2px solid #fff", margin: "30px 162px" }}></p>
      <Footer></Footer>
    </div>
  );
}

export default Auto;
