import React from "react";
import Curso from "../components/Curso";
function Cursos() {
  return (
    <div>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        class="scrollspy-example"
        tabindex="0"
      >
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
    </div>
  );
}

export default Cursos;