import React from "react";
import OfCurso from "./OfCurso";

function OfCursos() {
  return (
    <div className="container">
      <h2 className="text-white">Oferta de cursos</h2>
      <div className="container  p-4 pt-0 border-top border-start border-end border-bottom border-white d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-2 ">
            <OfCurso />
          </div>
          <div className="col-md-2">
            <OfCurso />
          </div>
          <div className="col-md-2 ">
            <OfCurso />
          </div>
          <div className="col-md-2">
            <OfCurso />
          </div>
          <div className="col-md-2 ">
            <OfCurso />
          </div>
          <div className="col-md-2 ">
            <OfCurso />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfCursos;
