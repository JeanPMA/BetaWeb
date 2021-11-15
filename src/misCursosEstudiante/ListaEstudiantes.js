import React, { useEffect, useState } from "react";
import "./Vista.css";
import axios from "axios";
import Miscursos from "./MisCursos";

const baseUrl = "https://betaweb-back.herokuapp.com/api/inscritos/";

function Lista()  {
  
    const [estudiantes, setEstudiantes] = useState([]);
  const [cursos, setCursos] = useState([]);



  
  ///////////////////////////////////
  useEffect(() => {
    axios
      .get("https://betaweb-back.herokuapp.com/api/inscritos")
      .then((response) => {
        setCursos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://betaweb-back.herokuapp.com/api/estudiantes")
      .then((response) => {
        setEstudiantes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  
  const getEstudianteByid = () => {
    const idEstudiante = parseInt(getCookies("id_estudiante"));
    let est = {};
    estudiantes.forEach((ins) => {
      if (ins.id_estudiante === idEstudiante) {
        est = ins;
      }
    });
    return est;
  };

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
        <div className="col-md-6 col align-self-center">
          <div className="container">
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
                {estudiantes.length > 0 &&
                  getEstudianteByid().inscripciones?.map((element) => {
                    
                    return (
                      <tr>
                        <td className="text-white ">{element.curso.nombre}</td>
                        <td className="text-white ocultar">
                          {element.curso.escripcion}
                        </td>
                        <td className="text-white ocultar">
                          {element.curso.ubicacion_img}
                        </td>
                        <td className="text-white ocultar">
                          {element.curso.ubicacion_vid}
                        </td>

                       
                      </tr>
                       
                    );
                   
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </>
    )
  
};

export default Lista;
