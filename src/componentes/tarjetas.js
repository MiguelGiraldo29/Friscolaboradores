import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../hojas de estilos/tarjetas.css';
import { useOrder } from "../contexto/OrderContext";
function Tarjetas() {
    const precios = {
        "Menú 1" : 1100,
        "Menú 2" : 1100,
        "Menú 3" : 2100,
        "Corriente" : 4300,
        "Combo 11" : 5000,
        "Agrandado" : 12000
    }
    const { total } = useOrder();

    const [timeAllowed, setTimeAllowed] = useState(false);

    //Funcion para revisar si es antes o despues de la hora estipulada
    const checkTime = () => {
        const now = new Date();
        const hour = now.getHours();
        const minutes = now.getMinutes();

        const isMorningBlocked = (hour === 9 && minutes >= 30) || (hour >= 10 && hour < 13);
        const isAfternoonAllowed = (hour === 13 || hour === 14  || (hour === 15 && minutes < 30)); 


        if (isMorningBlocked || hour >= 15 && minutes >= 30){
            setTimeAllowed(false);
        }else if (isAfternoonAllowed || (hour >= 8 && hour < 9) || (hour === 9 && minutes < 30)){
            setTimeAllowed(true);

        }else{
            setTimeAllowed(true);
        }
    };

    useEffect(() => {
        const timer = setInterval(checkTime, 1000)
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="contenedor">
            <h1>Friscolaboradores</h1>
            <h3>{total.toLocaleString("es-CO", {style: "currency", currency: "COP", minimunFractionDigits: 0})}</h3>
            {!timeAllowed && <p className="alert">No se pueden hacer pedidos en este horario</p>}
            
            {/* Las tarjetas siempre están visibles */}
            <div className="contenedor-tarjetas">
                <Link to="/formulario" state={{ menu: "Menú 1", price: precios["Menú 1"] }}>
                    <div className="tarjeta">
                        <div className="cara frente">
                            <img src={require("../imagenes/Frisby-Liviano-Sopas.png")} className="img" />
                            <h2>Menú 1</h2>
                        </div>
                        <div className="cara atras">
                            <h3>Sopas</h3>
                            <ul>
                                <li>Sancochito</li>
                                <li>Ajiaquillo</li>
                                <li>Verduras</li>
                                <li>Consome</li>
                            </ul>
                        </div>
                    </div>
                </Link>

                <Link to="/formulario" state={{ menu: "Menú 2", price: precios["Menú 2"] }}>
                    <div className="tarjeta">
                        <div className="cara frente">
                            <img src={require("../imagenes/Pollo-Apanado-Cuarto.png")} className="img" />
                            <h2>Menú 2</h2>
                        </div>
                        <div className="cara atras">
                            <h3>Presa</h3>
                            <ul>
                                <li>Muslo</li>
                                <li>Contra</li>
                                <li>Pechuga</li>
                                <li>Ala</li>
                            </ul>
                        </div>
                    </div>
                </Link>

                <Link to="/formulario" state={{ menu: "Menú 3", price: precios["Menú 3"] }}>
                    <div className="tarjeta">
                        <div className="cara frente">
                            <img src={require("../imagenes/Promociones-FrisbyClasico-Sopa.png")} className="img" />
                            <h2>Menú 3</h2>
                        </div>
                        <div className="cara atras">
                            <h3>Sopa + Presa</h3>
                            <ul>
                                <li>Sopa de elección</li>
                                <li>Muslo</li>
                                <li>Contra</li>
                                <li>Pechuga</li>
                                <li>Ala</li>
                            </ul>
                        </div>
                    </div>
                </Link>
                <Link to="/formulario" state={{ menu: "Combo 11", price: precios["Combo 11"] }}>
                    <div className="tarjeta">
                        <div className="cara frente">
                            <img src={require("../imagenes/Promociones-FrisbyClasico-Sopa.png")} className="img" />
                            <h2>Combo 11</h2>
                        </div>
                        <div className="cara atras">
                            <h3>Combo 11</h3>
                            <ul>
                                <li>Sopa o Frijoles</li>
                                <li>Presa</li>
                                <li>Ensala de elección</li>
 
                            </ul>
                        </div>
                    </div>
                </Link>

                <Link to="/formulario" state={{ menu: "Corriente", price: precios["Corriente"] }}>
                    <div className="tarjeta">
                        <div className="cara frente">
                            <img src={require("../imagenes/Pollo-Apanado-Cuarto.png")} className="img" />
                            <h2>Corriente</h2>
                        </div>
                        <div className="cara atras">
                            <h3>Dos Presas</h3>
                            <ul>
                                <li>Pechuga - Ala</li>
                                <li>Muslo - Contra</li>
                            </ul>
                        </div>
                    </div>
                </Link>
            </div>

            <section className="loader">
                <img src={require("../imagenes/frisby.png")} alt="Frisby Logo" />
            </section>
        </div>
    );
}

export default Tarjetas;