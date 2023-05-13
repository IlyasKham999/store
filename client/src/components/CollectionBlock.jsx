import React from "react";
import classes from "../styles/CollectionBlock.module.css";

const CollectionBlock = ({ icon, name, title, price }) => {
  return (
    <div className={classes.collection_block}>
      <div className={classes.icon}>
        <img src={icon} alt="" />
      </div>
      <div className={classes.info_product}>
        <h2>{name}</h2>
        <h3>{title}</h3>
        <p className={classes.price}>{price}</p>
      </div>
    </div>
  );
};

export default CollectionBlock;
