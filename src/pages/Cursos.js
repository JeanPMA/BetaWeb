import React from "react";
import Navegacion from "../components/Navegacion";
import Curso from "../components/Curso";
function Cursos() {
  return (
    <div>
      <Navegacion />
      <div className="container" id="cursosRegistrados">
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
      </div>
    </div>
  );
}

export default Cursos;
