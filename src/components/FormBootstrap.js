import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Loader from './Loader';
import "../assets/css/FormBootstrap.css"

import { FaCheckCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";



const FormBootstrap = (props)=>{

    const {user, sucess, error, cargando} = props;
    const disabled = !(user.nombre && user.mail && user.telefono && user.mensaje);

    return (
        <>
        {cargando
                ?   <Loader></Loader>
                :   <Form className="formcontainer position-relative zindex-modal" onSubmit={props.handleSubmit}>
                        <Form.Group className="mb-3" controlId="ControlNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control value={user.nombre} onChange={props.handleChange} name="nombre" type="text" placeholder="Juan Perez" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="ControlMail">
                            <Form.Label>Mail</Form.Label>
                            <Form.Control value={user.mail} onChange={props.handleChange} name="mail" type="email" placeholder="juanperez@example.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="ControlTelefono">
                            <Form.Label>Numero Telefono</Form.Label>
                            <Form.Control value={user.telefono} onChange={props.handleChange} name="telefono" type="number" placeholder="543517776655" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="ControlMensaje">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control value={user.mensaje} onChange={props.handleChange} name="mensaje" as="textarea" rows={3 } placeholder="Hola! estoy interesado en su software..."/>
                        </Form.Group>

                        <Button className="boton-formulario w-100" variant="primary" disabled={disabled} type="submit">
                            Enviar
                        </Button>

                        {sucess && 
                            <div className='mensajeCorrecto'>
                                <FaCheckCircle className='iconoCheck'/>
                                <h4 className='mensaje-formulario'>Mensaje enviado!</h4>
                            </div>
                        }
                        {error && 
                        <div className='mensajeError'>
                            <FaTimesCircle className='iconoWrong'/>
                            <h4 className='mensaje-formulario'>Error, verifique los datos ingresados</h4>
                        </div>
                        }
                    </Form>
        }
        </>
    );
}

export default FormBootstrap;