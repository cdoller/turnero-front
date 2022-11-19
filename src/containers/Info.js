import React from "react";
import { Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import '../assets/css/Info.css'

const Info = () =>{

    return(
        <section className='Info'>
            <Container fluid className='Info'>
                <Row>
                    <Col sm={8}>Bienvenidos</Col>
                    <Col xs={2}>Bienvenidos</Col>
                    <Col md={3}>Bienvenidos</Col>
                    <Col lg={5}>Bienvenidos</Col>
                </Row>
                           
            </Container>
        </section>
        
    )
}

// https://react-bootstrap.github.io/layout/grid/#responsive-grids
export default Info

