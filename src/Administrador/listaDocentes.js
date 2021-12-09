import React, { useEffect, useState } from "react";
import "./VistaAdministrador.css";
import axios from "axios";


const baseUrl = "https://betaweb-back.herokuapp.com/api/instructorList/";

function ListaDocentes() {
    
  const [lista, setLista] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://betaweb-back.herokuapp.com/api/instructorList")
      .then((response) => {
        setLista(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
        <div className="col-md-6 col align-self-center">
          <div className="container">
            <h3 className="text-white" id="tituloMisInstructores">Mis Instructores</h3>
            <table className="table text-white">
              <thead>
                <tr>
                  <th scope="col" className="text-white">
                    Nombres
                  </th>
                  <th scope="col" className="text-white">
                    Apellido Paterno
                  </th>
                  <th scope="col" className="text-white">
                    Apellido Materno
                  </th>
                  <th scope="col" className="text-white">
                    Correo Electronico
                  </th>
                </tr>
              </thead>
              <tbody className="table text-white" >
                {lista.map((element) => {
                  return (
                    element && (
                      <tr key={element.id_curso}>
                        <td className="text-white ">{element.nombre}</td>
                        <td className="text-white ">
                          {element.apellido_paterno}
                        </td>
                        <td className="text-white ">
                          {element.apellido_materno}
                        </td>
                        
                        <td className="text-white ">
                          {element.email}
                        </td>
                        
                                         
                      </tr>
                    )
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaDocentes;
