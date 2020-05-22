import React from "react";
const A = ({children, type='primary', onClick, extraClass}) => {
    return <a onClick={() => onClick && onClick()} className={`link-${type} ${extraClass}`}>{children}</a>
}

export default A;