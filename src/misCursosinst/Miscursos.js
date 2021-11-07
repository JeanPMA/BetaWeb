import React from 'react';
import "./Miscursos.css"

function Miscursos(props) {
  console.log(props);
  return (
    <div className="modal fade" id={"modal-" + props.curso.id_curso} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content" id="myModal">
          <div className="modal-header">
            <h4 className="modal-title text-white" id="exampleModalLabel ">{props.curso.nombre}</h4>
          </div>
          <div className="modal-body">
            <div class="container-fluid">
              <div className="row">
                <div className="col-md-3" >
                  <img src={props.curso.ubicacion} width="200" height="150" />
                </div>
                <div className="col-md-6 ms-auto">  <div className="modal-dialog  text-white" >
                    <h5 className="modal-title text-warning " id="exampleModalLabel">{props.curso.nombre}</h5>
                    {props.curso.descripcion}
                  </div>
                </div>   
                 </div>
              <div className="row">
                <div className="col-md-4">
                  <label className="col-form-label text-white" id="fondoletra">7 Estudiantes</label>
                  <h5 className="text-white">Fecha de Publicacion: 1/10/2021</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 col-4 mx-auto">
            <button type="button" className="ali btnn mb-2 rounded-pill shadow-sm" data-bs-dismiss="modal">Volver</button>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Miscursos;