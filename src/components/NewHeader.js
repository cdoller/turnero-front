import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import imgTurnero from '../assets/statics/logoTurnero.png';
import '../assets/css/NewHeader.css';


function NewHeader() {
  return (
    <header>
    <Navbar bg="light" expand="lg" className='nav'>
      <Container className='container' >      
        <Navbar.Brand > 
        <img src={imgTurnero} 
        width="200px" 
        height="200px" 
        alt='imagenTurneo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link  href="#seccionInfo" >Informacion</Nav.Link>
            <Nav.Link  href="#seccionProducto" >Productos</Nav.Link>
            <Nav.Link  href="#seccionServicios" >Servicios</Nav.Link>
            <Nav.Link  href="#seccionQS" >Quienes somos</Nav.Link>
            <Nav.Link  href="#seccionContacto" >Contacto</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default NewHeader;