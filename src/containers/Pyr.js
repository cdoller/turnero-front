import Acordion from "../components/Acordion"
import "../assets/css/Pyr.css"
import ImagenPreguntas from "../assets/statics/preguntas.webp"


const Pyr = ()=>{

    return (
        <div className="pyr position-relative">
            <img src={ImagenPreguntas} alt='imagen de persona con dudas y consultas' className="position-absolute zindex-dropdown start-0 imagen-acordeon"/>
            <img src={ImagenPreguntas} alt='imagen de persona con dudas y consultas' className="imagen-acordeon-2"/>
            <Acordion></Acordion>  
        </div>
    )
}

export default Pyr