import React from "react";
import Carousel from "./CarouselInstructor";
import IconoLupa from "../assets/lupa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEye,
  faPencilAlt,
  faTrash,
  faEyeSlash,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
const SliderEstudiante = () => {
  return (
    <div>
      <div className="text-white ">
        <h2 className="instrucciones">Instrucciones</h2>
      </div>

      <div
        className="border border-white container-cursos"
        style={{
          maxWidth: 820,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 10,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <div
          className="text-center"
          style={{
            maxWidth: 810,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Carousel show={3}>
            <div className=" border border-white consejo">
              <div className="justify-content-center pt-2 imagen-oferta ">
                <div className="bienvenido-a-betaweb">
                  <p className="text-white bienvenido-a-betaweb">
                    BIENVENIDO A BETAWEB
                  </p>
                </div>
              </div>
            </div>
            <div className=" border border-white consejo">
              <div className="justify-content-center pt-2 imagen-oferta">
                <div className="icono1-slider-instructor">
                  <img src={IconoLupa} className="lupa" />
                  <div>
                    <p className="texto-1">Busca cursos que quieras</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-white consejo">
              <div className="justify-content-center pt-2 imagen-oferta">
                <div className="icono2-slider-instructor">
                  <FontAwesomeIcon icon={faRegistered} />

                  <div>
                    <p className="texto-2">
                      Inscribete a los cursos que deseas
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contenedor-cursos-inicio border border-white consejo">
              <div className="justify-content-center pt-2 imagen-oferta ">
                <div className="icono3-slider-instructor">
                  <FontAwesomeIcon icon={faEye} />

                  <div>
                    <p className="texto-3">
                        Visualiza el contenido de los cursos 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SliderEstudiante;
