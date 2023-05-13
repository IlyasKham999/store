import React from "react";
import classes from "../styles/RecommendedCollection.module.css";
import CollectionBlock from "./CollectionBlock";
import leftTopCollec from "../img/leftTop.png";
import leftBottom from "../img/leftBottom.png";
import rightTop from "../img/rightTop.png";
import rightBottom from "../img/rightBottom.png";

const RecommendedCollection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.one_columns}>
        <CollectionBlock
          icon={leftTopCollec}
          name={"КОЛЬЦО jow’s, Cartier"}
          title={"Белое золото, бриллианты"}
          price={"674 000 ₽"}
        ></CollectionBlock>
        <CollectionBlock
          icon={leftBottom}
          name={"КОЛЬЦО croix, Cartier"}
          title={"Желтое, белое, розовое золото"}
          price={"432 000 ₽"}
        ></CollectionBlock>
      </div>
      <div className={classes.two_columns}></div>
      <div className={classes.thre_columns}>
        <CollectionBlock
          icon={rightTop}
          name={"КОЛЬЦО jow’s, Cartier"}
          title={"Белое золото, бриллианты"}
          price={"432 000 ₽"}
        ></CollectionBlock>
        <CollectionBlock
          icon={rightBottom}
          name={"КОЛЬЦО jow’s, Cartier"}
          title={"Белое золото, бриллианты"}
          price={"432 000 ₽"}
        ></CollectionBlock>
      </div>
    </div>
  );
};

export default RecommendedCollection;
