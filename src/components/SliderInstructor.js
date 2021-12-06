import React from "react";
import Carousel from "./CarouselInstructor";
import IconoLupa from "../assets/lupa.png";
import cestoBasura from "../assets/cestoBasura.png";
import lapiz from "../assets/lapiz.png";
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
                <p className="texto-1">Permite ver el estado de un curso</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-white consejo icono">
          <div className="justify-content-center pt-2 ">
            <div className="icono2-slider-instructor">
               <img src={lapiz} className="lapiz"  width="50" height="50"/>

              <div>
                <p className="texto-2">Permite editar un curso ya registrado</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" border border-white consejo icono">
          <div className="justify-content-center pt-2 imagen-oferta ">
            <div className="icono3-slider-instructor">
              <img src={cestoBasura} className="cestoBasura" width="50" height="50"/>

              <div>
                <p className="texto-3">
                  Permite eliminar un curso ya registrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderInstructor;
