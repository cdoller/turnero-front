import React from "react";
import imgTurnero from '../assets/statics/logoTurnero.png'
//import '../assets/css/Header.css'
import '../assets/style/css/index.css'



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
                        <a href="#seccionInfo" className='textNav'>
                            Informacion
                        </a>                        
                    </li>
                    <li>
                        <a href="#seccionProducto" className='textNav'>
                            Producto
                        </a>
                    </li>
                    <li>
                        <a href="#seccionServicios" className='textNav'>
                            Servicios
                        </a>
                    </li>
                    <li>
                        <a href="#seccionQS" className='textNav'>
                            Quienes somos
                        </a>
                    </li>
                    <li>
                        <a href="#seccionContacto" className='textNav'>
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )   
}


export default Header