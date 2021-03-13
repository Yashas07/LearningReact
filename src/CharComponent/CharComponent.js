import React from 'react'

import './CharComponent.css'
const charStyleComponent = (props) => {
    return (
        <div className="charStyle">
            <p onClick={props.click}>{props.letter}</p>
        </div>
    )
}

export default charStyleComponent;