import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imgTurnero from '../assets/statics/logoTurnero.png';
import '../assets/css/navbarBootstrap.css';


const NavBar = () => {
    return(
        <>     

            <Navbar className="navbar-inicio position-absolute zindex-toast Paste" fixed="top" sticky="top" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                <img src={imgTurnero} 
                className='imgNav'
                href="#Seccion-Home" 
                height="60px" 
                alt='Logo app Turnero'/>
                </Navbar.Brand>
                <Navbar.Toggle className="hamburguesa-nav" aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto contenedor-navbar">
                    <Nav.Link className="button-navbar" href="#Seccion-Home">Home</Nav.Link>
                    <Nav.Link className="button-navbar" href="#Seccion-Info">Info</Nav.Link>
                    <Nav.Link className="button-navbar" href="#Seccion-Producto">Productos</Nav.Link>
                    <Nav.Link className="button-navbar" href="#Seccion-Preguntas">Preguntas</Nav.Link>
                    <Nav.Link className="button-navbar" href="#Seccion-Contacto">Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default NavBar