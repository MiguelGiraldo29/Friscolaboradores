 import React, { useState } from "react";
 import '../hojas de estilos/login.css'
 import '../pages/Inicio'
 import { Link, useNavigate } from "react-router-dom";

 function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    //datos simulados
    const hardcodedUser = {
        username: "mangiraldo",
        password: "Maxi0226."
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === hardcodedUser.username && password=== hardcodedUser.password) {
            navigate("/Inicio");
        }else{
            setError("Usuario o Contraseña invalidos")
        }
    }
     return(
        <div className="contenPadre">
         <div className="wrapper">
             <form action="" onSubmit={handleLogin}>
                 <h1>Iniciar Sesion</h1>
                 <strong><p>Friscolaboradores</p></strong>
                 <div className="input-box">
                     <input type="text" placeholder="username"  value={username} onChange={(e) => setUsername(e.target.value)} required />
                     <i className="bx bxs-user"></i>

                 </div>
                 <div className="input-box">

                     <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                     <i className="bx bxs-lock-alt"></i>

                 </div>
                
                 <div className="remenber-forgot">
                     <label>
                         <input type="checkbox" />Recordar Contraseña 
                     </label>
                     {/* <a href="#">forgot password?</a> */}
                 </div>
                 {error && <p style={{color: 'red'}}>{error}</p>}
                 <button className="btn" type="submit" >
                 Login
                 </button>


                 {/* <div className="register-link">
                     <p>Don´t have an account? <a href="#">Register</a></p>
                 </div> */}
             </form>
         </div>
         </div>
     );
 }
 export default Login