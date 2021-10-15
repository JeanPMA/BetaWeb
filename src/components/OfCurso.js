import React from "react";
import imagenCurso from "../assets/imagenCurso.jpg";

function OfCurso() {
  return (
    <a href="https://www.udemy.com/">
      <div
        className="card  border-top border-start border-end border-bottom border-white p-2 text-white"
        id="ofertas"
      >
        <img src={imagenCurso} />
        <div className="card-body">
          <h4 className="card-title">Titulo del curso</h4>
          <p className="card-text ">Descripcion del curso</p>
        </div>
      </div>
    </a>
  );
}

export default OfCurso;
