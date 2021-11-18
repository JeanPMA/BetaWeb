import Carousel from "./Carousel";
import Imagen from "../assets/imagenCurso.jpg";
const Slider = () => {
  return (
    <div>
      <div className="text-white oferta">
        <h2>Oferta de cursos gratuitos</h2>
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
            <a href="#popup">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://i.ytimg.com/vi/zIY87vU33aA/maxresdefault.jpg"
                    width="200px"
                    height="120px"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Fazt</p>
                </div>

                <div className="text-white">
                  <p>Reactjs, Curso Práctico para Principiantes (React 16)</p>
                </div>
              </div>
            </a>
            <a href="#popup2">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    width="200px"
                    height="120px"
                    src="https://i.ytimg.com/vi/z95mZVUcJ-E/maxresdefault.jpg"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Soy Dalto</p>
                </div>
                <div className="text-white">
                  <p>
                    Curso de JAVASCRIPT desde CERO (Completo) - Nivel JUNIOR{" "}
                  </p>
                </div>
              </div>
            </a>
            <a href="#popup3">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://i.ytimg.com/vi/chPhlsHoEPo/maxresdefault.jpg"
                    width="200px"
                    height="120px"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Fazt</p>
                </div>
                <div className="text-white">
                  <p>Curso Python para principiantes</p>
                </div>
              </div>
            </a>
            <a href="#popup4">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://i.ytimg.com/vi/BhvLIzVL8_o/maxresdefault.jpg"
                    width="200px"
                    height="120px"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Fazt</p>
                </div>
                <div className="text-white">
                  <p>Nodejs: Curso desde cero, para participantes</p>
                </div>
              </div>
            </a>
            <a href="#popup5">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://i.ytimg.com/vi/gBfXjjhsl-o/maxresdefault.jpg"
                    width="200px"
                    height="120px"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Leonidas Esteban</p>
                </div>
                <div className="text-white">
                  <p>Curso de Flutter</p>
                </div>
              </div>
            </a>
            <a href="#popup6">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://i.imgur.com/WxUmkn5.jpg"
                    width="200px"
                    height="120px"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Yoney Gallardo</p>
                </div>
                <div className="text-white">
                  <p>CURSO DE JAVA - COMPLETO</p>
                </div>
              </div>
            </a>
            <a href="#popup7">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://i.ytimg.com/vi/7vHzVN0EiQc/maxresdefault.jpg"
                    width="200px"
                    height="120px"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Lucas Moy</p>
                </div>
                <div className="text-white">
                  <p>
                    Curso de Java Fullstack Completo (springboot, hibernate,
                    JWT, API)
                  </p>
                </div>
              </div>
            </a>
            <a href="#popup8">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://i.ytimg.com/vi/bYOjmW-740M/maxresdefault.jpg"
                    width="200px"
                    height="120px"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Yoney Gallardo</p>
                </div>
                <div className="text-white">
                  <p>CURSO DE DISEÑO Y DESARROLLO WEB - COMPLETO</p>
                </div>
              </div>
            </a>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
