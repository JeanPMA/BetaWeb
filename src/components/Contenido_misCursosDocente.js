import React, { Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class misCursosDocente extends Component{
    state={
        abierto: false,
    }

    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto})
    }

    render(){

        const modalStyles= {
            position: "absolute",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '22em',
            
            
        }


        return(
            <>
            <div className="principal">
                <div className="secundario">
                <Button id="boton_crearCursos" onClick={this.abrirModal}>Crear nuevo curso</Button>
                
                </div>
            </div>

            
            <Modal  isOpen={this.state.abierto} style={modalStyles}>
                <div className="contenedorModal">
                <ModalHeader id="tituloCrearCurso">
                    
                       <a id="tituloModal"> Nuevo curso </a>
                    
                </ModalHeader>
                <ModalBody id="cuerpoCrearCurso">
                    <FormGroup>
                        <Label for="nombre">Nombre</Label>
                        <Input type="text" id="nombre"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="detalle">Descripcion</Label>
                        <Input type="textarea" id="detalle"/>
                    </FormGroup>

                </ModalBody>
                <ModalFooter id="pieCrearCurso">
                    <Button id="botonCrearCancelar" onClick={this.abrirModal}> Cancelar</Button>
                    <Button id="botonCrearAceptar"> Aceptar </Button>                   
                </ModalFooter>
                </div>
           
            </Modal>
                
            </>
        )
    }
}

export default misCursosDocente;