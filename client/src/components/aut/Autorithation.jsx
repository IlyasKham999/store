import classes from "../../styles/HeaderBurger.module.css";
import { Navigate, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { activeRegistAction } from "../../store/Burger";
import { UserNameAction } from "../../store/UserName";
import axios from "axios";
import jwt from "jwt-decode";
function Autorithation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const UsersName = (email) => {
    dispatch(UserNameAction(email));
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "api/user/login",
        formData
      );
      UsersName(jwt(response.data.token).email);
      console.log(jwt(response.data.token).email);
      setIsLoggedIn(true);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  const activeRegist = () => {
    dispatch(activeRegistAction(true));
  };

  return (
    <div className={classes.registForm}>
      <form
        className={classes.form}
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
        <h1>Авторизация</h1>
        <input
          className={classes.input}
          placeholder="Ваш e-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className={classes.input}
          placeholder="Пароль"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className={classes.btn} type="submit">
          Войти
        </button>
        <div style={{ marginTop: "15px" }}>
          <div style={{ float: "left", marginRight: "5px" }}>Нет аккаунта?</div>
          <NavLink
            style={{ float: "left", color: "#272727" }}
            onClick={() => activeRegist()}
          >
            Зарегиструруйся!
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default Autorithation;
