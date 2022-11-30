import React from "react";
import '../assets/css/Welcome.css';

const Welcome = () => {
    return (
            
            <div className="container container-style-welcome">
                <div className="row row-welcome">
                    <div className="columna">
                        <h1 className="colum-8" >Bienvenidos</h1>

                        <p className="colum-3" >En este proyecto presentaremos nuestra aplicación, destinada a optimizar la organización de instituciones con alto flujo de personal. Podes solicitar una demostración gratuita de nuestro producto.</p>
                    
                        <a className="colum-2 btn btn-primary button-welcome"  href="#Seccion-Contacto">Solicitar DEMO</a> 
                    </div> 
                </div>           
            </div>
        
    )
}

export default Welcome