import React from "react";


//create your first component
const BtnRefrescar = () => {
    const handleClick = () =>{
        window.location.reload();
    }
    return(
        <button onClick={handleClick} className="btnRefrescar">Recargar</button>
    )
};

export default BtnRefrescar;