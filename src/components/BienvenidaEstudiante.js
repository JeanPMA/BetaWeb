import { render } from "@testing-library/react";
import React, {Component} from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class BienvenidaEstudiante extends Component {
 
  componentDidMount(){
    if(!cookies.get('username')){
        window.location.href="./";
    }else{
      if(!cookies.get('id_estudiante')){
        window.location.href="./instructor";
    }
    }
  }
  
  render(){
   
    return(
    <div>
      <h3>Bienvenido {cookies.get('nombre')} {cookies.get('apellido_paterno')} {cookies.get('apellido_materno')}</h3>
      <div>
      
      </div>
    </div>
        
  );
  }
}

export default BienvenidaEstudiante;