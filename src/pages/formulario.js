import React, { useEffect, useState } from "react";
import '../hojas de estilos/formulario.css'
import Header from "../componentes/header";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useOrder } from "../contexto/OrderContext";
function Formulario() {
    const location = useLocation();
    const selectedMenu = location.state?.menu || "";
    const selectedPrice = location.state?.price || 0;

    const { addTotal } = useOrder();
    
    const [timeAllowed, setTimeAllowed] = useState(false);
    const [morningOrderCount, setMorningOrderCount] =  useState(0);
    const [afternoonOrderCount, setAfternoonOrderCount] = useState(0);

    const now = new Date();
    const today = now.toDateString();

    const isMorningTime = () => {
        const hour = now.getHours();
        const minutes = now.getMinutes();
        return(hour === 8 || (hour === 9 && minutes < 30));
    };

    const isAfternoonTime = () => {
        const hour = now.getHours();
        const minutes = now.getMinutes();
        return (hour === 13 || hour === 14 || (hour === 15 && minutes < 30));
    };

    const checkTime = () => {
        if (isMorningTime() || isAfternoonTime()){
            setTimeAllowed(true);;
        }else {
            setTimeAllowed(false);
        }
    };

    const checkOrderLimit = () => {
        const savedDate = localStorage.getItem('lastOrderDate');
        const morningOrders = localStorage.getItem('morningOrderCount');
        const afternoonOrders = localStorage.getItem('afternoonOrderCount');


        if(savedDate !== today){
            localStorage.setItem('lastOrderDate', today);
            localStorage.setItem('morningOrderCount', 0);
            localStorage.setItem('afternoonOrderCount', 0);
            setMorningOrderCount(0);
            setAfternoonOrderCount(0);
        }else{
            setMorningOrderCount(Number(morningOrders));
            setAfternoonOrderCount(Number(afternoonOrders));
        }
    };

    const updateOrderCount = () => {
        if(isMorningTime()){
            const newCount = morningOrderCount + 1;
            localStorage.setItem('morningOrderCount', newCount);
            setMorningOrderCount(newCount);
        }else if (isAfternoonTime()){
            const newCount = afternoonOrderCount + 1;
            localStorage.setItem('afternoonOrderCount', newCount);
            setAfternoonOrderCount(newCount);
        }
    };
 
    useEffect(() => {
        checkTime();
        checkOrderLimit();
    }, []);

    const handleSubmit = (e) => {
        
        if (!timeAllowed){
            e.preventDefault();
            alert("No se pueden hacer pedidos fuera del horario permitido.");
            
        }else if (isMorningTime() && morningOrderCount >= 1){
            e.preventDefault();
            alert("Ya has realizado el pedido permitido para el horario de la mañana");
            
        }else if (isAfternoonTime() && afternoonOrderCount >= 1){
            e.preventDefault();
            alert("Ya has realizado el pedido permitido en el horario de la tarde ")
        }else{
            updateOrderCount();
            addTotal(selectedPrice);
        }
       

    };
    return (
        <>
            <Header />
            <div className="padre">
                <div className="contenedor-formulario">
                    <form action="https://formspree.io/f/moqgzyoe" method="POST" onSubmit={handleSubmit} target="_blank">
                        <input className="campos" type="number" name="cedula" placeholder="Cédula" required />
                        <input className="campos" type="text" name="nombre" placeholder="Tu Nombre" required />
                        <select className="campos" name="Menú" id="" required defaultValue={selectedMenu}>
                            <option value="Menú 1">Menú 1</option>
                            <option value="Menú 2">Menú 2</option>
                            <option value="Menú 3">Menú 3</option>
                            <option value="Corriente">Corriente</option>
                            <option value="Combo 11">Combo 11</option>
                            <option value="Agrandado">Agrandado</option>
                        </select>
                        <textarea className="campos" name="Observación" placeholder="Observación" required></textarea>
                        <p>Monto Total: {selectedPrice.toLocaleString("es-CO", {style: "currency", currency: "COP", minimumFractionDigits: 0})}</p>
                        <button className="campos" type="submit" disabled={!timeAllowed || (morningOrderCount >= 1 && isMorningTime()) || (afternoonOrderCount >= 1 && isAfternoonTime())}>
                            {timeAllowed && ((morningOrderCount < 1 && isMorningTime()) || (afternoonOrderCount < 1 && isAfternoonTime())) ? "Pedir" : "Pedidos cerrados o límite alcanzado"}
                        </button>
                        <button className="campos">
                            <Link to="/Inicio">Volver a Inicio</Link>
                        </button>
                    </form>
                </div>
                <section className="loader">
                    <img src={require("../imagenes/frisby.png")} alt="Frisby Logo"></img>
                </section>
            </div>
        </>
    );
}

export default Formulario;