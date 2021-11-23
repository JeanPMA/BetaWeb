import { render } from "@testing-library/react";
import React, {Component} from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class BienvenidaAdministrador extends Component {
 
 /* componentDidMount(){
    if(!cookies.get('username')){
        window.location.href="./";
    }else{
      if(!cookies.get('id_estudiante')){
        window.location.href="./instructor";
    }
    }
  }*/
  
  render(){
   
    return(
        <div><div className="list-group">
        <div className="col-md-6 col align-self-center">
          <div className="container">
            <h3 className="text-white">Mis Instructores</h3>
            <table className="table text-white">
              <thead>
                <tr>
                  <th scope="col" className="text-white">
                    Nombres
                  </th>
                  
                </tr>
              </thead>
              </table>
              </div>
        </div>
    </div></div>
        
  );
  }
}

export default BienvenidaAdministrador;