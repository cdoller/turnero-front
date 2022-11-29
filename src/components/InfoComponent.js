import React from "react";
import { Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import '../assets/css/Info.css';

const InfoComponent = () =>{

    return(
        <>
        <section className='Info'>
            <Container fluid className='Container container-info'>
                <Row fluid className='Row rowInfo'>
                    <Col className='Col1 columnaColor' xs={1} lg={1}></Col>
                    <Col className='Col2 columnaBlanca' xs={1} lg={2}></Col>
                    <Col className='Col3 columnaTexto' xs={9} lg={7}>
                        <h2>SECCIÓN INFORMACIÓN</h2>
                        <h2 className="TitleColor segundoTitle">WE HELP PEOPLE</h2>                        
                        <p pInfo>Aqui se describe que hacemos, esto es solo un turnero asi que bla blabla</p>                        
                        <p pInfo>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                

                    </Col>
                    <Col className='Col2' xs={1} lg={2}></Col>          
                </Row>
                          
            </Container>
        </section>
        </>
        
    )
}

export default InfoComponent