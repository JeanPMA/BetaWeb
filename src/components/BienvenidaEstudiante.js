import { render } from "@testing-library/react";
import React, {Component} from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class BienvenidaEstudiante extends Component {
  cerrarSesion=()=>{
    cookies.remove('id_usuario', {path: "/"});
    cookies.remove('nombre_completo', {path: "/"});
    cookies.remove('id_estudiante', {path: "/"});
    cookies.remove('username', {path: "/"});
    window.location.href='./';
  }
  componentDidMount(){
    if(!cookies.get('username')){
        window.location.href="./";
    }
  }
  render(){
    console.log('id_usuario' + cookies.get('id_usuario'));
      console.log('nombre_completo' + cookies.get('nombre_completo'));
      console.log('username' + cookies.get('username'));
      console.log('passwd' + cookies.get('passwd'));
      console.log('id_estudiante' + cookies.get('id_estudiante'));

    return(
    <div>
      <h3>Bienvenido {cookies.get('nombre_completo')}</h3>
      <div>
      <button id="Boton_cerrar" onClick={()=>this.cerrarSesion()}>Cerrar sesión</button>
      </div>
    </div>
        
  );
  }
}

export default BienvenidaEstudiante;