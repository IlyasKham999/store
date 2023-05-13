import React from "react";
import classes from "../styles/ForManWom.module.css";

const ForManWom = () => {
  return (
    <div className={classes.ForManWom}>
      <span className={classes.ForMan}>
        <div className={classes.fonn}>
          <div>Перейти в раздел</div>
          <h1>Для мужчин</h1>
          <hr className={classes.line}></hr>
        </div>
      </span>
      <span className={classes.ForWomen}>
        <div className={classes.fonn}>
          <div>Перейти в раздел</div>
          <h1>Для женщин</h1>
          <hr className={classes.line}></hr>
        </div>
      </span>
    </div>
  );
};

export default ForManWom;
