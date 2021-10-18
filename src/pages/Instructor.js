import React from "react";
import ImagenUsuario from "../assets/usuario.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";

function Instructor() {
  return (
    <div className="container-instructor">
      <div className="aside">
        <div className="foto-y-nombre">
          <img
            src={ImagenUsuario}
            alt="foto de perfil"
            className="foto-usuario"
          />
          <h3 className="nombre-usuario">Nombre del usuario</h3>
        </div>
        <div className="menu-instructor">
          <h2 className="texto-menu">Menú</h2>
          <div className="botones-menu-instructor">
            <Link
              to="/instructor/#"
              type="button"
              className="boton-inicio-instructor text-white"
            >
              <div className="icono-inicio-cursos-instructor">
                <FontAwesomeIcon icon={faHome} />
              </div>

              <span>Inicio</span>
            </Link>

            <Link
              to="/instructor/#"
              type="button"
              className="boton-cursos-instructor  text-white"
            >
              <div className="icono-inicio-cursos-instructor icono-boton-instructor">
                <FontAwesomeIcon icon={faPlayCircle} />{" "}
              </div>
              <span>Mis Cursos</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
