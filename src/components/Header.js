import React from "react";
import imgTurnero from '../assets/statics/logoTurnero.png'
import '../assets/css/Header.css'

const Header = () => {

    return(
        <header>
            <img src={imgTurnero} alt='imagenTurneo'/>
            <nav>
                <ul>
                    <li>
                        Informacion
                    </li>
                    <li>
                        Producto
                    </li>
                    <li>
                        Servicio
                    </li>
                    <li>
                        Quienes somos
                    </li>
                    <li>
                        Contacto
                    </li>
                </ul>
            </nav>
        </header>
    )   
}


export default Header