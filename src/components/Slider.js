import React, { useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import "./carousel.css";
import DetallesModal from "./DetallesModal";
import "bootstrap/dist/css/bootstrap.css";

const Slider = () => {
  const [cursos, setCursos] = useState([]);
  const [curso, setCurso] = useState({});

  useEffect(() => {
    fetch("https://betaweb-back.herokuapp.com/api/ContarInscritos").then(
      async (response) => {
        if (response.ok) setCursos(await response.json());
      }
    );
  }, []);

  return (
    <>
      <div className="ancho-slider border-white">
        <div className="text-white ofertaCursos">
          <h2>Oferta de cursos</h2>
        </div>

        <div className="text-center container-carousel">
          <Carousel
            cols={4}
            rows={1}
            gap={11}
            responsiveLayout={[
              {
                breakpoint: 1200,
                cols: 3,
              },
              {
                breakpoint: 990,
                cols: 2,
              },
            ]}
            mobileBreakpoint={760}
          >
            {cursos.map((item) => (
              <Carousel.Item>
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
                        {item.nombre_ins + " " + item.apellido_paterno}
                      </p>
                    </div>

                    <div className="text-white align-self-center p-2 nombreCursoSlider ">
                      <p>{item.nombre}</p>
                    </div>
                  </div>
                </a>
              </Carousel.Item>
            ))}
          </Carousel>
          <DetallesModal curso={curso} />
        </div>
      </div>
    </>
  );
};

export default Slider;
