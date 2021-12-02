import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Form,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import instructor from "./instructorServices";

let cookieIdInstructor = document.cookie.replace(
  /(?:(?:^|.*;\s*)id_instructor\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);

console.log(cookieIdInstructor);

class Contenido_Administrador extends Component {
  state = {
    abierto: false,
  };

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      passwd: "",     
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      email: "",              
      area_especializacion: "",
      nivel_estudio: "",
      fecha_nacimiento: "",
      mensajeNombre: "",
      mensajeApellido_paterno: "",
      mensajeApellido_materno: "",
      mensajeEmail: "",
      mensajeUsername: "",
      mensajePasswd: "",
      mensajeArea_especializacion: "",
      mensajeNivel_estudio: "",
      mensajeFecha_nacimiento: "",
      invalidNombre: false,
      invalidApellido_paterno: false,
      invalidApellido_materno: false,
      invalidEmail: false,
      invalidUsername: false,
      invalidPasswd: false,
      invalidArea_especializacion: false,
      invalidNivel_estudio: false,
      invalidFecha_nacimiento: false,

    };
    this.onChange = this.onChange.bind(this);
    this.enviarAlaBD = this.enviarAlaBD.bind(this);
  }
  onChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }
  actualizarCancelar() {
    window.location.href = window.location.href;
  }
  enviarAlaBD(e) {
    e.preventDefault();
    let valido = true;

    if (this.state.nombre == "") {
      this.setState({
        invalidNombre: true,
        mensajeNombre: "Este campo es obligatorio",
      });
      valido = false;
    }
    if (this.state.apellido_paterno == "") {
      this.setState({
        invalidApellido_paterno: true,
        mensajeApellido_paterno: "Este campo es obligatorio",
      });
      valido = false;
    }
    if (this.state.apellido_materno === "") {
      this.setState({
        invalidApellido_materno: true,
        mensajeApellido_materno: "Este campo es obligatorio",
      });
      valido = false;
    }
    if (this.state.email === "") {
      this.setState({
        invalidEmail: true,
        mensajeEmail: "Este campo es obligatorio",
      });
      valido = false;
    }
    if (this.state.username === "") {
      this.setState({
        invalidUsername: true,
        mensajeUsername: "Este campo es obligatorio",
      });
      valido = false;
    }
    if (this.state.contraseña === "") {
      this.setState({
        invalidPasswd: true,
        mensajePasswd: "Este campo es obligatorio",
      });
      valido = false;
    }
    if (this.state.area_especializacion === "") {
      this.setState({
        invalidArea_especializacion: true,
        mensajeArea_especializacion: "Este campo es obligatorio",
      });
      valido = false;
    }
    if (this.state.nivel_estudio === "") {
      this.setState({
        invalidNivel_estudio: true,
        mensajeNivel_estudio: "Este campo es obligatorio",
      });
      valido = false;
    }
    if (this.state.fecha_nacimiento === "") {
      this.setState({
        invalidFecha_nacimiento: true,
        mensajeFecha_nacimiento: "Este campo es obligatorio",
      });
      valido = false;
    }
    if (valido) {
      this.onClickSave();
    }
  }
  render() {
    const modalStyles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -90%)",
      width: "22em",
      height: "200px",
    };

    return (
      <>
        <div className="principal ">
          <div className="secundario">
            <Button id="boton_crearCursos" onClick={this.abrirModal}>
              Agregar Instructor
            </Button>
          </div>
        </div>
        <Modal isOpen={this.state.abierto} style={modalStyles} className="">
          <div className="contenedorModal  border-top border-start border-end border-bottom border-white">
            <Form onSubmit={this.enviarAlaBD}>
              <ModalHeader id="tituloCrearCurso">
                <a id="tituloModal"> Nuevo instructor </a>
              </ModalHeader>
              <ModalBody id="cuerpoCrearCurso">
                <FormGroup className="position-relative">
                  <Label for="nombre">Nombre</Label>
                  <Input
                    placeholder="Nombre del instructor"
                    maxlength="20"
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={this.state.nombre}
                    onChange={
                      (this.onChange,
                      (event) => this.setState({ nombre: event.target.value }))
                    }
                    invalid={this.state.invalidNombre}
                  />
                  <p className="caracteres">Caract. Max. 20</p>
                  <FormFeedback tooltip>
                    {this.state.mensajeNombre}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="nombre">Apellido paterno</Label>
                  <Input
                    placeholder="Apellido paterno del instructor"
                    maxlength="10"
                    type="text"
                    id="apellidoP"
                    name="apellido_paterno"
                    value={this.state.apellido_paterno}
                    onChange={
                      (this.onChange,
                      (event) => this.setState({ apellido_paterno: event.target.value }))
                    }
                    invalid={this.state.invalidApellido_paterno}
                  />
                  <p className="caracteres">Caract. Max. 10</p>
                  <FormFeedback tooltip>
                    {this.state.mensajeApellido_paterno}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="nombre">Apellido materno</Label>
                  <Input
                    placeholder="Apellido materno del instructor"
                    maxlength="20"
                    type="text"
                    id="apellidoM"
                    name="apellido_materno"
                    value={this.state.apellido_materno}
                    onChange={
                      (this.onChange,
                      (event) => this.setState({ apellido_materno: event.target.value }))
                    }
                    invalid={this.state.invalidApellido_materno}
                  />
                  <p className="caracteres">Caract. Max. 20</p>
                  <FormFeedback tooltip>
                    {this.state.mensajeApellido_materno}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="nombre">Correo electronico</Label>
                  <Input
                    placeholder="Correo electronico del instructor"
                    maxlength="20"
                    type="text"
                    id="correo"
                    name="email"
                    value={this.state.email}
                    onChange={
                      (this.onChange,
                      (event) => this.setState({ email: event.target.value }))
                    }
                    invalid={this.state.invalidEmail}
                  />
                  <p className="caracteres">Caract. Max. 20</p>
                  <FormFeedback tooltip>
                    {this.state.mensajeEmail}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="nombre">Usuario</Label>
                  <Input
                    placeholder="Nombre de usuario del instructor"
                    maxlength="20"
                    type="text"
                    id="username"
                    name="username"
                    value={this.state.username}
                    onChange={
                      (this.onChange,
                      (event) => this.setState({ username: event.target.value }))
                    }
                    invalid={this.state.invalidUsername}
                  />
                  <p className="caracteres">Caract. Max. 20</p>
                  <FormFeedback tooltip>
                    {this.state.mensajeUsername}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="nombre">Contraseña</Label>
                  <Input
                    placeholder="Contraseña del instructor"
                    maxlength="20"
                    type="text"
                    id="passwd"
                    name="passwd"
                    value={this.state.passwd}
                    onChange={
                      (this.onChange,
                      (event) => this.setState({ passwd: event.target.value }))
                    }
                    invalid={this.state.invalidPasswd}
                  />
                  <p className="caracteres">Caract. Max. 20</p>
                  <FormFeedback tooltip>
                    {this.state.mensajePasswd}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="nombre">Area de especializacion</Label>
                  <Input
                    placeholder="Areas de especializacion del instructor"
                    maxlength="100"
                    type="textarea"
                    id="detalleArea"
                    name="area_especializacion"
                    value={this.state.area_especializacion}
                    onChange={
                      (this.onChange,
                      (event) =>
                        this.setState({ area_especializacion: event.target.value }))
                    }
                    invalid={this.state.invalidArea_especializacion}
                  />
                  <p className="caracteres">Caract. Max. 100</p>
                  <FormFeedback tooltip>
                    {this.state.mensajeArea_especializacion}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="nombre">Nivel de estudio</Label>
                  <Input
                    placeholder="Nivel de estudio del instructor"
                    maxlength="20"
                    type="text"
                    id="nivel"
                    name="nivel_estudio"
                    value={this.state.nivel_estudio}
                    onChange={
                      (this.onChange,
                      (event) => this.setState({ nivel_estudio: event.target.value }))
                    }
                    invalid={this.state.invalidNivel_estudio}
                  />
                  <p className="caracteres">Caract. Max. 20</p>
                  <FormFeedback tooltip>
                    {this.state.mensajeNivel_estudio}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="nombre">Fecha de nacimiento</Label>
                  <Input
                    placeholder="dia/mes/año"
                    maxlength="20"
                    type="text"
                    id="fechaNac"
                    name="fecha_nacimiento"
                    value={this.state.fecha_nacimiento}
                    onChange={
                      (this.onChange,
                      (event) => this.setState({ fecha_nacimiento: event.target.value }))
                    }
                    invalid={this.state.invalidFecha_nacimiento}
                  />
                  <p className="caracteres">Caract. Max. 20</p>
                  <FormFeedback tooltip>
                    {this.state.mensajeFecha_nacimiento}
                  </FormFeedback>
                </FormGroup>
              </ModalBody>
              <ModalFooter id="pieCrearCurso">
                <Button
                  id="botonCrearCancelar"
                  onClick={(this.abrirModal, this.actualizarCancelar)}
                  onChange={this.onChange}
                >
                  {" "}
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  id="botonCrearAceptar"
                  onChange={this.onChange}
                >
                  {" "}
                  Guardar{" "}
                </Button>
              </ModalFooter>
            </Form>
          </div>
        </Modal>
      </>
    );
  }
  async onClickSave() {
    this.abrirModal();
    const res = await instructor.create(this.state);
    if (res.success) {
      window.location.href = window.location.href;
      alert("Instructor Registrado");
    } else {
      alert("Error al registrar instructor, verifica los datos");
      window.location.href = window.location.href;
    }
    
  }
}

export default Contenido_Administrador;
