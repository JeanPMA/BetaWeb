import React from "react";
import Carousel from "./CarouselInstructor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEye,
  faPencilAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
const SliderInstructor = () => {
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
                  <FontAwesomeIcon icon={faSearch} />
                  <div className="eye">
                    <FontAwesomeIcon icon={faEye} />
                  </div>
                  <div>
                    <p className="texto-1">Permite ver el estado de un curso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-white consejo">
              <div className="justify-content-center pt-2 imagen-oferta">
                <div className="icono2-slider-instructor">
                  <FontAwesomeIcon icon={faPencilAlt} />

                  <div>
                    <p className="texto-2">
                      Permite editar un curso ya registrado
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contenedor-cursos-inicio border border-white consejo">
              <div className="justify-content-center pt-2 imagen-oferta ">
                <div className="icono3-slider-instructor">
                  <FontAwesomeIcon icon={faTrash} />

                  <div>
                    <p className="texto-3">
                      Permite eliminar un curso ya registrado
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

export default SliderInstructor;
