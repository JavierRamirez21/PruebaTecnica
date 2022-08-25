
import { useEffect, useState } from "react"
import {Container,Row,Col,Card,CardHeader,CardBody,Button } from "reactstrap"
import ModalUser from "./componentes/ModalUser"
import TablaUser from "./componentes/TablaUser"
const App = () => {
    const [users, setUsers] = useState([])

    const [mostrarModal, setMostrarModal] = useState(false)

    const [editar,setEditar] =useState(null)

    const mostrarUsers = async () => {
        const response = await fetch("api/users/Lista");
        
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setUsers(data)
        } else {
            console.log("Error")
        }
    }
    useEffect(() => {
        mostrarUsers();
    }, [])
    //metodo de guardar usuarios
    const guardarUser = async (user) => {
        const response = await fetch("api/users/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type':'application/json;charset=utf-8'
            },
            body:JSON.stringify(user)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarUsers();

        }
    }
    //metodo de editar usurios
    const editarUser = async (user) => {
        const response = await fetch("api/users/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarUsers();

        }
    }

    //metodo de eliminar usurios
    const eliminarUser = async (id) => {

        var respuesta = window.confirm("¿Desea Eliminar el Usuario?")
        if (!respuesta) {
            return;
        }
        
        const response = await fetch("api/users/Eliminar/" + id, {
            method: 'DELETE',
            
        })

        if (response.ok) {
            
            mostrarUsers();

        }
    }

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de Contactos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button onClick={()=>setMostrarModal(!mostrarModal)} size="sm" color="success">Crear Nuevo Usuario</Button>
                            <hr></hr>
                            <TablaUser data={users}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                eliminarUser={eliminarUser }
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ModalUser mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                GuardarUser={guardarUser}
                editar={editar}
                setEditar={setEditar}
                editarUser={editarUser} ></ModalUser>
        </Container>
        )
}
export default App;
