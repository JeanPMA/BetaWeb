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
                    src="https://img-c.udemycdn.com/course/240x135/1245130_efdb_10.jpg"
                    width="200px"
                    height="120px"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Carlos Arturo</p>
                </div>

                <div className="text-white">
                  <p>Bootstrap 5: El Curso Completo, Práctico y Desde Cero</p>
                </div>
              </div>
            </a>
            <a href="#popup2">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    width="200px"
                    height="120px"
                    src="https://www.pcprogramasymas.net/wp-content/uploads/2020/01/ctraining_resize_md.jpg"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Indira Castillo</p>
                </div>
                <div className="text-white">
                  <p>Programación orientada a objetos </p>
                </div>
              </div>
            </a>
            <a href="#popup3">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://i.imgur.com/GYNgOfm.jpg"
                    width="200px"
                    height="120px"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Ruben Cartagena</p>
                </div>
                <div className="text-white">
                  <p>Ciencia de datos</p>
                </div>
              </div>
            </a>
            <a href="#popup4">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src=" https://i.imgur.com/GYNgOfm.jpg"
                    width="200px"
                    height="120px"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Ruben Cartagena</p>
                </div>
                <div className="text-white">
                  <p>Datawarhouse</p>
                </div>
              </div>
            </a>
            <a href="#popup5">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://img-c.udemycdn.com/course/240x135/672600_1def_7.jpg"
                    width="200px"
                    height="120px"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Carlos Arturo</p>
                </div>
                <div className="text-white">
                  <p>
                    PHP 8 y MYSQL: El Curso Completo, Práctico y Desde Cero !
                  </p>
                </div>
              </div>
            </a>
            <a href="#popup6">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://s3-ap-south-1.amazonaws.com/av-blog-media/wp-content/uploads/2018/03/pandas.jpg"
                    width="200px"
                    height="120px"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Fernando Herrera</p>
                </div>
                <div className="text-white">
                  <p>Python</p>
                </div>
              </div>
            </a>
            <a href="#popup7">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://www.ecured.cu/images/a/a8/Pandas_python.png"
                    width="200px"
                    height="120px"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Marcelo Reinaga</p>
                </div>
                <div className="text-white">
                  <p>Pandas - Python</p>
                </div>
              </div>
            </a>
            <a href="#popup8">
              <div className="contenedor-cursos-inicio border border-white">
                <div className="justify-content-center pt-2 imagen-oferta">
                  <img
                    src="https://i.ytimg.com/vi/ACT9uDY2oY0/maxresdefault.jpg"
                    width="200px"
                    height="120px"
                  />
                </div>
                <div className="text-white">
                  <p className="instructor">Andres jose</p>
                </div>
                <div className="text-white">
                  <p>Tkinter</p>
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
