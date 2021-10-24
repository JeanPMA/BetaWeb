import React from "react";
import imagenCurso from "../assets/imagenCurso.jpg";
import "./Cursoss.css";

const Cursoss =({cursos = []}) => {
  return (
    <div>
    {cursos.map((item) => (
    <div className="p-2 text-white overflow" id="cursos">
      <a href="#">
        <img
          src={item.ubicacion}
          alt=""
          width="200px"
          height="120px"
          className=" alin border-top border-start border-end border-bottom border-white"
        />
      </a>
      <div className=" card-body style ">
        <h4 id="instructor" className="card-title">
          {item.instructorName}
        </h4>
        <p id="nombre-del-curso" className="card-text">
          {item.nombre}
        </p>
        <p id="Descripcion" className="card-text">
          {item.descripcion}
          <br />
        </p>
      </div>
    </div>
    ))}
    </div>
  );
}

export default Cursoss;
