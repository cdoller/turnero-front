import '../assets/css/Producto.css'
import CarrouselProducto from '../components/CarrouselProducto';
import {FaCalendarAlt, FaWhatsapp, FaStar} from "react-icons/fa";

const Producto = () =>{

    return (
        <>
            <div className="contenedor-seccion-producto position-relative">
                <div className="backgroundBox position-absolute end-0 zindex-dropdown"></div>
                <CarrouselProducto />
                <div className='detalles-productos'>
                    <h3>MULTIPLES BENEFICIOS</h3>
                    <div className='detalles-productos-text'>
                        <div className='box-icon-text'>
                            <FaCalendarAlt className='detalle-producto-icons' />
                        </div>
                        <span>Agiliza tu agenda cubriendo huecos. Visualiza, crea y administra múltiples agendas desde un mismo lugar.</span>
                    </div>

                    <div className='detalles-productos-text'>
                        <div className='box-icon-text'>
                            <FaStar className='detalle-producto-icons' />
                        </div>
                        <span>Crea fidelidad y seguridad en los pacientes, profesionales y administrativos.</span>
                    </div>

                    <div className='detalles-productos-text'>
                        <div className='box-icon-text'>
                            <FaWhatsapp className='detalle-producto-icons' />
                        </div>
                        <span>Reduce el ausentismo gracias a los recordatorios automaticos.</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Producto;