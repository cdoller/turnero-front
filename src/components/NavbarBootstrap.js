import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imgTurnero from '../assets/statics/logoTurnero.png';
import '../assets/css/navbarBootstrap.css';


const NavBar = ({handleClick}) => {
    return(
        <>     

            <Navbar className="navbar-inicio position-absolute zindex-toast" fixed="top" sticky="top" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                <img src={imgTurnero} 
                className='imgNav'
                href="#Home" 
                height="60px" 
                alt='imagenTurneo'/>
                </Navbar.Brand>
                <Navbar.Toggle className="hamburguesa-nav" aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto contenedor-navbar">
                    <Nav.Link className="button-navbar" onClick={()=>handleClick}>Home</Nav.Link>
                    <Nav.Link className="button-navbar" onClick={()=>handleClick}>Producto</Nav.Link>
                    <Nav.Link className="button-navbar" onClick={()=>handleClick}>Servicios</Nav.Link>
                    <Nav.Link className="button-navbar" onClick={()=>handleClick}>Preguntas</Nav.Link>
                    <Nav.Link className="button-navbar" onClick={()=>handleClick}>Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default NavBar