import {Button, Table } from "reactstrap"
const TablaUser = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarUser }) => {


    const enviarDatos = (user) => {
        setEditar(user);
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                   <th>Nombre</th>
                   <th>Apellido</th>
                    <th>Profesion</th>
                    <th>Dui</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">Sin Registros</td>
                        </tr>
                    ) : (
                            data.map((item) => {
                                return(
                                <tr key={item.id}>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellido}</td>
                                    <td>{item.profesion}</td>
                                    <td>{item.dui}</td>
                                    <td>
                                            <Button onClick={()=>enviarDatos(item) } color="primary" size="sm" className="me-2">Editar </Button>
                                            <Button onClick={() => eliminarUser(item.id)} color="danger" size="sm" >Eliminar </Button>
                                    </td>
                                    </tr>)
                            })
                    )
                }
            </tbody>
        </Table>
        )
}
export default TablaUser;