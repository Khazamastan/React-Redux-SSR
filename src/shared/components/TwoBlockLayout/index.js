import React, { Component } from "react";
const TwoBlockLayout = ({leftSize, rightSize, leftContent, rightContent}) => {
    return <div className="two-block-layout">
        <div className={`two-block-layout__col-${leftSize}`}>
            {leftContent()}
        </div>
        <div className={`two-block-layout__col-${rightSize}`}>
            {rightContent()}
        </div>
    </div>
}

export default TwoBlockLayout;