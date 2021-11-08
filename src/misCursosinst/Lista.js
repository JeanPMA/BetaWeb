import React, { useEffect, useState } from "react";
import "./Vista.css";
import axios from "axios";
import Lupa from "../assets/lupa.png";
import Miscursos from "./Miscursos";

/*import {
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
} from "reactstrap";*/
import "bootstrap/dist/css/bootstrap.css";

import { makeStyles } from "@material-ui/core/styles";
import {
  Modal,
  Button,
  Input,
} from "@material-ui/core";
import { Edit, Delete, Label, TextFormat } from "@material-ui/icons";

const lupa = <img src={Lupa} className="lupa-2" />;
const baseUrl = "https://betaweb-back.herokuapp.com/api/curso/";
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
}));

function Lista() {
  const [instructor, setInstructor] = useState([]);
  const [cursos, setCursos] = useState([]);
  //const [abrirModal, setAbrirModal] = useState(false);
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [cursoSeleccionado, setCursoSeleccionado] = useState({
    nombre: "",
    descripcion: "",
    ubicacion_img: "",
    ubicacion_vid: "",
  });

  

  
 

  const peticionDelete = async () => {
    await axios
      .delete(baseUrl + cursoSeleccionado.id_curso)
      .then(response => {
        setData(
          data.filter((curso) => curso.id_curso !== cursoSeleccionado.id_curso)
        );
        abrirCerrarModalEliminar();
        window.location.href = window.location.href;
      });
  };



  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  const seleccionarCurso = (curso, caso) => {
    setCursoSeleccionado(curso);
    caso === "Eliminar" && abrirCerrarModalEliminar();
  };

 

  ///////////////////
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

  
  const bodyEliminar = (
    <div className={styles.modal} id="eliminar">
      <p>
        Estás seguro que deseas eliminar  el curso{" "}
        <b>{cursoSeleccionado && cursoSeleccionado.nombre}</b> ?{" "}
      </p>
      <div align="right">
        <Button id="si-no" onClick={() => peticionDelete()}>
          SI
        </Button>
        <Button id="si-no" onClick={() => abrirCerrarModalEliminar()}>
          NO
        </Button>
      </div>
    </div>
  );
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
                          <button
                            className="btn btn-lg"
                            onClick={() => seleccionarCurso(element, "Editar")}
                          >
                            <i className="bi bi-pencil-fill celeste"></i>
                          </button>
                          <button
                            className="btn btn-lg"
                            type="button"
                            onClick={() =>
                              seleccionarCurso(element, "Eliminar")
                            }
                          >
                            <i className="bi bi-trash-fill rojo"></i>
                          </button>
                        </td>
                        <Miscursos curso={getCursosByid(element.id_curso)}/>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>



 



      <Modal open={modalEliminar} onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
      </Modal>
    </>
  );
}

export default Lista;
