import React, { useEffect, useState } from "react";
import CursoEstudiante from "../CursosEstudiante/CursoEstudiante";
import logoLupa from "../imagenes/logoLupa.png";
import axios from "axios";
import IncribirCurso from "../CursosEstudiante/InscribirCurso";

function ListaCursosParaEstudiantes() {
  const [cursos, setCursos] = useState([]);

  const fetchCursos = () => {
    fetch("https://betaweb-back.herokuapp.com/api/curso")
      .then((response) => response.json())
      .then((data) => setCursos(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCursos("https://betaweb-back.herokuapp.com/api/curso");
  }, []);

  const [tabla, setTablaCursos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = async () => {
    await axios
      .get("https://betaweb-back.herokuapp.com/api/curso")
      .then((response) => {
        setTablaCursos(response.data);
        setCursos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const hanldeChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };
  const filtrar = (terminoBusqueda) => {
    var resultadoBusqueda = tabla.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setCursos(resultadoBusqueda);
  };
  React.useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="margen-cursos margen-cursos-estudiante">
      <h2
        style={{
          color: "white",
          marginTop: "10px",
          marginLeft: "0",
        }}
      >
        Cursos
      </h2>
      <div className="margen-buscador">
        <input
          class="buscador"
          type="search"
          id="search"
          placeholder="Introduzca palabra clave"
          value={busqueda}
          onChange={hanldeChange}
        />
        <img src={logoLupa} id="logo_lupa" width="30" height="30" />
      </div>
      <div className="container scroll-container" id="cursosRegistrados">
        <CursoEstudiante cursos={cursos} />
        <IncribirCurso />
      </div>
    </div>
  );
}

export default ListaCursosParaEstudiantes;
