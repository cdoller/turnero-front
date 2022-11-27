import Acordion from "../components/Acordion"
import "../assets/css/Pyr.css"
import ImagenPreguntas from "../assets/statics/preguntas.webp"

const Pyr = ()=>{

    return (
        <div className="pyr position-relative">
            <img src={ImagenPreguntas} alt='imagen de persona con dudas y consultas' width="800px" className="position-absolute zindex-dropdown start-0"/>
            <Acordion></Acordion>  
        </div>
    )
}

export default Pyr