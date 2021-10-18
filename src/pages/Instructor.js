import React from "react";
import ImagenUsuario from "../assets/usuario.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import NavegacionInstructor from "../components/NavegacionInstructor";

function Instructor() {
  return (
    <div className="container-instructor">
      <div className="navegacion-menu">
        <NavegacionInstructor />
      </div>
      <div className="contenido-pagina"></div>
    </div>
  );
}

export default Instructor;
