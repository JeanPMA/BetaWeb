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
import instructor2 from "./instructorServices2";
import { defineMetadata } from "core-js/fn/reflect";
import axios from "axios";

/*let cookieIdInstructor = document.cookie.replace(
  /(?:(?:^|.*;\s*)id_instructor\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);*/

//console.log(cookieIdInstructor);
const baseUrl3 = "https://betaweb-back.herokuapp.com/api/usuario";

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
      passwd2: "",
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
      mensajePasswd2: "",
      mensajePasswd3: "",
      mensajeArea_especializacion: "",
      mensajeNivel_estudio: "",
      mensajeFecha_nacimiento: "",
      invalidNombre: false,
      invalidApellido_paterno: false,
      invalidApellido_materno: false,
      invalidEmail: false,
      invalidUsername: false,
      invalidPasswd: false,
      invalidPasswd2: false,
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

    if (this.state.nombre.trim() == "") {
      this.setState({
        invalidNombre: true,
      });
      valido = false;
    }
    if (this.state.apellido_paterno.trim() == "") {
      this.setState({
        invalidApellido_paterno: true,
      });
      valido = false;
    }
    if (this.state.apellido_materno.trim() === "") {
      this.setState({
        invalidApellido_materno: true,
      });
      valido = false;
    }
    if (this.state.email === "") {
      this.setState({
        invalidEmail: true,
      });
      valido = false;
    }
    if (this.state.username.trim() === "") {
      this.setState({
        invalidUsername: true,
      });
      valido = false;
    }

    if (this.state.passwd === "") {
      this.setState({
        invalidPasswd: true,
      });
      valido = false;
    }
    if (this.state.area_especializacion.trim() === "") {
      this.setState({
        invalidArea_especializacion: true,
      });
      valido = false;
    }
    if (this.state.nivel_estudio.trim() === "") {
      this.setState({
        invalidNivel_estudio: true,
      });
      valido = false;
    }
    if (this.state.fecha_nacimiento === "") {
      this.setState({
        invalidFecha_nacimiento: true,
      });
      valido = false;
    }
    if (this.state.passwd != this.state.passwd2) {
      this.setState({
        invalidPasswd: true,
        invalidPasswd2: true,
        mensajePasswd3: "Las contraseñas no son iguales",
      });
      valido = false;
    }

    if (valido) {
      this.onClickSave();
    }
  }
  check(e) {
    var tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    var  patron = /[A-Za-z0-9]/;
    var tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

  render() {
    const modalStyles = {
      position: "absolute",
      top: "25%",
      left: "50%",
      transform: "translate(-52%, -90%)",
      width: "449px",
      height: "200px",
      
    };

    return (
      <>
        <div className="principal " >
          <div className="secundario" >
          <div class="mr-auto">
                <div class="d-flex justify-content-end">
            <Button id="boton_crearInstructores" onClick={this.abrirModal}>
              Agregar <br></br>
              Instructor
            </Button>
            </div>
                </div>
          </div>
        </div>
        <Modal isOpen={this.state.abierto} style={modalStyles} className="modalInstructor" >
          <div className=" border-top border-start border-end border-bottom border-white">
            <Form
              onSubmit={
                this.enviarAlaBD
              } /*onClick={() => this.submitFormulario()}*/ /*onSubmit={verificarPasswords()}*/
            >
            
              <ModalHeader id="tituloCrearInstructor">
                <a id="tituloModalInstructor"> Nuevo instructor </a>
              </ModalHeader>
              
              <ModalBody id="cuerpoCrearInstructor">
             
          
                <i id="obligatorio">
                  <small>obligatorio </small>
                </i>
                <i
                  className="bi bi-exclamation-circle rojo"
                  width="5px"
                  height="5px"
                ></i>
        
                <FormGroup className="position-relative">
                  <Label for="nombre">Nombre</Label>
                  <Input
                    placeholder="Nombre del instructor"
                    maxlength="20"
                    type="text"
                    id="nombre"
                    name="nombre"
                    pattern="[A-Za-z]+"
                    value={this.state.nombre}
                    onChange={
                      (this.onChange,
                      (event) => this.setState({ nombre: event.target.value }))
                    }
                    invalid={this.state.invalidNombre}
                  />

                  <p className="caracteres">Caract. Max. 20</p>
                </FormGroup>

                <FormGroup>
                  <Label for="nombre">Apellido paterno</Label>
                  <Input
                    placeholder="Apellido paterno del instructor"
                    maxlength="20"
                    type="text"
                    id="apellidoP"
                    name="apellido_paterno"
                    pattern="[A-Za-z]+"
                    value={this.state.apellido_paterno}
                    onChange={
                      (this.onChange,
                      (event) =>
                        this.setState({ apellido_paterno: event.target.value }))
                    }
                    invalid={this.state.invalidApellido_paterno}
                  />
                  <p className="caracteres">Caract. Max. 20</p>
                </FormGroup>

                <FormGroup>
                  <Label for="nombre">Apellido materno</Label>
                  <Input
                    placeholder="Apellido materno del instructor"
                    maxlength="20"
                    type="text"
                    id="apellidoM"
                    name="apellido_materno"
                    pattern="[A-Za-z]+"
                    value={this.state.apellido_materno}
                    onChange={
                      (this.onChange,
                      (event) =>
                        this.setState({ apellido_materno: event.target.value }))
                    }
                    invalid={this.state.invalidApellido_materno}
                  />
                  <p className="caracteres">Caract. Max. 20</p>
                </FormGroup>
                <FormGroup>
                  <Label for="nombre">Correo electronico</Label>
                  <Input
                    placeholder="algo123@gmail.com"
                    maxlength="20"
                    type="email"
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
                </FormGroup>
                <FormGroup>
                  <Label for="nombre">Usuario</Label>
                  <Input
                    placeholder="Nombre de usuario del instructor"
                    maxlength="20"
                    type="text"
                    id="username"
                    name="username"
                    pattern="[A-Za-z0-9]{1,15}"
                    value={this.state.username}
                    onChange={
                      (this.onChange,
                      (event) =>
                        this.setState({ username: event.target.value }))
                    }
                    invalid={this.state.invalidUsername}
                  />
                  <p className="caracteres">Caract. Max. 20</p>
                </FormGroup>
                
                
         
                <FormGroup>
                  <Label for="nombre">Contraseña</Label>
                  <Input
                    placeholder="Contraseña del instructor"
                    maxlength="20"
                    type="password"
                    pattern="[A-Za-z0-9]{1,15}"
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
                </FormGroup>
                <FormGroup>
                  <Label for="nombre">Vuelve a escribir la Contraseña</Label>
                  <Input
                    placeholder="Vuelve a escribir la contraseña"
                    maxlength="20"
                    type="password"
                    pattern="[A-Za-z0-9]{1,15}"
                    id="passwd2" //required
                    name="passwd2"
                    value={this.state.passwd2}
                    onChange={
                      (this.onChange,
                      (event) => this.setState({ passwd2: event.target.value }))
                    }
                    invalid={this.state.invalidPasswd2}
                  />
                  <FormFeedback tooltip id="mensajePassword">
                    {this.state.mensajePasswd3}
                  </FormFeedback>
                  <p className="caracteres">Caract. Max. 20</p>
                </FormGroup>

                <FormGroup>
                  <Label for="nombre">Area de especializacion</Label>
                  <Input
                    placeholder="Areas de especializacion del instructor"
                    maxlength="100"
                    type="text"
                    id="detalleArea"
                    name="area_especializacion"
                    pattern="[A-Za-z0-9_,]{1,15}"
                    value={this.state.area_especializacion}
                    onChange={
                      (this.onChange,
                      (event) =>
                        this.setState({
                          area_especializacion: event.target.value,
                        }))
                    }
                    invalid={this.state.invalidArea_especializacion}
                  />
                  <p className="caracteres">Caract. Max. 100</p>
                </FormGroup>
                <FormGroup>
                  <Label for="nombre">Nivel de estudio</Label>
                  <Input
                    placeholder="Nivel de estudio del instructor"
                    pattern="[A-Za-z]+"
                    maxlength="20"
                    type="text"
                    id="nivel"
                    name="nivel_estudio"
                   // onkeypress="return check(event)"
                    value={this.state.nivel_estudio}
                    onChange={
                      (this.onChange,
                      (event) =>
                        this.setState({ nivel_estudio: event.target.value }))
                    }
                    invalid={this.state.invalidNivel_estudio}
                  />
                  <p className="caracteres">Caract. Max. 20</p>
                </FormGroup>
                <FormGroup>
                  <Label for="start">Fecha de nacimiento</Label>
                  <Input
                    placeholder="dia/mes/año"
                    maxlength="20"
                    type="date"
                    id="start"
                    name="fecha_nacimiento"
                    value="2002-01-01"
                    min="1950-01-01" max="2003-12-31"
                    value={this.state.fecha_nacimiento}
                    onChange={
                      (this.onChange,
                      (event) =>
                        this.setState({ fecha_nacimiento: event.target.value }))
                    }
                    invalid={this.state.invalidFecha_nacimiento}
                  />
                  
                </FormGroup>
                 
              </ModalBody>
              <FormFeedback tooltip>{this.state.mensajePasswd}</FormFeedback>
              <ModalFooter id="pieCrearInstructor">
                <Button
                  id="botonCrearCancelarInstructor"
                  onClick={(this.abrirModal, this.actualizarCancelar)}
                  onChange={this.onChange}
                >
                  {" "}
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  id="botonCrearAceptarInstructor"
                  onChange={this.onChange}
                >
                  {" "}
                  Registrar{" "}
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
    const res2 = await instructor2.create(this.state);
    if (res.success && res2.success) {
      window.location.href = window.location.href;
      alert("Instructor Registrado");
    } else {
      alert("Error al registrar instructor, el email o usuario ya esta en uso");
      window.location.href = window.location.href;
    }

    /* if (res2.success) {
      window.location.href = window.location.href;
      alert("Instructor Registrado");
    } else {
      alert("Error al registrar instructor, verifica los datos");
      window.location.href = window.location.href;
    }*/
  }
}

export default Contenido_Administrador;
