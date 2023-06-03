import React, { useEffect, useState } from "react";
import classes from "../styles/HeaderBurger.module.css";
import NavigationBurger from "../components/NavigationBurger";
import Footer from "../components/Footer";
import ProductItems from "../components/ProductItems";
import { useSelector } from "react-redux";
import axios from "axios";

function LeatherProducts() {
  const [item, setItem] = useState();
  const [brand, setBrand] = useState();
  const fromLink = useSelector((state) => state.from.from);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "api/leatherProducts")
      .then((response) => setItem(response.data));
  }, []);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "api/brand")
      .then((response) => setBrand(response.data));
  }, []);
  if (!brand) {
    return <h1></h1>;
  }
  return (
    <div className={classes.Jewelry}>
      <NavigationBurger></NavigationBurger>
      <p style={{ borderTop: "2px solid #fff", margin: "30px 162px" }}></p>
      <div className={classes.colect}>
        {fromLink === "add" ? (
          <div className={classes.widthItem}>
            {item?.map((obj) => {
              return (
                <ProductItems
                  className={classes.productItemColumns}
                  key={obj.id}
                  name={obj.name}
                  brand={brand[obj.brandId - 1].name}
                  title={obj.title}
                  price={obj.price}
                  image={`LeatherProductsPng/${obj.img}`}
                ></ProductItems>
              );
            })}
          </div>
        ) : fromLink === "wom" ? (
          <div className={classes.widthItem}>
            {item?.map((obj) => {
              if (obj.form === "wom") {
                return (
                  <ProductItems
                    className={classes.productItemColumns}
                    key={obj.id}
                    name={obj.name}
                    brand={brand[obj.brandId - 1].name}
                    title={obj.title}
                    price={obj.price}
                    image={`LeatherProductsPng/${obj.img}`}
                  ></ProductItems>
                );
              }
            })}
          </div>
        ) : fromLink === "man" ? (
          <div className={classes.widthItem}>
            {item?.map((obj) => {
              if (obj.form === "man") {
                return (
                  <ProductItems
                    className={classes.productItemColumns}
                    key={obj.id}
                    name={obj.name}
                    brand={brand[obj.brandId - 1].name}
                    title={obj.title}
                    price={obj.price}
                    image={`LeatherProductsPng/${obj.img}`}
                  ></ProductItems>
                );
              }
            })}
          </div>
        ) : (
          <div className={classes.widthItem}>
            {item?.map((obj) => {
              if (brand[obj.brandId - 1].name === fromLink) {
                return (
                  <ProductItems
                    className={classes.productItemColumns}
                    key={obj.id}
                    name={obj.name}
                    brand={brand[obj.brandId - 1].name}
                    title={obj.title}
                    price={obj.price}
                    image={`LeatherProductsPng/${obj.img}`}
                  ></ProductItems>
                );
              }
            })}
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default LeatherProducts;
