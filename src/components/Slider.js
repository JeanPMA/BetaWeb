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
            <a href="#">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://img-c.udemycdn.com/course/240x135/3096364_6113_3.jpg"
                    style={{ width: "90%" }}
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Fernando Herrera</p>
                </div>

                <div className="text-white">
                  <p>React: De cero a experto</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://img-c.udemycdn.com/course/240x135/3694466_c5db_5.jpg"
                    style={{ width: "90%" }}
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Damian Sire</p>
                </div>
                <div className="text-white">
                  <p>Estructuras de datos y logica </p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://img-c.udemycdn.com/course/240x135/2297910_788e_2.jpg"
                    style={{ width: "90%" }}
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Alvaro Chirou</p>
                </div>
                <div className="text-white">
                  <p>Master en Python 3</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://img-c.udemycdn.com/course/240x135/1562070_d426_2.jpg"
                    style={{ width: "90%" }}
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Fernando Herrera</p>
                </div>
                <div className="text-white">
                  <p>Node: De cero a experto</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://img-c.udemycdn.com/course/240x135/2306140_8181.jpg"
                    style={{ width: "90%" }}
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Fernando Herrera</p>
                </div>
                <div className="text-white">
                  <p>Flutter para IOS y Android</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://img-c.udemycdn.com/course/240x135/3078492_1a27_2.jpg"
                    style={{ width: "90%" }}
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Andres Jose Guzman</p>
                </div>
                <div className="text-white">
                  <p>Java de cero a experto</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://img-c.udemycdn.com/course/240x135/3657264_4270_2.jpg"
                    style={{ width: "90%" }}
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Jhonatan Peñaloza</p>
                </div>
                <div className="text-white">
                  <p>Fullstack Java y React</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://img-c.udemycdn.com/course/240x135/980450_7fc0_3.jpg"
                    style={{ width: "90%" }}
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Juan Pablo de la Torre Valdez</p>
                </div>
                <div className="text-white">
                  <p>Desarrollo web completo</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://img-c.udemycdn.com/course/240x135/1245130_efdb_10.jpg"
                    style={{ width: "90%" }}
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Carlos Arturo Esparza</p>
                </div>
                <div className="text-white">
                  <p>Bootstrap 5 de cero</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://img-c.udemycdn.com/course/240x135/672600_1def_7.jpg"
                    style={{ width: "90%" }}
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Carlos Arturo Esparza</p>
                </div>
                <div className="text-white">
                  <p>PHP 8 y MySQL</p>
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
