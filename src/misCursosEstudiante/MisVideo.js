import React from "react";
import $ from "jquery";
import "./Vista.css";

function MisVideo(props) {
  const idVideo = props.curso.ubicacion_vid?.split("=")[1];
  const recargar = () => {
    $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
    $("#videoModal iframe").attr("src", "https://www.youtube.com/embed/" + idVideo);
  };

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
              onClick={() => recargar()}
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                width="750px"
                height="700px"
                src={"https://www.youtube.com/embed/" + idVideo}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MisVideo;
