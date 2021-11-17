import React, { useState } from "react";
import MisVideo from "../misCursosEstudiante/MisVideo";
import "./Cursoss.css";

const Cursoss = ({ cursos = [] }) => {
  const [curso, setCurso] = useState({});
  return (
    <div>
      {cursos.map((item) => (
        <div
          className="p-2 text-white overflow  border-top border-start border-end border-bottom border-white"
          id="cursos"
        >
          {" "}
          <a
            type="button"
            onClick={() => setCurso(item)}
            className="vistaprevia"
            data-bs-toggle="modal"
            data-bs-target="#videoModal"
          >
            <img
              src={item.ubicacion_img}
              alt=""
              width="200px"
              height="120px"
              className=" alin border-top border-start border-end border-bottom border-white"
            />
          </a>
          <div className=" card-body style contenedor-datos-curso m-0 ">
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
            <a
              type="button"
              onClick={() => setCurso(item)}
              className="vistaprevia"
              data-bs-toggle="modal"
              data-bs-target="#videoModal"
              id="nombre-curso"
            >
              <p id="nombre-del-curso" className="card-text">
                {item.nombre}
              </p>
            </a>
            <p id="Descripcion" className="card-text">
              {item.descripcion}
              <br />
            </p>
          </div>
        </div>
      ))}
      <MisVideo curso={curso} />
    </div>
  );
};

export default Cursoss;
