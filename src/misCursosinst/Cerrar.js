import React from 'react';
import "./Miscursos.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Button
} from "reactstrap";
function Cerrar() {
  return (
    <div className="principal">
    <Button 
    type="button" 
    className="secundario" 
    data-bs-toggle="modal" 
    data-bs-target="#exampleModal" 
    data-bs-whatever="@getbootstrap"
    id="boton_crearCursos"
    >Cerrar Secion</Button>
    </div>
    
  );
  
}
export default Cerrar;