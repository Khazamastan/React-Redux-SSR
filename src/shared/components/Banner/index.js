import React, { Component } from "react";

const Banner = ({img, height}) => {
    return (<div className="banner" style={{backgroundImage: `url('${img}')`, height: height}}></div>)
}

export default Banner;
