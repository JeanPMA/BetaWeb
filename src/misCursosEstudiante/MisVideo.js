import React from "react";
import "./Vista.css";

function MisVideo(props) {
  const idVideo = props.curso.ubicacion_vid?.split("=")[1]
  return (
    // <div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //   <div className="modal-fullscreen">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title text-white" id="exampleModalLabel">{props.curso.nombre}</h5>
    //         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //       </div>
    //       <div className="modal-body">
    //         <div className="embed-responsive embed-responsive-16by9">
    //           <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + idVideo} ></iframe>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </div>
    <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content color">
      <div class="modal-header">
        <h5 class="modal-title text-white" id="exampleModalLabel">{props.curso.nombre}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="embed-responsive embed-responsive-16by9">
               <iframe className="embed-responsive-item" width="750px"
              height="700px" src={"https://www.youtube.com/embed/" + idVideo} ></iframe>
           </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default MisVideo;
