import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logoLupa from "../imagenes/logoLupa.png";
import Cursos from "../pages/Cursos";
class Navigation extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light" id="navInicio">
        <a
          id="tituloPagina"
          class="navbar-brand"
          href="javascript:history.back()"
          border-width="medium"
        >
          BETAWEB
          <img
            src="https://previews.123rf.com/images/mochipet/mochipet1707/mochipet170700056/82167896-ilustraci%C3%B3n-vectorial-bombilla-con-haces-de-luz-en-estilo-pop-art-dibujos-animados-con-contorno-aisl.jpg"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt="Logo BETAWEB"
          />
        </a>

        <div class="mr-right">
          <div class="p-2 bd-highlight btInicio">
            <Link to="/cursos" id="boton_buscar" className="btn" type="button">
              Cursos
            </Link>

            <Link
              to="/inicio"
              id="boton_loginInicio"
              className="btn "
              type="button"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/contacto"
              id="boton_buscar"
              className="btn "
              type="button"
            >
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
