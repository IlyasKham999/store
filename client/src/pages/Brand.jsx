import React, { useEffect, useState, Component } from "react";
import classes from "../styles/HeaderBurger.module.css";
import NavigationBurger from "../components/NavigationBurger";
import Footer from "../components/Footer";
import ProductItems from "../components/ProductItems";
import axios from "axios";
import { useSelector } from "react-redux";

function Brand() {
  const [item, setItem] = useState([]);
  const [brand, setBrand] = useState([]);
  const fromLink = useSelector((state) => state.from.from);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "api/brand")
      .then((response) => setItem(response.data));
  }, []);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "api/brand")
      .then((response) => setBrand(response.data));
  }, []);

  return (
    <div className={classes.Jewelry}>
      <NavigationBurger></NavigationBurger>
      <p style={{ borderTop: "2px solid #fff", margin: "30px 162px" }}></p>
      <div style={{ marginTop: "200px" }}></div>
      <Footer></Footer>
    </div>
  );
}

export default Brand;
