import logomundoE from "../assets/statics/logoMundosE.svg"
import '../assets/css/Footer.css'

const Footer = () =>{

    return(
        <>
            <footer>
                <p>©2022 Proyecto Integrador Mundos E, todos los derechos reservados. </p>
                <img src={logomundoE} alt="Logo Mundos E"/>
            </footer>
        </>
    )
};

export default Footer;