import React from "react";
import '../hojas de estilos/header.css'

function Header(){
    return(
        <nav>
        <div className="logo1">
            <img className="logo" src={require("../imagenes/logo-frisby.svg").default}/>
            <img className="logo2" src={require("../imagenes/frisby-modal-2.png")}/>
        </div>
        
        
       
    </nav>
    );
}
export default Header
