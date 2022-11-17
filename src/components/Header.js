import React from "react";
import imgTurnero from '../assets/statics/logoTurnero.png'
import '../assets/css/Header.css'

const Header = () => {
 
    return(
        <header>
            <img src={imgTurnero} width="200px" height="200px" alt='imagenTurneo'/>
            <nav>
                <ul>
                    <li>
                        <a href="#seccionInfo">
                            Informacion
                        </a>                        
                    </li>
                    <li>
                        <a href="#seccionProducto">
                            Producto
                        </a>
                    </li>
                    <li>
                        <a href="#seccionServicios">
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a href="#seccionQS">
                            Quienes somos
                        </a>
                    </li>
                    <li>
                        <a href="#seccionContacto">
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )   
}


export default Header