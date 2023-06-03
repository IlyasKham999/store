import React, { useEffect, useState } from "react";
import classes from "../styles/HeaderBurger.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { brandFilterAction, fromFilterAction } from "../store/FilterState";

const Yuovelir = () => {
  const dispatch = useDispatch();
  const filterState = (stateFrom) => {
    dispatch(fromFilterAction(stateFrom));
  };

  const [brand, setBrand] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4322/api/brand/typeId/1")
      .then((response) => setBrand(response.data));
  }, []);

  return (
    <div className={classes.fltrBlock}>
      <div className={classes.filtr}>
        <div className={classes.nameColum}>Для кого</div>
        <div>
          <NavLink
            to="/Jewelry"
            onClick={() => filterState("wom")}
            className={classes.active}
          >
            Для женщин
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/Jewelry"
            onClick={() => filterState("man")}
            className={classes.active}
          >
            Для мужчин
          </NavLink>
        </div>
      </div>
      <div className={classes.filtr}>
        <div className={classes.nameColum}>Бренд ювелирных изделий</div>
        {brand?.map((brand) => (
          <div key={brand.id}>
            <NavLink
              className={classes.brandList}
              onClick={() => filterState(brand.name)}
            >
              {brand.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yuovelir;
