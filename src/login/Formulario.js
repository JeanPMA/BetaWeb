import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Formulario.css";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";

const baseUrl = "https://betaweb-back.herokuapp.com/api/usuario";

const cookies = new Cookies();

class Formulario extends Component {
  
  state = {
    form: {
      username: "",
      passwd: "",
    },
  };

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  iniciarSesion = async () => {
    await axios
      .get(baseUrl, {
        params: {
          username: this.state.form.username,
          passwd: this.state.form.passwd,
        },
      })

      .then((response) => {
        return response.data;
      })
      .then((response) => {
        var contador = response.length;
        if (response.length > 0) {
          for (var i = 0; i < response.length; i++) {
            if (
              response[i].username == this.state.form.username &&
              response[i].passwd == this.state.form.passwd
            ) {
              var respuesta = response[i];
              
              cookies.set("id_usuario", respuesta.id_usuario, { path: "/" });
              cookies.set("username", respuesta.username, { path: "/" });
              cookies.set("passwd", respuesta.passwd, { path: "/" });
              
              
              
              
              
              if (respuesta.instructor==null && respuesta.admin==null){
                cookies.set("instructor", respuesta.instructor, { path: "/" }); 
                cookies.set("admin", respuesta.admin, { path: "/" }); 
                cookies.set("id_estudiante", respuesta.estudiante.id_estudiante, {path: "/",});
                cookies.set("nombre", respuesta.estudiante.nombre, { path: "/" });
                cookies.set("apellido_paterno", respuesta.estudiante.apellido_paterno,{ path: "/" });
                cookies.set("apellido_materno",respuesta.estudiante.apellido_materno,{ path: "/" });

                
              window.location.href = "../estudiante";
              break;
              }
              else if(respuesta.instructor==null && respuesta.estudiante==null){
                cookies.set("instructor", respuesta.instructor, { path: "/" }); 
                cookies.set("estudiante", respuesta.estudiante, {path: "/",});
                cookies.set("id_admin", respuesta.admin.id_administrador, {path: "/",});
                cookies.set("nombre", respuesta.admin.nombre, { path: "/" });
                cookies.set("apellido_paterno", respuesta.admin.apellido_paterno,{ path: "/" });
                cookies.set("apellido_materno",respuesta.admin.apellido_materno,{ path: "/" });
                window.location.href = "../administrador";
                break;
              }
              else{
                cookies.set("id_instructor", respuesta.instructor.id_instructor, {path: "/",});
                cookies.set("nombre", respuesta.instructor.nombre, { path: "/" });
                cookies.set("apellido_paterno", respuesta.instructor.apellido_paterno,{ path: "/" });
                cookies.set("apellido_materno",respuesta.instructor.apellido_materno,{ path: "/" });
                cookies.set("estudiante", respuesta.estudiante, {path: "/",});
                cookies.set("admin", respuesta.admin, { path: "/" }); 
                window.location.href = "../instructor";
                break;
              }
            }
            if (contador == i+1 ) {
              alert("El usuario o la contraseña no son correctos!!!");
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    if (cookies.get("username") && (cookies.get('estudiante'))=="null"){
      
     
      window.location.href = "../instructor";
    }
     
    
  }

  componentDidMount() {
    if (cookies.get("username") && (!cookies.get('instructor'))=='null') {
      
     
      window.location.href = "../estudiante";
    }
     
    
  }
  
  componentDidMount() {
    if (cookies.get("username") && (!cookies.get('admin'))=='null') {
      
     
      window.location.href = "../administrador";
    }
     
    
  }

  render() {
    return (
      
      <div class="d-flex justify-content-center">
        
      <div className="containerPrincipal">
        
        <div className="containerSecundario">
           <legend className="tituloLogin text-white header centro">
                  Iniciar Sesión
                </legend>
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="passwd"
              onChange={this.handleChange}
            />
            <br />
            <button
              id="boton_iniciarSesion"
              onClick={() => this.iniciarSesion()}
            >
              Iniciar Sesión
            </button>
            
          </div>
          <p id="noCuenta">
                <a href="/registro" className="text-white">
                        ¿No tienes cuenta? Haz click aqui
                </a>
           </p>
        </div>
      </div>
      </div>
    );
  }
}
export default Formulario;
