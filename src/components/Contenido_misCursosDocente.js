import React, { Component } from "react";
import cursoServices from "./cursoServices";
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

  async componentDidMount() {
    await this.fetchUsuario();
  }
  fetchUsuario = async () => {
    let res = await fetch("https://app-cleancode.herokuapp.com/api/usuario");
    let data = await res.json();
    console.log(data);
  };

  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      descripcion: "",
      ubicacion: "",
      instructor: {
        id_instructor: cookieIdInstructor,
      },
      mensajeNombre: "",
      mensajeDetalles: "",
      mensajeUbicacion: "",
      invalidNombre: false,
      invalidDetalles: false,
      invalidUbicacion: false,
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
    if (this.state.ubicacion === "") {
      this.setState({
        invalidUbicacion: true,
        mensajeUbicacion: "Este campo es obligatorio",
      });
      valido = false;
    }
    /*if (valido) {
      //enviar a la BD
      console.log("Se envian los datos" + JSON.stringify(this.state)); // solo par verificar que si envia los datos
    }*/
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
        <div className="principal">
          <div className="secundario">
            <Button id="boton_crearCursos" onClick={this.abrirModal}>
              Crear nuevo curso
            </Button>
          </div>
        </div>

        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <div className="contenedorModal">
            <Form onSubmit={this.enviarAlaBD}>
              <ModalHeader id="tituloCrearCurso">
                <a id="tituloModal"> Nuevo curso </a>
              </ModalHeader>
              <ModalBody id="cuerpoCrearCurso">
                <FormGroup className="position-relative">
                  <Label for="nombre">Nombre</Label>
                  <Input
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
                  <FormFeedback tooltip>
                    {this.state.mensajeDetalles}
                  </FormFeedback>
                </FormGroup>
                <FormGroup
                  id="contenedor-descripcion"
                  className="position-relative"
                >
                  <Label for="detalle">Ubicacion de la imagen</Label>
                  <Input
                    type="text"
                    id="ubicacion"
                    name="ubicacion"
                    value={this.state.ubicacion}
                    onChange={
                      (this.onChange,
                      (event) =>
                        this.setState({ ubicacion: event.target.value }))
                    }
                    invalid={this.state.invalidUbicacion}
                  />
                  <FormFeedback tooltip>
                    {this.state.mensajeUbicacion}
                  </FormFeedback>
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
                  onClick={() => this.onClickSave()}
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
      alert(res.message);
    } else {
      alert("Error ==>" + res.message.message);
    }
  }
}

export default boton_misCursosDocente;
