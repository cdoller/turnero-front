import Carousel from 'react-bootstrap/Carousel';
import InicioPic1 from '../assets/statics/barbijo.jpg';
import InicioPic2 from '../assets/statics/esteto.jpg';
import InicioPic3 from '../assets/statics/hojitas.jpg'; 
import '../assets/css/Carrousel.css';

const Carrousel = (props)=>{
    // hacer deconstruccion de props

    return (
        <Carousel className='styleCarrousel'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={InicioPic1}
                alt="First slide"
                />
                <Carousel.Caption>
   {/*ver como renderizar las imagenes pero el texto fijo*/}
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={InicioPic2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={InicioPic3}
                alt="Third slide"
                />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}

export default Carrousel;