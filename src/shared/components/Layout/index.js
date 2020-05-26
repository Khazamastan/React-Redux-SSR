import React, { Component } from "react";
import NavBar from "../NavBar";
import Body from "../Body";
import Footer from "../Footer";

const Layout = ({data, content, type='full'}) => {
    return (<div>
        <div class="border-bottom-1">
            {data && <NavBar {...data}></NavBar>}
        </div>
        <Body type={type}>
            {content()}
        </Body>
        <Footer></Footer>
    </div>)
}

export default Layout;