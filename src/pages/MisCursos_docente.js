import React from "react";
import NavegacionInstructor from "../components/NavegacionInstructor";
import Contenido_misCursosDocente from "../components/Contenido_misCursosDocente";
import Miscursos from "../misCursosinst/Miscursos";
import Cerrar from "../misCursosinst/Cerrar";

function cursos_docente() {
  return (
    <div className="container-instructor">
      <div className="navegacion-menu">
        <NavegacionInstructor />
        <div>
        <Miscursos/>
        <Cerrar/>
        </div>
      
      </div>
      <div className="contenido">
        <Contenido_misCursosDocente />
      </div>
    </div>
  );
}

export default cursos_docente;