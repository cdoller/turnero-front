import React from "react";
import '../assets/css/Welcome.css';
import NewHeader from "./NewHeader";

const Welcome = () => {
    return (
        <div className="container">
            <header>
                <NewHeader></NewHeader>
            </header>
            <div className="row">
                <h1 className="col-8">Bienvenidos</h1>
            </div>
            <div className="row">
                <p className="col-3">Sed ut perspiciatis unde omnis iste natus error sit volptatem accusantium doloremque.</p>
            </div>
            <div className="row">
                <button className="col-2 btn btn-primary">Read more</button> 
            </div>            
        </div>
        
    )
}

export default Welcome