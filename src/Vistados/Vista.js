import React from "react";
import Curso from "./Cursoss";
import Paginacion from "./Paginacion";
function vista() {
  
  return (
 
    <div>
      <div className="container scroll-container" id="cursosRegistrados">
      <Curso />
      <Curso />
      <Curso />
      <Curso/>
      
      
      </div>
      
      <Paginacion >
      </Paginacion>
    </div>
    
  );
}

export default vista;