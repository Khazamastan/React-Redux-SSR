import React, { Component } from "react";
const Body = ({children, type ='full'}) => {
    return <div className={`body body--${type}`}>
        {children}
    </div>
}

export default Body;