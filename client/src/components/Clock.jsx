import React, { useEffect, useState } from "react";
import classes from "../styles/HeaderBurger.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fromFilterAction } from "../store/FilterState";

const Clock = () => {
  const dispatch = useDispatch();
  const [brand, setBrand] = useState([]);
  const filterState = (stateFrom) => {
    dispatch(fromFilterAction(stateFrom));
  };
  useEffect(() => {
    axios
      .get("http://localhost:4322/api/brand/typeId/2")
      .then((response) => setBrand(response.data));
  }, []);
  return (
    <div className={classes.fltrBlock}>
      <div className={classes.filtr}>
        <div className={classes.nameColum}>Для кого</div>
        <div>
          <NavLink
            to="/Clock"
            className={classes.active}
            onClick={() => filterState("wom")}
          >
            Для женщин
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/Clock"
            className={classes.active}
            onClick={() => filterState("man")}
          >
            Для мужчин
          </NavLink>
        </div>
      </div>
      <div className={classes.filtr}>
        <div className={classes.nameColum}>Бренд часов</div>
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

export default Clock;
