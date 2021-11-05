import React from "react";
import Bienvenida from "../components/Bienvenida";
import BienvenidaEstudiante from "../components/BienvenidaEstudiante";
import NavegacionEstudiante from "../components/NavegacionEstudiante";
import SliderEstudiante from "../components/SliderEstudiante";


function Estudiante() {
  return (
    <>
      <div className="navegacion-menu">
        <NavegacionEstudiante />
      </div>
         <div className="container-estudiante">
            <div className="contenido-pagina">
                <div className="BienvenidaEstudiante">
                    <BienvenidaEstudiante />
                </div>
                <div className="slider-instructor">
                     <SliderEstudiante />
          </div>
             </div>
        </div>
          
        
    </>
  );
}

export default Estudiante;