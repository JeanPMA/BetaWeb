import React, { Component } from "react";
import { Button, Input, FormFeedback, Form, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./RegistroEstudiante.css";
import estudiante from "./Estudiante";

class RegistroEstudiante extends Component {
  state = {
    abierto: false,
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
      fecha_nacimiento: "",
      mensajeNombre: "",
      mensajeApellido_paterno: "",
      mensajeApellido_materno: "",
      mensajeEmail: "",
      mensajeUsername: "",
      mensajePasswd: "",
      mensajePasswd2: "",
      mensajeFecha_nacimiento: "",
      invalidNombre: false,
      invalidApellido_paterno: false,
      invalidApellido_materno: false,
      invalidEmail: false,
      invalidUsername: false,
      invalidPasswd: false,
      invalidPasswd2: false,
      invalidFecha_nacimiento: false,
    };
    this.onChange = this.onChange.bind(this);
    this.enviarAlaBD = this.enviarAlaBD.bind(this);
    console.log("w");
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
    console.log("hola");
    e.preventDefault();

    let valido = true;
    const {
      nombre,
      apellido_paterno,
      apellido_materno,
      username,
      passwd2,
      fecha_nacimiento,
      email,
    } = this.state;

    if (nombre.trim() === "") {
      this.setState({
        invalidNombre: true,
      });
      valido = false;
    }
    if (
      apellido_paterno.trim() === "" ||
      apellido_paterno.length < 3 ||
      apellido_paterno.length > 20
    ) {
      this.setState({
        invalidApellido_paterno: true,
      });
      valido = false;
    }
    if (
      apellido_materno.trim() === "" ||
      apellido_materno.length < 3 ||
      apellido_materno.length > 20
    ) {
      this.setState({
        invalidApellido_materno: true,
      });
      valido = false;
    }
    if (email === "") {
      this.setState({
        invalidEmail: true,
      });
      valido = false;
    }
    if (username.trim() === "" || username.length < 3 || username.length > 20) {
      this.setState({
        invalidUsername: true,
      });
      valido = false;
    }

    if (passwd2 === "" || passwd2.length > 20 || passwd2.length < 4) {
      this.setState({
        invalidPasswd2: true,
        invalidPasswd: true,
      });
      valido = false;
    }
    if (fecha_nacimiento === "") {
      this.setState({
        invalidFecha_nacimiento: true,
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
      top: "26%",
      left: "50%",
      transform: "translate(-50%, -90%)",
      width: "22em",
      height: "200px",
    };

    const {
      invalidNombre,
      invalidApellido_paterno,
      invalidApellido_materno,
      invalidUsername,
      invalidPasswd2,
      invalidEmail,
      invalidFecha_nacimiento,
    } = this.state;

    return (
      <>
        <div className=" containerR">
          <div className="">
            <Form
              className="form-horizontal"
              onSubmit={(e) => this.enviarAlaBD(e)}
            >
              <br />
              <br />
              <fieldset class="border border-white">
                <legend className="text-white header centro">
                  Registro Estudiante
                </legend>
                <br />
                <br />
                <div className="col-md-15 offset-md-0">
                  <div className="">
                    <span className="col-md-1 ms-auto  text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-10 offset-md-1 a">
                      <Label for="apellido_paterno" className="texto">
                        Nombre
                      </Label>
                      <Input
                        type="text"
                        id="nombre"
                        name="nombre"
                        pattern="[A-Za-z]+"
                        minLength="3"
                        maxlength="20"
                        placeholder="Ej.: Marco"
                        className={`form-control ${
                          invalidNombre ? "is-invalid" : ""
                        }`}
                        onChange={
                          (this.onChange,
                          (event) =>
                            this.setState({ nombre: event.target.value }))
                        }
                        invalid={
                          invalidNombre ? invalidNombre.toString() : undefined
                        }
                      />
                      <p className="caracteres text-white"></p>
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-10 offset-md-1 a">
                      <Label for="apellido_paterno" className="texto">
                        Apellido Paterno
                      </Label>
                      <Input
                        id="apellido_paterno"
                        minLength="3"
                        maxLength={20}
                        name="apellido_paterno"
                        type="text"
                        pattern="[A-Za-z]+"
                        placeholder="Ej.: Paredes"
                        className={`form-control ${
                          invalidApellido_paterno ? "is-invalid" : ""
                        }`}
                        //value={this.state.apellido_paterno}
                        onChange={
                          (this.onChange,
                          (event) =>
                            this.setState({
                              apellido_paterno: event.target.value,
                            }))
                        }
                        invalid={
                          invalidApellido_paterno
                            ? invalidApellido_paterno.toString()
                            : undefined
                        }
                      />
                      <p className="caracteres text-white"></p>
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user bigicon"></i>
                    </span>
                    <div className="col-md-10 offset-md-1 a">
                      <Label for="lsname" className="texto">
                        Apellido Materno
                      </Label>
                      <Input
                        id="lsname"
                        name="lsname"
                        type="text"
                        pattern="[A-Za-z]+"
                        minLength="3"
                        maxLength="20"
                        placeholder="Ej.: Ledezma"
                        className={`form-control ${
                          invalidApellido_materno ? "is-invalid" : ""
                        }`}
                        value={this.state.apellido_materno}
                        onChange={
                          (this.onChange,
                          (event) =>
                            this.setState({
                              apellido_materno: event.target.value,
                            }))
                        }
                        invalid={
                          invalidApellido_materno
                            ? invalidApellido_materno.toString()
                            : undefined
                        }
                      />
                      <p className="caracteres text-white"></p>
                    </div>
                  </div>

                  <div className="bootstrap-iso">
                    <div className="col-md-10 offset-md-1 a">
                      <div className="form-group">
                        <Label for="date" className="texto">
                          Fecha de nacimiento
                        </Label>
                        <Input
                          className={`form-control ${
                            invalidFecha_nacimiento ? "is-invalid" : ""
                          }`}
                          id="date"
                          name="fecha_nacimiento"
                          placeholder="Fecha de nacimiento"
                          type="date"
                          //value={fecha_nacimiento}
                          min="1995-01-01"
                          max="2007-12-31"
                          onChange={
                            (this.onChange,
                            (event) =>
                              this.setState({
                                fecha_nacimiento: event.target.value,
                              }))
                          }
                          invalid={
                            invalidFecha_nacimiento
                              ? invalidFecha_nacimiento.toString()
                              : undefined
                          }
                        />
                        <p className="caracteres text-white">
                        
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i class="fa fa-envelope-o bigicon"></i>
                    </span>
                    <div className="col-md-10 offset-md-1 a">
                      <Label for="email" className="texto">
                        Correo electronico
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        minLength="3"
                        maxLength="20"
                        placeholder="Ej.: algo123@gmail.com"
                        pattern=".+@gmail.com"
                        className={`form-control ${
                          invalidEmail ? "is-invalid" : ""
                        }`}
                        //value={email}
                        onChange={
                          (this.onChange,
                          (event) =>
                            this.setState({ email: event.target.value }))
                        }
                        invalid={
                          invalidEmail ? invalidEmail.toString() : undefined
                        }
                      />
                      <p className="caracteres text-white"></p>
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-user-square bigicon"></i>
                    </span>
                    <div className="col-md-10 offset-md-1 a">
                      <Label for="usuario" className="texto">
                        Usuario
                      </Label>
                      <Input
                        placeholder="Ej.: marquito123"
                        id="usuario"
                        name="usuario"
                        type="text"
                        name="username"
                        pattern="[A-Za-z0-9]{1,15}"
                        minLength="3"
                        maxLength="20"
                        className={`form-control ${
                          invalidUsername ? "is-invalid" : ""
                        }`}
                        value={this.state.username}
                        onChange={
                          (this.onChange,
                          (event) =>
                            this.setState({ username: event.target.value }))
                        }
                        invalid={
                          invalidUsername
                            ? invalidUsername.toString()
                            : undefined
                        }
                      />
                      <p className="caracteres text-white"></p>
                    </div>
                  </div>

                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center">
                      <i className="fa fa-fw fa-eye password-icon show-password "></i>
                    </span>
                    <div className="col-md-10 offset-md-1 a">
                      <Label for="passwd" className="texto">
                        Contraseña
                      </Label>
                      <Input
                        type="password"
                        id="passwd"
                        name="passwd"
                        pattern="[A-Za-z0-9]{1,15}"
                        minLength="8"
                        maxLength="20"
                        className={`form-control ${
                          invalidPasswd2 ? "is-invalid" : ""
                        }`}
                        value="clave"
                        placeholder="Ej.: marco123A"
                        value={this.state.passwd2}
                        onChange={
                          (this.onChange,
                          (event) =>
                            this.setState({ passwd2: event.target.value }))
                        }
                        invalid={
                          invalidPasswd2 ? invalidPasswd2.toString() : undefined
                        }
                      />
                      <p className="caracteres text-white"></p>
                      <FormFeedback tooltip id="mensajePassword">
                        {this.state.mensajePasswd}
                      </FormFeedback>
                    </div>
                  </div>

                  <div className="form-group centro">
                    <div className="col-md-8 offset-md-3 ">
                      <div className="row">
                        <div className="col-md-1">
                          <Button
                            type="reset"
                            className="btnn btn-primary btn-lg"
                            id="botonCrearCancelarEst"
                            onChange={this.onChange}
                            href="/"
                          >
                            Cancelar
                          </Button>
                        </div>

                        <div className="col-md-7 ms-auto">
                          <Button
                            type="submit"
                            className="btnn btn-primary btn-lg"
                            type="submit"
                          >
                            Registrarme
                          </Button>
                        </div>
                      </div>
                      <br />
                    </div>
                    <p>
                      <a href="/inicio" className="text-white">
                        ¿Ya tienes cuenta?
                      </a>
                    </p>
                  </div>
                </div>
              </fieldset>
            </Form>
          </div>
        </div>
      </>
    );
  }
  async onClickSave() {
    const res = await estudiante.create(this.state);
    console.log(res);
    if (res) {
      alert("Estudiante Registrado");
      window.location.pathname = "/inicio";
    } else {
      alert("Error al registrar Estudiante, el email o usuario ya esta en uso");
    }
  }
}

export default RegistroEstudiante;
