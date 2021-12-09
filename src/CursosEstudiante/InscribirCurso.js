import React from "react";
import "./InscribirCurso.css";
import axios from "axios";

let cookieIdEstudiante = document.cookie.replace(
  /(?:(?:^|.*;\s*)id_estudiante\s*\=\s*([^;]*).*$)|^.*$/,
  "$1"
);
function InscribirCurso(props) {
  const enviar = async () => {
    const dataPost = {
      estudiante: {
        id_estudiante: cookieIdEstudiante,
      },
      curso: {
        id_curso: props.curso.id_curso,
      },
    };
    window.location.href = window.location.href;
    const res = await axios
      .post("https://betaweb-back.herokuapp.com/api/inscribirse", dataPost)
      .then((response) => {
        const dataPost = { success: true, message: response.data };
        return dataPost;
      })
      .catch((error) => {
        const data = { success: false, message: error.response.data };
        return data;
      });
    return res;
  };

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content color">
          <br />
          <div className="row">
          <div className="">
            <h3 className="text-white centro" id="staticBackdropLabel">
              Inscribirse a este curso
            </h3>
            </div>
          </div>
          <br />
          <div className="row">
          <div className="centro ">
            <img
              src={props.curso?.ubicacion_img || ""}
              alt=""
              width="70%"
              height="90%"
              className=" alin border-top border-start border-end border-bottom border-white"
            />
          </div>
          </div>
          <br />
          <div className="row centro ">
            <div className="col-md-5 ms-auto ">
              <button
                button
                type="button"
                className="btnn btn-primary btn-lg"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
           <div className="col-md-1 ms-auto "><br/></div>
           
            <div className="col-md-6 ms-auto">
              <button
                type="button"
                onClick={() => enviar()}
                className="btnn btn-primary btn-lg"
                data-bs-dismiss="modal"
              >
                Aceptar
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
export default InscribirCurso;
