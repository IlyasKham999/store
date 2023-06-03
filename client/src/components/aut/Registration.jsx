import classes from "../../styles/HeaderBurger.module.css";
import { Navigate, NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { activeRegistAction } from "../../store/Burger";
import axios from "axios";

function Registration() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "api/user/registration",
        formData
      );
      activeRegist();
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const activeRegist = () => {
    dispatch(activeRegistAction(false));
  };
  return (
    <div className={classes.registForm}>
      <form
        className={classes.form}
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
        <h1>РЕГИСТРАЦИЯ</h1>
        <input
          className={classes.input}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ваш e-mail"
        />
        <input
          className={classes.input}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Пароль"
        />
        <button className={classes.btn} type="submit">
          Регистрация
        </button>
        <div style={{ marginTop: "15px" }}>
          <div style={{ float: "left", marginRight: "5px" }}>
            Есть аккаунта?
          </div>
          <NavLink
            style={{ float: "left", color: "#272727" }}
            onClick={() => activeRegist()}
          >
            Авторизируйся!
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Registration;
