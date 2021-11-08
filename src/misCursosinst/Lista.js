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
import { Link } from "react-router-dom";

const lupa = <img src={Lupa} className="lupa-2" />;
const baseUrl = "https://betaweb-back.herokuapp.com/api/curso/";

function Lista() {
  const [instructor, setInstructor] = useState([]);
  const [cursos, setCursos] = useState([]);

  const [data, setData] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const [cursoSeleccionado, setCursoSeleccionado] = useState({
    nombre: "",
    descripcion: "",
    ubicacion_img: "",
    ubicacion_vid: "",
  });

  const seleccionarCurso = (curso, caso) => {
    setCursoSeleccionado(curso);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCursoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editar = async () => {
    await axios
      .put(baseUrl + cursoSeleccionado.id_curso, cursoSeleccionado)
      .then((response) => {
        var dataNueva = data;
        dataNueva.map((curso) => {
          if (curso.id_curso === cursoSeleccionado.id_curso) {
            curso.nombre = cursoSeleccionado.nombre;
            curso.descripcion = cursoSeleccionado.descripcion;
            curso.ubicacion_img = cursoSeleccionado.ubicacion_img;
            curso.ubicacion_vid = cursoSeleccionado.ubicacion_vid;
          }
        });
        setData(dataNueva);
        setModalEditar(false);
        window.location.href = "/VistaInstructor";
      });
  };

  const eliminar = async () => {
    await axios
      .delete(baseUrl + cursoSeleccionado.id_curso)
      .then((response) => {
        setData(
          data.filter((curso) => curso.id_curso !== cursoSeleccionado.id_curso)
        );
        setModalEliminar(false);
        window.location.href = "/VistaInstructor";
      });
  };

  ///////////////////////////////////
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
  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -90%)",
    width: "22em",
    height: "200px",
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
                        <Miscursos curso={getCursosByid(element.id_curso)} />
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal isOpen={modalEditar} style={modalStyles}>
        <div className="contenedorModal">
          <Form>
            <ModalHeader id="tituloCrearCurso">
              <a id="tituloModal"> Editar curso </a>
            </ModalHeader>
            <ModalBody id="cuerpoCrearCurso">
              <FormGroup className="position-relative">
                <Label for="nombre">Nombre</Label>
                <Input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={cursoSeleccionado && cursoSeleccionado.nombre}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup
                id="contenedor-descripcion"
                className="position-relative"
              >
                <Label for="detalle">Descripcion</Label>
                <Input
                  type="textarea"
                  id="detalle"
                  name="descripcion"
                  value={cursoSeleccionado && cursoSeleccionado.descripcion}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup
                id="contenedor-descripcion"
                className="position-relative"
              >
                <Label for="detalle">Ubicacion de la imagen</Label>
                <Input
                  type="text"
                  id="ubicacion"
                  name="ubicacion_img"
                  value={cursoSeleccionado && cursoSeleccionado.ubicacion_img}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup
                id="contenedor-descripcion"
                className="position-relative"
              >
                <Label for="video">URL del video</Label>
                <Input
                  type="text"
                  id="video"
                  name="ubicacion_vid"
                  value={cursoSeleccionado && cursoSeleccionado.ubicacion_vid}
                  onChange={handleChange}
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter id="pieCrearCurso">
              <Button
                id="botonCrearCancelar"
                onClick={() => setModalEditar(false)}
              >
                {" "}
                Cancelar
              </Button>
              <Button
                type="submit"
                id="botonCrearAceptar"
                onClick={() => editar()}
              >
                {" "}
                Guardar{" "}
              </Button>
            </ModalFooter>
          </Form>
        </div>
      </Modal>

      <Modal isOpen={modalEliminar} style={modalStyles}>
        <ModalBody id="modal-eliminar">
          Estás Seguro que deseas eliminar el curso:{" "}
          <b>{cursoSeleccionado && cursoSeleccionado.nombre}</b>
        </ModalBody>
        <ModalFooter id="modal-eliminar">
          <button className="btn btn-danger" onClick={() => eliminar()}>
            SI
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            NO
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Lista;
