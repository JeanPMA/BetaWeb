import React, { useEffect, useState } from "react";
import "./Vista.css";
import axios from "axios";
import Lupa from "../assets/lupa.png";
import Miscursos from "./Miscursos";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Form,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const lupa = <img src={Lupa} className="lupa-2" />;

function Lista() {
  const [instructor, setInstructor] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);

  useEffect(() => {
    axios
      .get("https://betaweb-back.herokuapp.com/api/curso")
      .then((response) => {
        setCursos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://betaweb-back.herokuapp.com/api/instructor")
      .then((response) => {
        setInstructor(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const getCursosByid = (idCurso) => {
    let curso = {};
    cursos.forEach((dato) => {
      if (dato.id_curso === idCurso) {
        curso = dato;
      }
    });
    return curso;
  };
  const getInstructorByid = () => {
    const idInstructor = parseInt(getCookies("id_usuario"));
    let instruc = {};
    instructor.forEach((ins) => {
      if (ins.id_instructor === idInstructor) {
        instruc = ins;
      }
    });
    return instruc;
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
                  <th scope="col" className="text-white">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {instructor.length > 0 &&
                  getInstructorByid().cursos?.map((element) => {
                    return (
                      <tr>
                        <td className="text-white">{element.nombre}</td>
                        <td>
                          <button
                            className="btn btn-lg"
                            data-bs-toggle="modal"
                            data-bs-target={"#modal-" + element.id_curso}
                            data-bs-whatever="@mdo"
                            type="button"
                          >
                            {" "}
                            {lupa}
                          </button>
                          <button className="btn btn-lg">
                            <i className="bi bi-pencil-fill celeste"></i>
                          </button>
                          <button className="btn btn-lg" type="button">
                            <i className="bi bi-trash-fill rojo"></i>
                          </button>
                        </td>
                        <Miscursos curso={getCursosByid(element.id_curso)} />
                      </tr>
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

export default Lista;
