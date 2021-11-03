import { render } from "@testing-library/react";
import React, {Component} from "react";
//import Cookies from "universal-cookie";

//const cookies = new Cookies();

class BienvenidaEstudiante extends Component {
  render(){
    return(
    <div>
      <h3>Bienvenido Estudiante</h3>
      <div>
      <button id="Boton_cerrar" >Cerrar sesión</button>
      </div>
    </div>
        
  );
  }
}

export default BienvenidaEstudiante;