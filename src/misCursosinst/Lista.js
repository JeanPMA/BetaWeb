<<<<<<< HEAD
import React from "react";
import "./Vista.css";
import Lupa from "../assets/lupa.png";

const lupa = <img src={Lupa} className="lupa-2" />;
const Lista = () => {
  return (
    <div className="list-group ">
      <div className="col-md-6 col align-self-center">
        <div className="container">
          <div className="row">
            <div className="col-9 text-warning">
              <h3>Mis Cursos</h3>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="col-9 text-white">
              {" "}
              <h4>Nombre</h4>
            </div>
            <div className="col-1 text-white">
              <h4>Accion</h4>
            </div>
          </div>
        </div>
        <a
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
          type="button"
          className="list-group-item list-group-item-action bg-transparent border-bottom"
        >
          <div className="justify-content-between">
            <h5 className="mb-1 text-white">Ia con PyThon</h5>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-lg" type="button">
              {lupa}
            </button>
            <button className="btn btn-lg" type="button">
              <i className="bi bi-trash-fill rojo"></i>
            </button>
          </div>
        </a>
        <a
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
          type="button"
          className="list-group-item list-group-item-action bg-transparent border-bottom"
        >
          <div className=" justify-content-between">
            <h5 className="mb-1 text-white">Ingenieria de Software</h5>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-lg" type="button">
              {lupa}
            </button>
            <button className="btn btn-lg" type="button">
              <i className="bi bi-trash-fill rojo"></i>
            </button>
          </div>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action bg-transparent border-bottom"
        >
          <div className=" justify-content-between">
            <h5 className="mb-1 text-white">Redes neuronales</h5>
          </div>
          <div className=" gap-2 d-md-flex justify-content-md-end bg-transparent">
            <button className="btn btn-lg " type="button">
              {lupa}
            </button>
            <button className="btn btn-lg" type="button">
              <i className="bi bi-trash-fill rojo"></i>
            </button>
          </div>
        </a>
      </div>
    </div>
  );
=======
import React, { useEffect, useState } from "react";
import "./Vista.css"
import axios from 'axios';
import Lupa from "../assets/lupa.png";

const lupa = <img src={Lupa} className="lupa-2" />;

function Lista() {

  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    axios.get("https://betaweb-back.herokuapp.com/api/instructor")
      .then(response => {
        setInstructor(response.data);
      }).catch(error => {
        console.log(error);
      })
  }, []);

  const getInstructorByid = () => {
    const idInstructor = parseInt(getCookies("id_usuario"));
    let instruc = {};
    instructor.forEach(ins => {
      if (ins.id_instructor === idInstructor) {
        instruc = ins;
      }
    })
    return instruc;
  };

  const getCookies = (cname) => {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };

  return (
    <div className="list-group">
      <div className="col-md-6 col align-self-center">
        <div className="container">
          <h3 className="text-white">Mis cursos</h3>
          <table className="table text-white" >
            <thead>
              <tr>
                <th scope="col" className="text-white">Nombres</th>
                <th scope="col" className="text-white">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {instructor.length > 0 && getInstructorByid().cursos?.map(element => {
                return (<tr>
                  <td className="text-white">{element.nombre}</td>
                  <td>
                    <button className="btn btn-lg"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo" type="button"> {lupa}</button>
                    <button className="btn btn-lg" type="button"><i className="bi bi-trash-fill rojo"></i></button>
                  </td>
                </tr>);
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
>>>>>>> Lista de instructores
};

export default Lista;
