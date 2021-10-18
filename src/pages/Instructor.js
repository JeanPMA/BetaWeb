import React from "react";
import Bienvenida from "../components/Bienvenida";
import NavegacionInstructor from "../components/NavegacionInstructor";
import SliderInstructor from "../components/SliderInstructor";

function Instructor() {
  return (
    <div className="container-instructor">
      <div className="navegacion-menu">
        <NavegacionInstructor />
      </div>
      <div className="contenido-pagina">
        <div className="bienvenida">
          <Bienvenida />
        </div>
        <div className="slider-instructor">
          <SliderInstructor />
        </div>
      </div>
    </div>
  );
}

export default Instructor;
