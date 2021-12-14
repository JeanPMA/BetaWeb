import React, { useEffect, useState } from "react";
import "./Vista.css";
import axios from "axios";
import MisVideo from "./MisVideo";

const baseUrl = "https://betaweb-back.herokuapp.com/api/inscritos/";

function ListaEstudiante() {
  const [cursos, setCursos] = useState([]);
  const [curso, setCurso] = useState({});
  let inscritos = [];

  ///////////////////////////////////
  useEffect(() => {
    if (cursos.length === 0) {
      axios
        .get("https://betaweb-back.herokuapp.com/api/inscritos")
        .then((response) => {
          inscritos = response.data;
          setCursos(
            inscritos.map((element) => {
              if (
                element.estudiante?.id_estudiante ===
                parseInt(getCookies("id_estudiante"))
              ) {
                return element.curso;
              }
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

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
  return (
    <>
      <div className="list-group">
        <div className="col-md-8 offset-md-2">
          <div className="container" id="containerCursosEstudiante">
            <h3 className="text-white">Mis cursos</h3>
            <table className="table text-white">
              <thead>
                <tr>
                  <th scope="col" className="text-white">
                    Nombres
                  </th>
                </tr>
              </thead>
              <tbody>
                {cursos.map((element) => {
                  return (
                    element && (
                      <tr key={element.id_curso}>
                        <td className="text-white ">{element.nombre}</td>
                        <td className="text-white ocultar">
                          {element.descripcion}
                        </td>
                        <td className="text-white ocultar">
                          {element.ubicacion_img}
                        </td>
                        <td className="text-white ocultar">
                          {element.ubicacion_vid}
                        </td>
                        <td>
                          <button
                            type="button"
                            onClick={() => setCurso(element)}
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#videoModal"
                          >
                            <i className="bi bi-play-btn-fill"></i>
                          </button>
                        </td>
                      </tr>
                    )
                  );
                })}
              </tbody>
            </table>
            <MisVideo curso={curso} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaEstudiante;
