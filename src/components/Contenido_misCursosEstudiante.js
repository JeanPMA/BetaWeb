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

class boton_misCursosEstudiante extends Component {
  state = {
    abierto: false,
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
    

    return (
      <>
        

        
      </>
    );
  }
}

export default boton_misCursosEstudiante;
