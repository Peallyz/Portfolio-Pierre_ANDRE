import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navigation/Navbar";

const Header = ({ title }) => {
    return (
        <header className="header">
            <NavLink to="/" className={"backToMainPage"}>
                <i className="fa-solid fa-arrow-left"></i>
            </NavLink>
            <h2>{title}</h2>
            <Navbar />
        </header>
    );
};

export default Header;
