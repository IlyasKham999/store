import React from "react";
import classes from "../styles/SubscriptionNews.module.css";
import iconButton from "../img/iconBlackBtn.png";

const SubscriptionNews = () => {
  return (
    <div className={classes.SubscriptionNews}>
      <span className={classes.left_block}></span>
      <span className={classes.right_blok}>
        <div className={classes.right_content}>
          <h2>телефон флагманского магазина</h2>
          <h3>+7 800 456 456</h3>
          <h4>подпишитесь на новости</h4>
          <div className={classes.inputSubscr}>
            <div>
              <input type="email" placeholder="Введите E-mail" />
            </div>
            <div>
              <img src={iconButton} alt="" />
            </div>
          </div>
          <hr></hr>
        </div>
      </span>
    </div>
  );
};

export default SubscriptionNews;
