import React, { Component } from "react";
import {
    Button,
    Input,
    Label,
    FormFeedback,
    Form,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./RegistroEstudiante.css";
import estudiante from "./Estudiante";
import estudiante2 from "./Estudiante2";

const baseUrl3 = "https://betaweb-back.herokuapp.com/api/usuario";

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
            mensajePasswd3: "",
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
        console.log("w")
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
        console.log("hola")
        e.preventDefault();

        let valido = true;
        const { nombre, apellido_paterno ,apellido_materno,username,passwd2,fecha_nacimiento,email} = this.state
        
        
        if (nombre.trim() === "" || nombre.length < 3 || nombre.length > 20) {
            
            this.setState({
                invalidNombre: true,
            });
            valido = false;
        }
        if (apellido_paterno.trim() === "" || apellido_paterno.length<3 || apellido_paterno.length>20) {
            this.setState({
                invalidApellido_paterno: true,
            });
            valido = false;
        }
        if (apellido_materno.trim() === "" || apellido_materno.length<3 || apellido_materno.length>20) {
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
        if (username.trim() === "" || username.length<3 || username.length>20) {
            this.setState({
                invalidUsername: true,
            });
            valido = false;
        }

        if (passwd2 === "" || passwd2.length>20 || passwd2.length<4 ) {
            this.setState({
                invalidPasswd2: true,
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

        const { invalidNombre , invalidApellido_paterno,invalidApellido_materno, invalidUsername,invalidPasswd2, invalidEmail,invalidFecha_nacimiento} = this.state;

        return (
            <>
                
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 ms-auto">
                                <Form className="form-horizontal" onSubmit={(e) =>
                                    this.enviarAlaBD(e)}>
                                    <br /><br />
                                    <fieldset>
                                        <legend className="text-white header">REGISTRO ESTUDIANTE</legend>
                                        <br /><br />
                                   
                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                            <div className="col-md-8 ">
                                                <Input type="text"

                                                    id="nombre"
                                                    name="nombre"
                                                    minLength={2}
                                                    maxLength={20}
                                                    placeholder="Nombre"
                                                    className={`form-control ${invalidNombre ? "is-invalid" : ""}`}
                                                    onChange={
                                                        (this.onChange,
                                                            (event) => this.setState({ nombre: event.target.value }))
                                                    }
                                                    invalid={invalidNombre ? invalidNombre.toString() : undefined}
                                                />
                                                <p className="caracteres text-white" >Caract. Max. 20</p>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                            <div className="col-md-8">
                                                <Input  id="apellido_paterno"
                                                    
                                                    maxLength={20} name="apellido_paterno"
                                                    type="text"
                                                    placeholder="Apellido Paterno"
                                                    className={`form-control ${invalidApellido_paterno ? "is-invalid" : ""}`}
                                                    //value={this.state.apellido_paterno}
                                                    onChange={
                                                        (this.onChange,
                                                            (event) =>
                                                                this.setState({ apellido_paterno: event.target.value }))
                                                    }
                                                    invalid={invalidApellido_paterno ?invalidApellido_paterno.toString():undefined}
                                                />
                                                <p className="caracteres text-white" >Caract. Max. 20</p>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                            <div className="col-md-8">
                                                <input id="lsname"
                                                    name="lsname"
                                                    type="text"
                                                    maxLength="20"
                                                    placeholder="Apellido Materno"
                                                    className={`form-control ${invalidApellido_materno ? "is-invalid" : ""}`}
                                                    value={this.state.apellido_materno}
                                                    onChange={
                                                        (this.onChange,
                                                            (event) =>
                                                                this.setState({ apellido_materno: event.target.value }))
                                                    }
                                                    invalid={invalidApellido_materno? invalidApellido_materno.toString():undefined} />
                                                <p className="caracteres text-white" >Caract. Max. 20</p>
                                            </div>
                                        </div>

                                        <div className="bootstrap-iso">
                                            <div className="col-md-8 col-sm-6 col-xs-12">
                                                <div className="form-group">
                                                    <Input className={`form-control ${invalidFecha_nacimiento ? "is-invalid" : ""}`}
                                                        id="date"
                                                        name="fecha_nacimiento"
                                                        placeholder="año/mes/dia"
                                                        type="date"
                                                        //value={fecha_nacimiento}
                                                        min="1995-01-01" max="2007-12-31"
                                                        onChange={
                                                            (this.onChange,
                                                                (event) =>
                                                                    this.setState({ fecha_nacimiento: event.target.value }))
                                                        }
                                                        invalid={invalidFecha_nacimiento?invalidFecha_nacimiento.toString():undefined} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center">
                                                <i class="fa fa-envelope-o bigicon"></i>
                                            </span>
                                            <div className="col-md-8">
                                                <Input id="email"
                                                    name="email"
                                                    type="email"
                                                    maxLength="20"
                                                    placeholder="Email "
                                                    pattern=".+@gmail.com"
                                                    className={`form-control ${invalidEmail ? "is-invalid" : ""}`}
                                                    //value={email}
                                                    onChange={
                                                        (this.onChange,
                                                            (event) => this.setState({ email: event.target.value }))
                                                    }
                                                    invalid={invalidEmail?invalidEmail.toString():undefined}
                                                />
                                                <p className="caracteres text-white">Caract. Max. 20</p>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center">
                                                <i className="fa fa-user-square bigicon"></i>
                                            </span>
                                            <div className="col-md-8">
                                                <Input id="usuario"
                                                    name="usuario"
                                                    type="text"
                                                  
                                                    minLength="3"
                                                    maxLength="20"
                                                    placeholder="Usuario"
                                                    className={`form-control ${invalidUsername ? "is-invalid" : ""}`}
                                                    value={this.state.username}
                                                    onChange={
                                                        (this.onChange,
                                                            (event) =>
                                                                this.setState({ username: event.target.value }))
                                                    }
                                                    invalid={invalidUsername?invalidUsername.toString():undefined} />
                                                <p className="caracteres text-white" >Caract. Max. 20</p>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center">
                                                <i className="fa fa-fw fa-eye password-icon show-password "></i>
                                            </span>
                                            <div className="col-md-8">
                                                <Input
                                                    type="password"
                                                    id="passwd"
                                                    name="passwd"
                                                   
                                                    minLength="8"
                                                    maxLength="20"
                                                    className={`form-control ${invalidPasswd2 ? "is-invalid" : ""}`}
                                                    value="clave"
                                                    placeholder="Vuelve a escribir la contraseña"
                                                    value={this.state.passwd2}
                                                    onChange={
                                                        (this.onChange,
                                                            (event) => this.setState({ passwd2: event.target.value }))
                                                    }
                                                    invalid={invalidPasswd2?invalidPasswd2.toString():undefined}
                                                />
                                                <p className="caracteres text-white">Caract. Max. 20</p>
                                                <FormFeedback tooltip id="mensajePassword">
                                                    {this.state.mensajePasswd3}
                                                </FormFeedback>


                                            </div>
                                        </div>
                                        <br />

                                        <div className="form-group">
                                            <div className="col-md-8 text-center">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <Button type="submit"
                                                            className="btnn btn-primary btn-lg"
                                                            type="submit"
                                                            id="botonCrearAceptar"
                                                        >Registrarme</Button>
                                                    </div>
                                                    <div className="col-md-4 ms-auto">
                                                        <Button type="reset"
                                                            className="btnn btn-primary btn-lg"
                                                            id="botonCrearCancelar"
                                                            href="/"
                                                        >Cancelar</Button>
                                                    </div>
                                                </div>
                                                <p><a href="/inicio">¿Ya tengo Cuenta?</a></p>
                                            </div>
                                        </div>
                                    </fieldset>
                                </Form>
                            </div>
                        </div>
                    </div>
         
            </>
        );

    }
    async onClickSave() {
        const res = await estudiante.create(this.state);
       // const res2 = await estudiante2.create(this.state);
        if (res.success ) {
          //  window.location.href = window.location.href;
            alert("Estudiante Registrado");
        } else {
            alert("Error al registrar Estudiante, el email o usuario ya esta en uso");
         //   window.location.href = window.location.href;
        }
    }
}


export default RegistroEstudiante;