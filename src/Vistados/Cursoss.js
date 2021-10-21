import React from "react";
import imagenCurso from "../assets/imagenCurso.jpg";
import "./Cursoss.css";


function Cursoss() {
   
  return (
    <div className="p-2 text-white overflow" id="cursos">
       
        <img
        src={imagenCurso}
        alt=""
        width="200px"
        height="120px"
        className=" alin border-top border-start border-end border-bottom border-white"
      />
      <div className=" card-body style " >
        <h4 id="instructor" className="card-title">
          Instructor
        </h4>
        <p id="nombre-del-curso" className="card-text">
          Nombre del curso
        </p>
        <button type="button" id="btn-inscribirse">
          Inscribirse
        </button>
      </div>
     
    </div>
    
 
  );
 
}

export default Cursoss;