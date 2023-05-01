import React from "react";
import classes from "../styles/Maps.module.css";
import iconButton from "../img/arrow.png";

const Maps = () => {
  return (
    <div className={classes.block_maps}>
      <span className={classes.serch}>
        <div className={classes.container}>
          <h2>
            Найди<br></br> бутик около себя
          </h2>
          <h3>Введите свой адрес и узнайте о самых ближайших бутиках к вам</h3>
          <div className={classes.blockInput}>
            <div>
              <input type="email" placeholder="Введите адрес" />
            </div>
            <div>
              <img src={iconButton} alt="" />
            </div>
          </div>
          <hr></hr>
        </div>
      </span>
      <span className={classes.maps}></span>
    </div>
  );
};

export default Maps;
