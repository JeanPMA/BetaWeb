import React from "react";

import NavegacionEstudiante from "../components/NavegacionEstudiante";
import ListaEstudiantes from "./ListaEstudiantes";
import MisCursos from "./MisCursos";
import Contenido_misCursosEstudiante from "../components/Contenido_misCursosEstudiante";
function VistaListaEstudiantes() {
  return (
    <>
      <div className="navegacion-menu">
        <NavegacionEstudiante />
      </div>
      <div className="container-instructor">
        <div className="contenido-pagina">
          <div className="contenido">
            <Contenido_misCursosEstudiante />
          </div>
          <div className="lista">
            <ListaEstudiantes />
            <MisCursos />
          </div>
        </div>
      </div>
    </>
  );
}

export default VistaListaEstudiantes;
