import React from "react";

import BienvenidaAdministrador from "../components/BienvenidaAdministrador";
import NavegacionAdministrador from "../components/NavegacionAdministrador";
import Contenido_Administrador from "../components/Contenido_Administrador";


function Estudiante() {
  return (
    <>
      <div className="navegacion-menu">
        <NavegacionAdministrador />
      </div>
         <div className="container-estudiante">
            <div className="contenido-pagina">
                <div className="BotonAgregarInstructor">
                    <Contenido_Administrador />
                </div>
                <div className="BienvenidaAdministrador">
                    <BienvenidaAdministrador />
                </div>
                
             </div>
        </div>
          
        
    </>
  );
}

export default Estudiante;