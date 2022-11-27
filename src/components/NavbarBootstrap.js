import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imgTurnero from '../assets/statics/logoTurnero.png';
import '../assets/css/navbarBootstrap.css';


const NavBar = () => {
    return(
        <>     

            <Navbar className="navbar-inicio position-absolute zindex-toast" fixed="top" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                <img src={imgTurnero} 
                className='imgNav'
                href="#Home" 
                width="200px" 
                height="200px" 
                alt='imagenTurneo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto botones-navbar">
                    <Nav.Link className="button-navbar" href="#link">Home</Nav.Link>
                    <Nav.Link className="button-navbar" href="#link">Producto</Nav.Link>
                    <Nav.Link className="button-navbar" href="#link">Servicios</Nav.Link>
                    <Nav.Link className="button-navbar" href="#link">Preguntas</Nav.Link>
                    <Nav.Link className="button-navbar" href="#link">Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default NavBar