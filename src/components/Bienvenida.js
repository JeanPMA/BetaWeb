import { render } from "@testing-library/react";
import React, {Component} from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Bienvenida extends Component {
   cerrarSesion=()=>{
    cookies.remove('id_usuario', {path: "/"});
    cookies.remove('nombre', {path: "/"});
    cookies.remove('apellido_paterno', {path: "/"});
    cookies.remove('apellido_materno', {path: "/"});
    cookies.remove('email', {path: "/"});
    cookies.remove('username', {path: "/"});
    cookies.remove('id_instructor', {path: "/"});
    window.location.href='./';
  }
  componentDidMount(){
    if(!cookies.get('username')){
        window.location.href="./";
    }
  }
  render() {
      console.log('id_usuario' + cookies.get('id_usuario'));
      console.log('nombre' + cookies.get('nombre'));
      console.log('apellido_paterno' + cookies.get('apellido_paterno'));
      console.log('apellido_materno' + cookies.get('apellido_materno'));
      console.log('email' + cookies.get('email'));
      console.log('username' + cookies.get('username'));
      console.log('passwd' + cookies.get('passwd'));
      console.log('id_instructor' + cookies.get('id_instructor'));

  return (
    
    <div>
      <h3>Bienvenido {cookies.get('nombre')} {cookies.get('apellido_paterno')} {cookies.get('apellido_materno')}</h3>
      <div>
      <button id="Boton_cerrar" onClick={()=>this.cerrarSesion()}>Cerrar sesión</button>
      </div>
    </div>
        
  );
  }
}

export default Bienvenida;
