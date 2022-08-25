import { useEffect, useState } from "react"
import { Form, ModalFooter, FormGroup, Label, Input,Modal,ModalHeader,ModalBody,Button } from "reactstrap"


const modeloUser = {
    id:0,
    nombre: "",
    apellido:"",
    profesion: "",
    dui:0
}
const ModalUser = ({ mostrarModal,setMostrarModal,GuardarUser,editar,setEditar,editarUser}) => {

    const [User, setUser] = useState(modeloUser);

    const actualizarDato = (e) => {
        //console.log(e.target.name + " : " + e.target.value)
        setUser({
            ...User,[e.target.name]:e.target.value
        })
    }
    const enviarDatos = () => {
        if (User.id == 0) {
            GuardarUser(User)
        } else {
            editarUser(User)
        }
        setUser(modeloUser)
    }

    useEffect(() => {
        if (editar != null) {
            setUser(editar)
        } else {
            setUser(modeloUser)
        }
    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }


    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {User.id==0?"Nuevo Usuario":"Editar Usuario" }
                Nuevo Usuario
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizarDato(e)} value={ User.nombre}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Apellido</Label>
                        <Input name="apellido" onChange={(e) => actualizarDato(e)} value={User.apellido}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Profesion</Label>
                        <Input name="profesion" onChange={(e) => actualizarDato(e)} value={User.profesion}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Dui</Label>
                        <Input name="dui" onChange={(e) => actualizarDato(e)} value={User.dui}></Input>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={ enviarDatos} color="primary" size="sm" >Guardar </Button>
                <Button
                    onClick={
                        //() => setMostrarModal(!mostrarModal)
                        cerrarModal
                    }
                    color="danger"
                    size="sm" >Cerrar </Button>

            </ModalFooter>
        </Modal>
        )
}
export default ModalUser;