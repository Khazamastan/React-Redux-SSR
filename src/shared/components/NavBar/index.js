import React, { Component } from "react";
import { Link } from "react-router-dom";

const logoImg = require('./logo.png');
const NavBar = ({name, address}) => {
    return (
        <nav className="main-nav">
            <ul className="main-nav__list">
                <li className="main-nav__list__left">
                    <Link  to="/">
                        <img className="main-nav__list__left__logo" src="/media/logo.png"></img>
                    </Link>
                    <div>
                        <p className="main-nav__list__left__name">{name}</p>
                        <p className="main-nav__list__left__address">{address}</p>
                    </div>
                    
                </li>
                <li className="main-nav__list__right">
                    <p className="main-nav__list__right__phone">(512) 555-1212</p>
                    <p className="main-nav__list__right__time"><span className="main-nav__list__right__time__open-text">Open</span> - Closes at 10:00 PM</p>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;