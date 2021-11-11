import { render } from "@testing-library/react";
import React, {Component} from "react";
import Cookies from "universal-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const cookies = new Cookies();

 class Navegador extends Component{
    render(){
        return(
    <div>
        <nav class="navbar  navbar-light bg-light">
          <label for="boton-menu" className="icono-menu">
            <FontAwesomeIcon icon={faBars} />
          </label>

          <div className="logo-betasoft">
            <a class="navbar-brand" href="#" border-width="medium" >
              BETAWEB
              <img
                src="https://previews.123rf.com/images/mochipet/mochipet1707/mochipet170700056/82167896-ilustraci%C3%B3n-vectorial-bombilla-con-haces-de-luz-en-estilo-pop-art-dibujos-animados-con-contorno-aisl.jpg"
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt=""
              />
              <button id="Boton_cerrar" onClick={()=>this.cerrarSesion()}>Cerrar sesión</button>
            </a>
          </div>
        </nav>
      </div>
        )
    }
 }

 export default Navegador;