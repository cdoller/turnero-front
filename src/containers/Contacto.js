import Form from "../components/Form";
import FormBootstrap from "../components/FormBootstrap";
import React, { useState } from "react";
import axios from "axios";
import "../assets/css/Contacto.css";

//import {Suspense, lazy} from 'react';
//const Loading = lazy (()=>import('../assets/statics/Loading.gif'));




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
        <div>
            <h2>Contacto</h2>
            <div className="seccion-contacto">
                <FormBootstrap 
                    user={user} 
                    handleChange={handleChange} 
                    handleSubmit={handleSubmit} 
                    sucess={sucess} 
                    error={error}
                    cargando={cargando}
                />
            </div>
        </div>
    )
}

export default Contacto;