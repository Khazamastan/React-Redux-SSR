import React from "react";

const Card = ({ header, content, footer, type = 'normal', headerClass }) => {
    return <div className={`card--${type}`}>
        {header && (<div className={`card--${type}__header ${headerClass}`}>
            {header()}
        </div>)
        }
        {content && <div className={`card--${type}__content`}>
            {content()}
        </div>
        }
        {footer && <div className={`card--${type}__footer`}>
            {footer()}
        </div>
        }
    </div>
}

export default Card;