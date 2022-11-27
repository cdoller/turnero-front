import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/css/navbar.css';
import imgTurnero from '../assets/statics/logoTurnero.png'

function NavRB() {
  return (
    <Navbar  expand="lg">
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
          <Nav className="me-auto">
            <Nav.Link className='aLink' href="#link">Productos</Nav.Link>
            <Nav.Link className='aLink' href="#link">Servicios</Nav.Link>
            <Nav.Link className='aLink' href="#link">Home</Nav.Link>
            <Nav.Link className='aLink' href="#link">Quienes somos</Nav.Link>
            <Nav.Link className='aLink' href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavRB;