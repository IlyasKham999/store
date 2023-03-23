import React from "react";
import logo from "./img/logo.jpg"
import IconLike from "./img/icon_like.png"
import IconAccaunt from "./img/icon_accaunt.png"
import IconBascet from "./img/icon_bascet.png"
import IconBurger from "./img/burger.png"
import { NavLink } from "react-router-dom";
import classes from "../styles/Header.module.css"

const NavBar = () => {
    return(
        <div className={classes.nav}>
            <div className={classes.logo}>
                <NavLink  to="/">
                    <img src={logo} alt="logo"></img>
                </NavLink>
            </div>
            <div className={classes.icon_btn}>
                <NavLink to="/"><img src={IconLike} alt="" /></NavLink>
                <NavLink to="/ForMan"><img src={IconAccaunt} alt="" /></NavLink>
                <NavLink to="/"><img src={IconBascet} alt="" /></NavLink>
            </div>
            <div className={classes.burger_menu}>
                <img src={IconBurger} alt="" />
            </div>
        </div>
    )
}

export default NavBar;