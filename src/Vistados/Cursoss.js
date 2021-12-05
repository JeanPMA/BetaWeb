import React, { useState, Link } from "react";
import MisVideo from "../misCursosEstudiante/MisVideo";
import "./Cursoss.css";

const Cursoss = ({ cursos = [] }) => {
  const [curso, setCurso] = useState({});
  console.log(curso.length);
  return (
    <div>
      {cursos.map((item) => (
        <div
          className="p-2 text-white overflow  border-top border-start border-end border-bottom border-white -auto"
          id="cursos"
        >
          {" "}
          <a href="#">
            <img
              src={item.ubicacion_img}
              id="imagen-cursos-estudiante"
              alt=""
              width="200px"
              height="150px"
              className=" alin border-top border-start border-end border-bottom border-white"
            />
          </a>
          <div className=" card-body style contenedor-datos-curso m-0 mt-2">
            <h4 id="instructor-nombre" className="card-title">
              {item.instructor.nombre}
            </h4>
            <h4 id="instructor-apellido-paterno" className="card-title">
              {item.instructor.apellido_paterno}
            </h4>
            <h4 id="instructor-apellido-materno" className="card-title">
              {item.instructor.apellido_materno}
            </h4>
            <br></br>
            <a>
              <p id="nombre-del-curso" className="card-text">
                {item.nombre}
              </p>
            </a>
            <p id="Descripcion" className="card-text">
              {item.descripcion}
              <br />
            </p>
            <div>
              <a
                type="button"
                href="/inicio"
                className=" btn btn-success p-0  "
                id="ver-detalles"
              >
                Ver detalles
              </a>
            </div>
          </div>
        </div>
      ))}
      <MisVideo curso={curso} />
    </div>
  );
};

export default Cursoss;
