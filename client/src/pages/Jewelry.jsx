import React from "react";
import classes from "../styles/HeaderBurger.module.css";
import NavigationBurger from "../components/NavigationBurger";
import Footer from "../components/Footer";
import ProductItems from "../components/ProductItems"
import { useSelector } from "react-redux";


function Jewelry() {
  const items = useSelector((state) => state.items.items);
  return (
    <div className={classes.Jewelry}>
      <NavigationBurger></NavigationBurger>
      <p style={{ borderTop: "2px solid #fff", margin: "30px 162px" }}></p>
      <div className={classes.colect}>
        {items.nameItem.length > 0 ?
        <div>
          <ProductItems></ProductItems>
        </div>
            :
          <h1>Список пустой</h1>
        }
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Jewelry;
