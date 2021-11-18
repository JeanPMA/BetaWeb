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
import curso from "./cursoServices";

let cookieIdInstructor = document.cookie.replace(
  /(?:(?:^|.*;\s*)id_instructor\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);

console.log(cookieIdInstructor);

class boton_misCursosDocente extends Component {
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
      descripcion: "",
      ubicacion_img: "",
      ubicacion_vid: "",
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
  enviarAlaBD(e) {
    e.preventDefault();
    let valido = true;
    if (this.state.nombre === "") {
      this.setState({
        invalidNombre: true,
        mensajeNombre: "Este campo es obligatorio",
      });
      valido = false;
    }
    if (this.state.descripcion === "") {
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
              Crear nuevo curso
            </Button>
          </div>
        </div>

        <Modal isOpen={this.state.abierto} style={modalStyles} className="">
          <div className="contenedorModal  border-top border-start border-end border-bottom border-white">
            <Form onSubmit={this.enviarAlaBD}>
              <ModalHeader id="tituloCrearCurso">
                <a id="tituloModal"> Nuevo curso </a>
              </ModalHeader>
              <ModalBody id="cuerpoCrearCurso">
                <FormGroup className="position-relative">
                  <Label for="nombre">Nombre</Label>
                  <Input
                    placeholder="Nombre del curso"
                    maxlength="70"
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
                  <p className="caracteres">Caract. Max. 70</p>
                  <FormFeedback tooltip>
                    {this.state.mensajeNombre}
                  </FormFeedback>
                </FormGroup>
                <FormGroup
                  id="contenedor-descripcion"
                  className="position-relative"
                >
                  <Label for="detalle">Descripcion</Label>
                  <Input
                    placeholder="Descripcion del curso"
                    maxlength="700"
                    type="textarea"
                    id="detalle"
                    name="descripcion"
                    value={this.state.descripcion}
                    onChange={
                      (this.onChange,
                      (event) =>
                        this.setState({ descripcion: event.target.value }))
                    }
                    invalid={this.state.invalidDetalles}
                  />
                  <p className="caracteres">Caract. Max. 700</p>
                  <FormFeedback tooltip>
                    {this.state.mensajeDetalles}
                  </FormFeedback>
                </FormGroup>
                <FormGroup
                  id="contenedor-descripcion"
                  className="position-relative"
                >
                  <Label for="detalle">URL de la imagen</Label>
                  <Input
                    placeholder="https://www.images.com/image.jpg"
                    type="url"
                    id="ubicacion"
                    name="ubicacion_img"
                    value={this.state.ubicacion_img}
                    onChange={
                      (this.onChange,
                      (event) =>
                        this.setState({ ubicacion_img: event.target.value }))
                    }
                    invalid={this.state.invalidUbicacion}
                  />
                  <FormFeedback tooltip>
                    {this.state.mensajeUbicacion}
                  </FormFeedback>
                </FormGroup>
                <FormGroup
                  id="contenedor-descripcion"
                  className="position-relative"
                >
                  <Label for="video">URL del video</Label>
                  <Input
                    placeholder="https://www.youtube.com/watch?examplevideo"
                    type="url"
                    id="video"
                    name="ubicacion_vid"
                    value={this.state.ubicacion_vid}
                    onChange={
                      (this.onChange,
                      (event) =>
                        this.setState({ ubicacion_vid: event.target.value }))
                    }
                    invalid={this.state.invalidVideo}
                  />
                  <FormFeedback tooltip>{this.state.mensajeVideo}</FormFeedback>
                </FormGroup>
              </ModalBody>
              <ModalFooter id="pieCrearCurso">
                <Button
                  id="botonCrearCancelar"
                  onClick={this.abrirModal}
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
      alert("Curso Registrado");
    } else {
      alert("Error al guardar curso, verifica el formato de tus URL");
      window.location.href = window.location.href;
    }
  }
}

export default boton_misCursosDocente;
