import React, { useEffect, useState } from "react";
import Cursoss from "./Cursoss";

function Vista() {
  const [cursos, setCursos] = useState([]);

  const fetchCursos = () => {
    fetch("http://localhost:8080/api/curso")
      .then((response) => response.json())
      .then((data) => setCursos(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCursos("http://localhost:8080/api/curso");
  }, []);

  return (
    <div>
      <div className="container scroll-container" id="cursosRegistrados">
        <Cursoss cursos={cursos} />
      </div>
    </div>
  );
}

export default Vista;
