import React from "react";
import classes from "../styles/HeaderBurger.module.css";
import NavigationBurger from "../components/NavigationBurger";
import Footer from "../components/Footer";
import ProductItems from "../components/ProductItems"

function Jewelry() {
  return (
    <div className={classes.Jewelry}>
      <NavigationBurger></NavigationBurger>
      <p style={{ borderTop: "2px solid #fff", margin: "30px 162px" }}></p>
      <div className={classes.colect}>
        <ProductItems></ProductItems>
        <ProductItems></ProductItems>
        <ProductItems></ProductItems>
        <ProductItems></ProductItems>

        <ProductItems></ProductItems>
        <ProductItems></ProductItems>
        <ProductItems></ProductItems>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default Jewelry;
