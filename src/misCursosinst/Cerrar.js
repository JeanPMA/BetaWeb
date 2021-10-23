import React from 'react';
import "./Miscursos.css";


function Cerrar() {
  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      
      <div className="modal-body">
       Cerro correctamente
      </div>
      <div className="d-grid gap-2 col-4 mx-auto">
      
        <button type="button" 
        className="btnn btn-secondary mb-2 rounded-pill shadow-sm" 
        data-bs-dismiss="modal"
        value="cerrar" onClick={() => window.location = '/'}>Aceptar</button>
      
      </div>
    </div>
  </div>
</div>
  );
  
}
export default Cerrar;