import React from "react";
import imgTurnero from '../assets/statics/logoTurnero.png'
import '../assets/css/Header.css'


const Header = () => {
 
    return(
        <header> 
            <img src={imgTurnero} 
            a href="#Home" 
            width="200px" 
            height="200px" 
            alt='imagenTurneo'/>
            <nav>
                <ul>
                    <li>
                        <a href="#seccionInfo" className='text-decoration-none'>
                            Informacion
                        </a>                        
                    </li>
                    <li>
                        <a href="#seccionProducto" className='text-decoration-none'>
                            Producto
                        </a>
                    </li>
                    <li>
                        <a href="#seccionServicios" className='text-decoration-none'>
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a href="#seccionQS" className='text-decoration-none'>
                            Quienes somos
                        </a>
                    </li>
                    <li>
                        <a href="#seccionContacto" className='text-decoration-none'>
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )   
}


export default Header