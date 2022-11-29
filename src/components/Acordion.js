import Accordion from 'react-bootstrap/Accordion';
import "../assets/css/Acordion.css"


function Acordion() {
  return (
    <Accordion defaultActiveKey="0" flush className='ContenedorAcordeon position-relative zindex-modal' >
      <h2 className="tituloAcordion">Preguntas frecuentes</h2>
      <Accordion.Item eventKey="0" className='AcordeonItem'>
        <Accordion.Header className='HeaderAcordeon'>¿Qué puedo hacer en Turnero?</Accordion.Header>
        <Accordion.Body className="acordeon-texto">
          Programar turnos.
          Chequear los días y horarios de tus próximas consultas.
          Descargar los resultados de tus estudios y compartirlos con otros profesionales.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='AcordeonItem'>
        <Accordion.Header className='HeaderAcordeon'>¿PUEDO PEDIR UNA DEMO GRATUITA?</Accordion.Header>
        <Accordion.Body className="acordeon-texto">
          Si, por supuesto! Podés pedir tu demo desde el formulario en el final de la pagina y también coordinar una videollamada para que podamos mostrate en vivo las funciones de nuestra app.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='AcordeonItem'>
        <Accordion.Header className='HeaderAcordeon'>¿SE PUEDEN HACER FUNCIONES A MEDIDA?</Accordion.Header>
        <Accordion.Body className="acordeon-texto">
          Nuestra aplicación cuenta con la versatilidad de ser totalmente escalable, ajustable y personalizable. Si tu negocio requiere alguna función específica nuestro equipo de programación esta listo para analizar la misma e implementarla.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='AcordeonItem'>
        <Accordion.Header className='HeaderAcordeon'>¿Necesita de mantenimiento?</Accordion.Header>
        <Accordion.Body className="acordeon-texto">
        No, nosotros nos encargaremos de la instalación, mantenimiento y soporte de la app.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className='AcordeonItem'>
        <Accordion.Header className='HeaderAcordeon'>¿Tiene limites de usuarios?</Accordion.Header>
        <Accordion.Body className="acordeon-texto">
        No importa la cantidad de nuevas sucursales, departamentos por cada una y nuevo personal, el sistema no tiene limites.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}




export default Acordion;