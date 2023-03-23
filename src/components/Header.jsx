import React from "react";
import classes from "../styles/Header.module.css"
import NavBar from "./NavBar";
import MainProduct from "./MainProduct";

const Header = () => {
    return(
        <div className={classes.main}>
            <div className={classes.content}>
                <NavBar/>
                <MainProduct/>
            </div>
        </div>
    )
}

export default Header;