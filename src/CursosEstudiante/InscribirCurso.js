import React from "react";
import "./InscribirCurso.css";
import axios from "axios";

const getCookies = (cname) => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

function InscribirCurso(props) {
  console.log(props);
  const enviar = async () => {
    const dato = {
      id_curso: props.curso.id_curso,
      id_estudiante: getCookies("id_estudiante")
    }
 
    const res = await axios
      .post("https://betaweb-back.herokuapp.com/api/inscribirse", dato)
      .then((response) => {
        // const data = { success: true, message: response.data };
        console.log(response);
        // return data;
      })
      .catch((error) => {
        const data = { success: false, message: error.response.data };
        return data;
      });
  }
  
  return (


    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content color"><br/>
          <div className="col-md-9 ms-auto" >
            <h3 className="text-white" id="staticBackdropLabel">Inscribirse a este curso</h3>
          </div><br/>
          <div className="col-md-8 ms-auto" id="cursos">

            <img
              src={props.curso?.ubicacion_img || ""}
              alt=""
              width="200px"
              height="180px"
              className=" alin border-top border-start border-end border-bottom border-white"
            />

          </div><br/>
          <div className="row ">
            <div className="col-md-4 ms-auto">
            <button button type="button" className="btnn " data-bs-dismiss="modal">Cancelar</button>
            </div>
            <div className="col-md-4 ms-auto">
            <button type="button" onClick={() => enviar()} className="btnn " data-bs-dismiss="modal">Aceptar</button>
            </div>
          </div><br/>
        </div>
      </div>
    </div>

  );
}
export default InscribirCurso;