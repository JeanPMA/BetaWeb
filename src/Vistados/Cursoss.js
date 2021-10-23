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
        <p id="Descripcion" className="card-text">
         Descripcion:
         <br/>
         <p  className="card-text">
         ...
        </p>
        </p>
        
       
      </div>
     
    </div>
    
 
  );
 
}

export default Cursoss;