import React from 'react';
import "./Miscursos.css";


function End() {
  return (
    <div 
    className="modal fade" 
    tabindex="-1" 
    id="exampleModal"
    aria-labelledby="exampleModalLabel"
    
    aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        
        <div className="modal-body">
        Quiere salir de la pagina
        </div>
        <div className="modal-footer">
        <button type="button" class="btnn btn-secondary mb-2 rounded-pill shadow-sm" data-bs-dismiss="modal">Cancelar</button>
        
          <button type="button" 
          className="btnn btn-primary mb-2 rounded-pill shadow-sm" 
          data-bs-dismiss="modal"
          value="cerrar" onClick={() => window.location = '/'}>Aceptar</button>
        
        </div>
      </div>
    </div>
  </div>
  );
}
export default End;
