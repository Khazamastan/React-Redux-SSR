import React, { Component } from "react";
// import "./Navbar.scss";

const NavBar = () => {
    return (
        <nav className="main-nav">
            <ul className="main-nav__list">
                <li className="main-nav__list__address"></li>
                <li className="main-nav__list__open-time"></li>
            </ul>
        </nav>
    )
}

export default NavBar;