import React, { Component } from "react";
import NavBar from "../NavBar";
import Body from "../Body";
import Footer from "../Body";

const Layout = ({content}) => {
    return (<div>
        <NavBar></NavBar>
        <Body>
            {content()}
        </Body>
        <Footer></Footer>
    </div>)
}

export default Layout;