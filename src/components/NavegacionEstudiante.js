import React, { Component } from "react";
import ImagenUsuario from "../assets/usuario.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class NavegacionEstudiante extends Component() {
  render() {
    return (
      <div>
        <div>
          <nav class="navbar  navbar-light bg-light">
            <label for="boton-menu" className="icono-menu">
              <FontAwesomeIcon icon={faBars} />
            </label>

            <div className="logo-betasoft">
              <a class="navbar-brand" href="#" border-width="medium">
                BETAWEB
                <img
                  src="https://previews.123rf.com/images/mochipet/mochipet1707/mochipet170700056/82167896-ilustraci%C3%B3n-vectorial-bombilla-con-haces-de-luz-en-estilo-pop-art-dibujos-animados-con-contorno-aisl.jpg"
                  width="30"
                  height="30"
                  class="d-inline-block align-top"
                  alt=""
                />
              </a>
            </div>
          </nav>
        </div>
        <input type="checkbox" id="boton-menu" />
        <div className="container-menu">
          <div class="cont-menu">
            <nav>
              <div className="foto-y-nombre">
                <img
                  src={ImagenUsuario}
                  alt="foto de perfil"
                  className="foto-usuario"
                />
                <h3 className="nombre-usuario">
                  {cookies.get("nombre_completo")}
                </h3>
              </div>
              <div className="menu-instructor">
                <h2 className="texto-menu">Menú</h2>
                <div className="botones-menu-instructor">
                  <Link
                    to="/estudiante"
                    type="button"
                    className="boton-inicio-instructor text-white"
                  >
                    <div className="icono-inicio-cursos-instructor">
                      <FontAwesomeIcon icon={faHome} />
                    </div>
                    <span>Inicio</span>
                  </Link>

                  <Link
                    to="/VistaEstudiante"
                    type="button"
                    type="button"
                    className="boton-cursos-instructor  text-white"
                  >
                    <div className="icono-inicio-cursos-instructor icono-boton-instructor">
                      <FontAwesomeIcon icon={faPlayCircle} />{" "}
                    </div>
                    <span>Mis Cursos</span>
                  </Link>

                  <Link
                    to="/cursosDisponibles"
                    type="button"
                    type="button"
                    className="boton-cursos-instructor  text-white"
                  >
                    <div className="icono-inicio-cursos-instructor icono-boton-instructor">
                      <FontAwesomeIcon icon={faPlayCircle} />{" "}
                    </div>
                    <span>Cursos</span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          <label for="boton-menu" className="icon-equis">
            <FontAwesomeIcon icon={faTimes} />
          </label>
        </div>
      </div>
    );
  }
}
export default NavegacionEstudiante;
