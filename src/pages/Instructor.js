import React from "react";
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
