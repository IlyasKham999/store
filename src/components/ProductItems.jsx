import React from "react";
import classes from "../styles/HeaderBurger.module.css";
import imgg from "../img/yuovelir.png";

function ProductItems() {
  return (
    <div className={classes.productItem}>
      <img src={imgg} alt="" />
      <div className={classes.itemInfo}>
        <div className={classes.nameProduct}>
          <span>КОЛЬЦО</span>
          <span className={classes.brend}> jow’s, Cartier</span>
        </div>
        <div className={classes.title}>Белое золото, бриллианты</div>
        <div className={classes.price}>674 000 ₽</div>
      </div>
    </div>
  );
}

export default ProductItems;
