import { render } from "@testing-library/react";
import React, {Component} from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Bienvenida extends Component {
   cerrarSesion=()=>{
    cookies.remove('id', {path: "/"});
    cookies.remove('nombre', {path: "/"});
    cookies.remove('apellido', {path: "/"});
    cookies.remove('email', {path: "/"});
    cookies.remove('username', {path: "/"});
  
    window.location.href='./';
  }
  componentDidMount(){
    if(!cookies.get('username')){
        window.location.href="./";
    }
  }
  render() {
      console.log('id' + cookies.get('id'));
      console.log('nombre' + cookies.get('nombre'));
      console.log('apellido' + cookies.get('apellido'));
      console.log('email' + cookies.get('email'));
      console.log('username' + cookies.get('username'));
      console.log('contraseña' + cookies.get('contraseña'));

  return (
    
    <div>
      <h3>Bienvenido {cookies.get('nombre')} {cookies.get('apellido')}</h3>
      <div>
      <button id="Boton_cerrar" onClick={()=>this.cerrarSesion()}>Cerrar sesión</button>
      </div>
    </div>
        
  );
  }
}

export default Bienvenida;
