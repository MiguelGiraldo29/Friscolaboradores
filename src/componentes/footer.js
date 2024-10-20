import React from "react";
import '../hojas de estilos/footer.css';


function Footer(){
    return(

        <footer>
        <img src={require("../imagenes/footer.png")} className="logo" alt="logo" />
        <div class="redes">
        
            <a href="https://www.facebook.com/frisbyfans" target="blank">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/frisbylohace/" target="blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://x.com/frisbylohace?lang=es" target="blank">
                <i class="fa-brands fa-twitter"></i>
            </a>
        </div>
        <span>Copyrigth Frisby SA BIC | Todos los derechos estan reservados</span>
    </footer>
    );
}
export default Footer
