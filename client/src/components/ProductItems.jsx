import React from "react";
import classes from "../styles/HeaderBurger.module.css";

function ProductItems({ name, brand, title, price, image }) {
  return (
    <div className={classes.productItem}>
      <img src={require(`../../../server/static/${image}`)} alt="" />
      <div className={classes.itemInfo}>
        <div className={classes.nameProduct}>
          <span className={classes.brend}>
            {name} {brand}
          </span>
        </div>
        <div className={classes.title}>{title}</div>
        <div className={classes.price}>{price} ₽</div>
        <div className={classes.formBascet}>В корзину</div>
      </div>
    </div>
  );
}

export default ProductItems;
