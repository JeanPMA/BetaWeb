import React from "react";
import imagenCurso from "../assets/imagenCurso.jpg";
//import "./Cursoss.css";

const CursoEstudiante = ({ cursos = [] }) => {
  return (
    <div>
      {cursos.map((item) => (
        <div className="p-2 text-white overflow" id="cursos">
          <a href="#">
            <img
              src={item.ubicacion_img}
              alt=""
              width="200px"
              height="120px"
              className=" alin border-top border-start border-end border-bottom border-white"
            />
          </a>
          <div className=" card-body style ">
            <h4 id="instructor-nombre" className="card-title">
              {item.instructor.nombre}
            </h4>
            <h4 id="instructor-apellido-paterno" className="card-title">
              {item.instructor.apellido_paterno}
            </h4>
            <h4 id="instructor-apellido-materno" className="card-title">
              {item.instructor.apellido_materno}
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
};

export default CursoEstudiante;
