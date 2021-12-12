import React, { useEffect, useState } from "react";
import "./Vista.css";
import axios from "axios";
import Lupa from "../assets/lupa.png";
import Miscursos from "./Miscursos";
import cestoBasura from "../assets/cestoBasura.png";
import lapiz from "../assets/lapiz.png";
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
const cesto = (
  <img src={cestoBasura} className="cesto-1" width="25" height="25" />
);
const lapicito = <img src={lapiz} className="cesto-1" width="25" height="25" />;
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
  /////
  const eliminar = async () => {
    /* if (cursoSeleccionado.nombre == "ababa") {
      setModalEliminar(false);
      alert("Curso" + cursoSeleccionado.nombre + " tiene estudiantes");
    } else {*/
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
  // };
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
    //console.log("cursos que tiene: " + instruc.cursos.length);
    if (instruc.cursos.length > 0) {
      const cursos_orden = instruc.cursos.sort(function (x, y) {
        if (x.nombre < y.nombre) {
          return -1;
        }
        if (x.nombre > y.nombre) {
          return 1;
        }
        return 0;
      });
      //console.log(cursos_orden);
      return cursos_orden;
    } else {
      return instruc.cursos;
    }
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
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -90%)",
    width: "22em",
    height: "200px",
  };
  return (
    <>
      <div className="list-group">
        <div className="col-md-10 col ">
          <div className="container">
            <h3 className="text-white">Mis cursos</h3>
            <table className="table text-white">
              <thead>
                <tr>
                  <th scope="col" className="text-white">
                    Nombres
                  </th>
                  <div className="acciones">
                    <th scope="col" className="text-white">
                      Acciones
                    </th>
                  </div>
                </tr>
              </thead>
              <tbody>
                {instructor.length > 0 &&
                  getInstructorByid()?.map((element) => {
                    return (
                      <tr>
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

                        <td width="200" className="centro">
                          <button
                            className="bttn"
                            data-bs-toggle="modal"
                            data-bs-target={"#modal-" + element.id_curso}
                            data-bs-whatever="@mdo"
                            type="button"
                          >
                            {" "}
                            {lupa}
                          </button>
                          <button
                            className="bttn "
                            onClick={() => seleccionarCurso(element, "Editar")}
                          >
                            {" "}
                            {lapicito}
                          </button>
                          <button
                            className="bttn "
                            type="button"
                            onClick={() =>
                              seleccionarCurso(element, "Eliminar")
                            }
                          >
                            {" "}
                            {cesto}
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

      <Modal isOpen={modalEditar} centered backdrop="static">
        <div
          className="contenedorModal"
          className=" border-top border-start border-end border-bottom border-white"
        >
          <Form>
            <ModalHeader id="tituloCrearCurso">
              <a id="tituloModal"> Editar curso </a>
            </ModalHeader>
            <ModalBody id="cuerpoCrearCurso">
              <FormGroup className="position-relative">
                <Label for="nombre">Nombre</Label>
                <Input
                  maxLength="70"
                  required
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={cursoSeleccionado && cursoSeleccionado.nombre}
                  onChange={handleChange}
                />
                <p className="caracteres">Caract. Max. 70</p>
              </FormGroup>
              <FormGroup
                id="contenedor-descripcion"
                className="position-relative"
              >
                <Label for="detalle">Descripcion</Label>
                <Input
                  maxLength="700"
                  required
                  type="textarea"
                  id="detalle"
                  name="descripcion"
                  value={cursoSeleccionado && cursoSeleccionado.descripcion}
                  onChange={handleChange}
                />
                <p className="caracteres">Caract. Max. 700</p>
              </FormGroup>
              <FormGroup
                id="contenedor-descripcion"
                className="position-relative"
              >
                <Label for="detalle">URL de la imagen</Label>
                <Input
                  required
                  type="url"
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
                  required
                  type="url"
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
                Modificar{" "}
              </Button>
            </ModalFooter>
          </Form>
        </div>
      </Modal>

      <Modal isOpen={modalEliminar} centered backdrop="static">
        <div className="border-top border-start border-end border-bottom border-white">
          <ModalHeader id="tituloCrearCurso">
            <a id="tituloModal"> Eliminar curso </a>
          </ModalHeader>
          <ModalBody id="modal-eliminar" className="  ">
            ¿Estas seguro que quieres eliminar? <br />
            <b>{cursoSeleccionado && cursoSeleccionado.nombre}</b>
            <br />
            Puede que tenga estudiantes inscritos
          </ModalBody>
          <ModalFooter id="modal-eliminar">
            <Button
              className="btn btn-primary "
              id="botonCrearCancelar"
              onClick={() => setModalEliminar(false)}
            >
              Cancelar
            </Button>
            <Button
              className="btn btn-primary"
              id="botonCrearAceptar"
              onClick={() => eliminar()}
            >
              Confirmar
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
}

export default Lista;
