import Accordion from 'react-bootstrap/Accordion';
import "../assets/css/Acordion.css"

function Acordion() {
  return (
    <Accordion defaultActiveKey="0" flush className='container ContenedorAcordeon' >
      <h2>Preguntas y Respuestas</h2>
      <Accordion.Item eventKey="0" className='AcordeonItem'>
        <Accordion.Header className='HeaderAcordeon'>Accordion Item #1</Accordion.Header>
        <Accordion.Body className="acordeon-texto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='AcordeonItem'>
        <Accordion.Header className='HeaderAcordeon'>Accordion Item #2</Accordion.Header>
        <Accordion.Body className="acordeon-texto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}




export default Acordion;