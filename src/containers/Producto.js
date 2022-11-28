import '../assets/css/Producto.css'
import CarrouselProducto from '../components/CarrouselProducto';

const Producto = () =>{

    return (
        <>
            <div className="contenedor-seccion-producto position-relative">
                <div className="backgroundBox position-absolute end-0 zindex-dropdown"></div>
                <CarrouselProducto />
            </div>
        </>
    );
}

export default Producto;