import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const FormBootstrap = (props)=>{

    const {user, sucess, error} = props;
    const disabled = !(user.nombre && user.mail && user.telefono && user.mensaje);

    return (
        <>
            <Form className="container formcontainer" onSubmit={props.handleSubmit}>
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

                <Button className="botonaso" variant="primary" disabled={disabled} type="submit">
                    Enviar
                </Button>

                {sucess && <p>Mensaje enviado correctamente!</p>}
                {error && <p>Ocurrio un error al intentar enviar su mensaje</p>}
            </Form>
        </>
    );
}

export default FormBootstrap;