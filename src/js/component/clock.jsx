import React from "react";


//create your first component
const Clock = (props) => {
    return(
        <div>
            
            <h1 className="numeros">{props.seg.toString().padStart(6, '0')}</h1>
        </div>
    )
};

export default Clock;