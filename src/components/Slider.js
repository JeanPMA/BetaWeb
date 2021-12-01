import React, { useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import "./carousel.css";
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
              {
                breakpoint: 760,
                cols: 1,
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
                        {item.instructor.nombre +
                          " " +
                          item.instructor.apellido_paterno}
                      </p>
                    </div>

                    <div className="text-white align-self-center p-2 ">
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
