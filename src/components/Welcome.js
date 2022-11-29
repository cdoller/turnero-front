import React from "react";
import '../assets/css/Welcome.css';

const Welcome = () => {
    return (
            
            <div className="container container-style-welcome">
                <div className="row row-welcome">
                    <h1 className="col-8">Bienvenidos</h1>
                </div>
                <div className="row row-welcome">
                    <p className="col-3">Sed ut perspiciatis unde omnis iste natus error sit volptatem accusantium doloremque.</p>
                </div>
                <div className="row row-welcome">
                    <button className="col-2 btn btn-primary button-welcome">Read more</button> 
                </div>            
            </div>
        
    )
}

export default Welcome