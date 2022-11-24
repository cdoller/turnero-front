import Form from "../components/Form";
import { useState } from "react";
import axios from "axios";

const Contact2 = ()=>{
    const [user, setUser] = useState({nombre: "", mail: "", telefono: "", mensaje: ""});
    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (event)=>{
        const prop = event.target.name;
        const value = event.target.value;

        setUser({...user, [prop]: value});
        setSucess(false);
        setError(false);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        // LOCAL http://127.0.0.1:8000/api/insertarContacto
        // PRODUCCION https://turnero-proyecto-integrador.herokuapp.com/api/insertarContacto
        axios({
            url: "https://turnero-proyecto-integrador.herokuapp.com/api/insertarContacto",
            method: "POST",
            data: user
        }).then((response)=>{
            console.log(response);
            setUser({nombre: "", mail: "", telefono: "", mensaje: ""});
            setSucess(true);
        }).catch((response)=>{
            setError(true);
        })
    }

    return(
        <div>
            <Form user={user} handleChange={handleChange} handleSubmit={handleSubmit} sucess={sucess} error={error}/>
        </div>
    )
}

export default Contact2;