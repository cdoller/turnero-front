import React from "react";
import { Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import '../assets/css/Info.css';

const Info = () =>{

    return(
        <>
        
        <section className='Info' id="Seccion-Info">
            <Container fluid className='Container container-info'>
                <Row fluid className='Row rowInfo'>
                    <Col className='Col1 columnaColor' xs={1} md={1} lg={1}></Col>
                    <Col className='Col2 columnaBlanca' xs={1} md={1} lg={2}></Col>
                    <Col className='Col3 columnaTexto' xs={10} md={10} lg={7}>
                        <h2 className="primerTitle">EL SISTEMA DE TURNOS</h2>
                        <h2 className="segundoTitle">QUE NECESITAS PARA TU NEGOCIO</h2>                        
                        <p className='pInfo'><span className="colorAcento">Turnero</span> es una aplicacion web que te permite ordenar, optimizar y agilizar el procesamiento de turnos. Con Turnero dejaras de lado las planillas de Excel, calendarios compartidos e incluso las clasicas agendas.</p>                        
                        <p className='pInfo'>Podes usarlo en cualquier dispositivo, desde cualquier lugar, entre múltiples usuarios al mismo tiempo. Cada uno de ellos con diferentes permisos.</p>
                        <p className='pInfo'>Si necesita alguna funcion extra o una adaptacion, nuestro equipo de desarrollo esta dispuesto a analizar su solicitud e implementarla. </p>
                    </Col>
                    <Col className='Col2' lg={2}></Col>          
                </Row>
            </Container>
        </section>
        </>
        
    );
}

export default Info;