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



class Contenido_Administrador extends Component {
  
  render() {
    

    return (
      <>
        <div className="principal ">
          <div className="secundario">
            <Button id="boton_crearCursos" onClick={this.abrirModal}>
              Agregar Instructor
            </Button>
          </div>
        </div>
        </>
    )
  }
}

export default Contenido_Administrador;
