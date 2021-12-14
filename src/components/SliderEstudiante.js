import React from "react";
import Carousel from "./CarouselInstructor";
import IconoLupa from "../assets/lupa_blanca.png";
import IconoYoutube from "../assets/YouTube.png";
import IconoInscribete from "../assets/inscribete2.png";
import IconoYoutubeBlack from "../assets/youtubeBlack.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faEye,
  faPencilAlt,
  faTrash,
  faEyeSlash,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
const SliderInstructor = () => {
  return (
    <div>
      <h2 className="instrucciones text-white">Instrucciones</h2>

      <div
        className="text-center instrucciones-instructor"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className=" border border-white consejo">
          <div className="justify-content-center pt-2  ">
            <div className="bienvenido-a-betaweb">
              <p className="text-white bienvenido-a-betaweb">
                BIENVENIDO A BETAWEB
              </p>
            </div>
          </div>
        </div>
        <div className=" border border-white consejo icono">
          <div className="justify-content-center pt-2 ">
            <div className="icono1-slider-instructor">
              <img src={IconoLupa} className="lupa" />
              <div>
                <p className="texto-1">Busca los cursos que quieras</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-white consejo icono">
          <div className="justify-content-center pt-2 ">
            <div className="icono2-slider-instructor">
              <img
                src={IconoInscribete}
                className="inscribete"
                height="40px"
                width="50px"
              />

              <div>
                <p className="texto-2">Inscribete a los cursos que deseas</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" border border-white consejo icono">
          <div className="justify-content-center pt-2 imagen-oferta ">
            <div className="icono3-slider-instructor">
              <img
                src={IconoYoutube}
                className="YouTube"
                height="50px"
                width="50px"
              />

              <div>
                <p className="texto-3">Visualiza el contenido de los cursos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderInstructor;
