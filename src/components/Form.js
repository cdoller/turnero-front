const Form = (props)=>{
    const {user, sucess, error} = props;
    const disabled = !(user.nombre && user.mail && user.telefono && user.mensaje);
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input value={user.nombre} onChange={props.handleChange} name="nombre" type="text" placeholder="Juan"/>

                <label htmlFor="mail">Email:</label>
                <input value={user.mail} onChange={props.handleChange} name="mail" type="email" placeholder="jperez@mail.com"/>

                <label htmlFor="telefono">Telefono:</label>
                <input value={user.telefono} onChange={props.handleChange} name="telefono" type="number" placeholder="+541166556655"/>

                <label htmlFor="mensaje">Mensaje:</label>
                <textarea value={user.mensaje} onChange={props.handleChange} name="mensaje" placeholder="Deja tu mensaje...">
                </textarea>

                <input disabled={disabled} type="submit" />
            </form>
            {sucess && <p>Mensaje enviado correctamente!</p>}
            {error && <p>Ocurrio un error al intentar enviar su mensaje</p>}
        </div>
    )
}

export default Form;