import Carousel from 'react-bootstrap/Carousel';
import InicioPic1 from '../assets/statics/barbijo.jpg';
import InicioPic2 from '../assets/statics/esteto.jpg';
import InicioPic3 from '../assets/statics/hojitas.jpg'; 
import '../assets/css/Carrousel.css';
import Welcome from './Welcome';

const Carrousel = (props)=>{
    // hacer deconstruccion de props

    return (
        <Carousel className='styleCarrousel position-relative'>
            <Carousel.Item className='itemCarousel'>
                <img
                height={900}
                className="d-block w-100 imagenesCarousel"                            
                src={InicioPic1}
                alt="First slide"
                />
                <Carousel.Caption >
                    <Welcome></Welcome>                               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                height={900}
                className="d-block w-100 imagenesCarousel"
                src={InicioPic2}
                alt="Second slide"
                />
                <Carousel.Caption >
                    <Welcome></Welcome>
                               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                height={900}
                className="d-block w-100 imagenesCarousel"
                src={InicioPic3}
                alt="Third slide"
                />
                <Carousel.Caption >
                    <Welcome></Welcome>
                               
                </Carousel.Caption>
            </Carousel.Item>
            
    </Carousel>
    );
}


export default Carrousel;