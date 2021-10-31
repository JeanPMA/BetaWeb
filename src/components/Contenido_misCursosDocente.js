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
      detalle: "",
      ubicacion: "",
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
    if (this.state.detalle === "") {
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
    if (valido) {
      //enviar a la BD
      console.log("Se envian los datos" + JSON.stringify(this.state)); // solo par verificar que si envia los datos
    }
  }
  render() {
    const modalStyles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -90%)",
      width: "22em",
      height: "200px"
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
                    onChange={this.onChange}
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
                    name="detalle"
                    value={this.state.detalle}
                    onChange={this.onChange}
                    invalid={this.state.invalidDetalles}
                  />
                  <FormFeedback tooltip>
                    {this.state.mensajeDetalles}
                  </FormFeedback>
                </FormGroup>
                <FormGroup className="position-relative">
                  <Label for="nombre">Ubicación imagen:</Label>
                  <Input
                    type="text"
                    id="ubicacion"
                    name="ubicacion"
                    value={this.state.ubicacion}
                    onChange={this.onChange}
                    invalid={this.state.invalidUbicacion}
                  />
                  <FormFeedback tooltip>
                    {this.state.mensajeNombre}
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
}

export default boton_misCursosDocente;
