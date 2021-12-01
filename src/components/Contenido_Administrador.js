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
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      email: "",
      usuario: "",
      contraseña: "",
      area_especializacion: "",
      nivel_estudio: "",
      fecha_nacimiento: "",
      instructor: {
        id_instructor: cookieIdInstructor,
      },
      mensajeNombre: "",
      mensajeDetalles: "",
      mensajeUbicacion: "",
      mensajeVideo: "",
      invalidNombre: false,
      invalidDetalles: false,
      invalidUbicacion: false,
      invalidVideo: false,
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

    if (this.state.nombre.trim() == "") {
      this.setState({
        invalidNombre: true,
        mensajeNombre: "Este campo es obligatorio",
      });
      valido = false;
    }
    if (this.state.descripcion.trim() == "") {
      this.setState({
        invalidDetalles: true,
        mensajeDetalles: "Este campo es obligatorio",
      });
      valido = false;
    }
    if (this.state.ubicacion_img === "") {
      this.setState({
        invalidUbicacion: true,
        mensajeUbicacion: "Este campo es obligatorio",
      });
      valido = false;
    }
    if (this.state.ubicacion_vid === "") {
      this.setState({
        invalidVideo: true,
        mensajeVideo: "Este campo es obligatorio",
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
                    value={this.state.nombre}
                    onChange={
                      (this.onChange,
                      (event) => this.setState({ nombre: event.target.value }))
                    }
                    invalid={this.state.invalidNombre}
                  />
                  <p className="caracteres">Caract. Max. 10</p>
                  <FormFeedback tooltip>
                    {this.state.mensajeNombre}
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
                  <Label for="nombre">Correo electronico</Label>
                  <Input
                    placeholder="Correo electronico del instructor"
                    maxlength="20"
                    type="text"
                    id="correo"
                    name="email"
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
                  <Label for="nombre">Usuario</Label>
                  <Input
                    placeholder="Nombre de usuario del instructor"
                    maxlength="20"
                    type="text"
                    id="usuario"
                    name="usuario"
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
                  <Label for="nombre">Contraseña</Label>
                  <Input
                    placeholder="Contraseña del instructor"
                    maxlength="20"
                    type="text"
                    id="contraseña"
                    name="contraseña"
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
                  <Label for="nombre">Area de especializacion</Label>
                  <Input
                    placeholder="Areas de especializacion del instructor"
                    maxlength="100"
                    type="textarea"
                    id="detalleArea"
                    name="area_especializacion"
                    value={this.state.descripcion}
                    onChange={
                      (this.onChange,
                      (event) =>
                        this.setState({ descripcion: event.target.value }))
                    }
                    invalid={this.state.invalidDetalles}
                  />
                  <p className="caracteres">Caract. Max. 100</p>
                  <FormFeedback tooltip>
                    {this.state.mensajeDetalles}
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
                  <Label for="nombre">Fecha de nacimiento</Label>
                  <Input
                    placeholder="(dia/mes/año"
                    maxlength="20"
                    type="text"
                    id="fechaNac"
                    name="fecha_nacimiento"
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
    const res = await curso.create(this.state);
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
