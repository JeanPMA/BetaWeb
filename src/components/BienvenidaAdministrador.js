import { render } from "@testing-library/react";
import React, {Component} from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class BienvenidaAdministrador extends Component {
 
  componentDidMount(){
    if(!cookies.get('username')){
        window.location.href="./";
    }else{
      if(!cookies.get('id_admin')){
        if(!cookies.get('id_instructor')){ 
          window.location.href="./estudiante";
        }else{
          window.location.href="./instructor";
        }

    }
    }
  }
  
  render(){
   
    return(
        <div></div>
        
  );
  }
}

export default BienvenidaAdministrador;