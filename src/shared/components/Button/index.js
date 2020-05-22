import React from "react";
const Button = ({children, type='primary', onClick}) => {
    return <button onClick={() => onClick && onClick()} className={`button-${type}`}>{children}</button>
}

export default Button;