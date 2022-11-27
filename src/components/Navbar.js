import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/css/navbar.css';
import imgTurnero from '../assets/statics/logoTurnero.png'

const NavRB = ({handleClick}) => {
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
            <Nav.Link className='aLink' onClick={()=>handleClick}>Productos</Nav.Link>
            <Nav.Link className='aLink' onClick={()=>handleClick}>Servicios</Nav.Link>
            <Nav.Link className='aLink' onClick={()=>handleClick}>Home</Nav.Link>
            <Nav.Link className='aLink' onClick={()=>handleClick}>Quienes somos</Nav.Link>
            <Nav.Link className='aLink' onClick={()=>handleClick}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavRB;