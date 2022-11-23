import Form from 'react-bootstrap/Form';

const Contact = ()=>{

    return (
        <>
            <Form className="container">
                <Form.Group className="mb-3" controlId="ControlNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Juan Perez" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ControlMail">
                    <Form.Label>Mail</Form.Label>
                    <Form.Control type="email" placeholder="juanperez@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ControlTelefono">
                    <Form.Label>Numero Telefono</Form.Label>
                    <Form.Control type="number" placeholder="+541166556655" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ControlMensaje">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3 } placeholder="Hola! estoy interesado en su software..."/>
                </Form.Group>
            </Form>
        </>
    );
}

export default Contact;