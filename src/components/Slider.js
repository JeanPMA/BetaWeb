import Carousel from "./Carousel";

import React, { useState, useEffect } from "react";

import DetallesModal from "./DetallesModal";

const Slider = () => {
  const [cursos, setCursos] = useState([]);
  const [curso, setCurso] = useState({});

  useEffect(() => {
    fetch("https://betaweb-back.herokuapp.com/api/curso").then(
      async (response) => {
        if (response.ok) setCursos(await response.json());
      }
    );
  }, []);
  return (
    <>
      <div>
        <div className="text-white oferta">
          <h2>Oferta de cursos</h2>
        </div>

        <div
          className="border border-white container-cursos"
          style={{
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 10,
            paddingLeft: 0,
          }}
        >
          <div
            className="text-center"
            style={{
              maxWidth: 1100,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Carousel show={4}>
              {cursos.map((item) => (
                <a
                  key={item.id_curso}
                  type="button"
                  onClick={() => setCurso(item)}
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                >
                  <div className="contenedor-cursos-inicio border border-white">
                    <div className="justify-content-center pt-2 imagen-oferta">
                      <img
                        src={item.ubicacion_img}
                        width="200px"
                        height="120px"
                      />
                    </div>
                    <div className="text-white">
                      <p className="instructor">
                        {item.instructor.nombre +
                          " " +
                          item.instructor.apellido_paterno}
                      </p>
                    </div>

                    <div className="text-white">
                      <p>{item.nombre}</p>
                    </div>
                  </div>
                </a>
              ))}
            </Carousel>
            <DetallesModal curso={curso} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
