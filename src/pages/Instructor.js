import React from "react";
import Bienvenida from "../components/Bienvenida";
import NavegacionInstructor from "../components/NavegacionInstructor";
import SliderInstructor from "../components/SliderInstructor";
import Cerrar from "../misCursosinst/Cerrar";
import End from "../misCursosinst/End";

function Instructor() {
  return (
    <>
      <div className="navegacion-menu">
        <NavegacionInstructor />
      </div>
      <div className="container-instructor">
        <div className="contenido-pagina">
          <div className="bienvenida">
            <Bienvenida />
          </div>

          <div className="slider-instructor">
            <SliderInstructor />
          </div>
        </div>
      </div>
    </>
  );
}

export default Instructor;
