import '../assets/css/CarrouselProducto.css'
import Carousel from 'react-bootstrap/Carousel';
import Producto1 from '../assets/statics/producto1.webp';
import Producto3 from '../assets/statics/producto3.webp';
import {FaCalendarAlt, FaWhatsapp, FaStar} from "react-icons/fa";



const CarrouselProducto = ()=>{

    return (
        <>
          <Carousel fade className='carrousel-producto position-relative zindex-modal'>
            <Carousel.Item className='carrousel-producto-item position-relative'>
              <img
                className="d-block w-100"
                src={Producto3}
                alt="First slide"
              />
              <Carousel.Caption className='carrousel-producto-item-text position-absolute bottom-0 end-0'>
                <h3>MULTIPLES BENEFICIOS</h3>

                <div className='carrousel-producto-detalles-text'>
                  <div className='box-icon'>
                    <FaCalendarAlt className='carrousel-producto-icons' />
                  </div>
                  <span>Agiliza tu agenda cubriendo huecos. Visualiza, crea y administra múltiples agendas desde un mismo lugar.</span>
                </div>

                <div className='carrousel-producto-detalles-text'>
                  <div className='box-icon'>
                    <FaStar className='carrousel-producto-icons' />
                  </div>
                  <span>Crea fidelidad y seguridad en los pacientes, profesionales y administrativos.</span>
                </div>

                <div className='carrousel-producto-detalles-text'>
                  <div className='box-icon'>
                    <FaWhatsapp className='carrousel-producto-icons' />
                  </div>
                  <span>Reduce el ausentismo gracias a los recordatorios automaticos.</span>
                </div>
                
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='carrousel-producto-item position-relative'>
              <img
                className="d-block w-100"
                src={Producto1}
                alt="Third slide"
              />
              <Carousel.Caption className='carrousel-producto-item-text bottom-0 end-0'>
                <h3>MULTIPLES BENEFICIOS</h3>

                <div className='carrousel-producto-detalles-text'>
                  <div className='box-icon'>
                    <FaCalendarAlt className='carrousel-producto-icons' />
                  </div>
                  <span>Agiliza tu agenda cubriendo huecos. Visualiza, crea y administra múltiples agendas desde un mismo lugar.</span>
                </div>

                <div className='carrousel-producto-detalles-text'>
                  <div className='box-icon'>
                    <FaStar className='carrousel-producto-icons' />
                  </div>
                  <span>Crea fidelidad y seguridad en los pacientes, profesionales y administrativos.</span>
                </div>

                <div className='carrousel-producto-detalles-text'>
                  <div className='box-icon'>
                    <FaWhatsapp className='carrousel-producto-icons' />
                  </div>
                  <span>Reduce el ausentismo gracias a los recordatorios automaticos.</span>
                </div>

              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </>
    );
}

export default CarrouselProducto;