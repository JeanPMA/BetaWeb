import React, { useState } from "react";
import InscribirCurso from "./InscribirCurso";
import MisVideo from "../misCursosEstudiante/MisVideo";
import "./InscribirCurso.css";

const CursoEstudiante = ({ cursos = [] }) => {
  const [curso, setCurso] = useState({});
  return (
    <div>
      {cursos.map((item) => (
        <div
          className="p-2 text-white overflow border-top border-start border-end border-bottom border-white"
          id="cursos"
        >
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
              height="150px"
              className=" alin border-top border-start border-end border-bottom border-white"
            />
          </a>
          <div className=" card-body style m-0 ">
            <h4 id="instructor-nombre" className="card-title">
              {item.instructor.nombre}
            </h4>
            <h4 id="instructor-apellido-paterno" className="card-title">
              {item.instructor.apellido_paterno}
            </h4>
            <h4 id="instructor-apellido-materno" className="card-title">
              {item.instructor.apellido_materno}
            </h4><br />
            <a
              type="button"
              onClick={() => setCurso(item)}
              className="vistaprevia"
              data-bs-toggle="modal"
              data-bs-target="#videoModal"
              id="nombre-curso"
            >
              {" "}
              <p id="nombre-del-curso" className="card-text">
                {item.nombre}
              </p>
            </a>
            <p id="Descripcion" className="card-text">
              {item.descripcion}
            </p>
            <div class="d-grid justify-content-md-end">
              <button
                type="button"
                onClick={() => setCurso(item)}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                className="  btnnn btn-outline-success boton-inscribirse  "
              >
                Inscribirse
              </button>
            </div>
          </div>
        </div>
      ))}
      <InscribirCurso curso={curso} />
      <MisVideo curso={curso} />
    </div>
  );
};

export default CursoEstudiante;
