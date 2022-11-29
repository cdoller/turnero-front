import FormBootstrap from "../components/FormBootstrap";
import React, { useState } from "react";
import axios from "axios";
import "../assets/css/Contacto.css";
import Contactanos from '../assets/statics/contactanos.webp';


const Contacto = ()=>{
    const [user, setUser] = useState({nombre: "", mail: "", telefono: "", mensaje: ""});
    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState(false);
    const [cargando, setCargando] = useState(false);

    const handleChange = (event)=>{
        const prop = event.target.name;
        const value = event.target.value;

        setUser({...user, [prop]: value});
        setSucess(false);
        setError(false);
        console.log(user);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        setCargando(true);
        // LOCAL http://127.0.0.1:8000/api/insertarContacto
        // PRODUCCION https://turnero-proyecto-integrador.herokuapp.com/api/insertarContacto
        axios({
            url: "http://127.0.0.1:8000/api/insertarContacto",
            method: "POST",
            data: user
        }).then((response)=>{
            console.log(response);
            setUser({nombre: "", mail: "", telefono: "", mensaje: ""});
            setSucess(true);
            setCargando(false);
        }).catch((response)=>{
            setError(true);
            setCargando(false);
        })
    }

    return(
        <div className="seccion-contacto position-relative" id="Seccion-Contacto">
            <div className="backgroundBox position-absolute end-0 zindex-dropdown"></div>
            <div className="contenedor-formulario">
                <div className="header-formulario">
                    <div className="textos-formulario">
                        <h4 className="subtitulo-formulario">Si tenes alguna consulta o si deseas ver una demo</h4>
                        <h2 className="titulo-formulario">Dejanos tu mensaje</h2>
                    </div>
                    <img src={Contactanos} alt='Imagen de contactanos' className="imagen-formulario-tablet position-relative zindex-modal"/>
                </div>
                <FormBootstrap 
                    user={user} 
                    handleChange={handleChange} 
                    handleSubmit={handleSubmit} 
                    sucess={sucess} 
                    error={error}
                    cargando={cargando}
                />
            </div>
            <img src={Contactanos} alt='Imagen de contactanos' className="imagen-formulario position-relative zindex-modal"/>
            
        </div>
    )
}

export default Contacto;