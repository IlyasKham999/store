import React from "react";
import classes from "../styles/Header.module.css";
import IconRing from "../img/ring.png";

const MainProduct = () => {
  return (
    <div className={classes.mainProduct}>
      <div>
        <span className={classes.board}>
          <div className={classes.nameBoard}>
            <h1>HIGH JEWELRY</h1>
          </div>
          <div>
            <span>
              <hr className={classes.line} />
            </span>
            <span>
              <div className={classes.line2}>Смотреть коллекцию</div>
            </span>
          </div>
        </span>
        <span className={classes.IconRing}>
          <img src={IconRing} alt="" />
        </span>
      </div>
      <div className={classes.head_footer}>
        <span className={classes.language}>
          <button>RU</button>
          <button>EN</button>
        </span>
        <span className={classes.info_ring}>
          <p className={classes.title}>КОЛЬЦО TRINITY, CARTIER</p>
          <p className={classes.body}>Белое золото, бриллианты</p>
          <p className={classes.price}>498 000 ₽</p>
        </span>
      </div>
    </div>
  );
};

export default MainProduct;
