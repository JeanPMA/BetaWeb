import React from "react";
import "../misCursosEstudiante/Vista.css";

function DetallesModal(props) {
  return (
    <div
      className="modal fade"
      id="videoModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content color">
          <div className="modal-header">
            <h5 className="modal-title text-white" id="exampleModalLabel">
              {props.curso.nombre}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={props.curso.ubicacion_img}
              width="50%"
              className="m-auto"
            />

            <p className="text-white text-start">{props.curso.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallesModal;
