import Carousel from "./Carousel";
import Imagen from "../assets/imagenCurso.jpg";
const Slider = () => {
  return (
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
          <Carousel show={5}>
            <div className="contenedor-cursos-inicio border border-white">
              <div className="justify-content-center pt-2 imagen-oferta">
                <img src={Imagen} alt="placeholder" style={{ width: "90%" }} />
              </div>
              <div className="text-white">
                <p className="instructor">Instructor</p>
              </div>
              <div className="text-white">
                <p>Titulo del curso</p>
              </div>
            </div>
            <div className="contenedor-cursos-inicio border border-white">
              <div className="justify-content-center pt-2 imagen-oferta">
                <img src={Imagen} alt="placeholder" style={{ width: "90%" }} />
              </div>
              <div className="text-white">
                <p className="instructor">Instructor</p>
              </div>
              <div className="text-white">
                <p>Titulo del curso</p>
              </div>
            </div>
            <div className="contenedor-cursos-inicio border border-white">
              <div className="justify-content-center pt-2 imagen-oferta">
                <img src={Imagen} alt="placeholder" style={{ width: "90%" }} />
              </div>
              <div className="text-white">
                <p className="instructor">Instructor</p>
              </div>
              <div className="text-white">
                <p>Titulo del curso</p>
              </div>
            </div>
            <div className="contenedor-cursos-inicio border border-white">
              <div className="justify-content-center pt-2 imagen-oferta">
                <img src={Imagen} alt="placeholder" style={{ width: "90%" }} />
              </div>
              <div className="text-white">
                <p className="instructor">Instructor</p>
              </div>
              <div className="text-white">
                <p>Titulo del curso</p>
              </div>
            </div>
            <div className="contenedor-cursos-inicio border border-white">
              <div className="justify-content-center pt-2 imagen-oferta">
                <img src={Imagen} alt="placeholder" style={{ width: "90%" }} />
              </div>
              <div className="text-white">
                <p className="instructor">Instructor</p>
              </div>
              <div className="text-white">
                <p>Titulo del curso</p>
              </div>
            </div>
            <div className="contenedor-cursos-inicio border border-white">
              <div className="justify-content-center pt-2 imagen-oferta">
                <img src={Imagen} alt="placeholder" style={{ width: "90%" }} />
              </div>
              <div className="text-white">
                <p className="instructor">Instructor</p>
              </div>
              <div className="text-white">
                <p>Titulo del curso</p>
              </div>
            </div>
            <div className="contenedor-cursos-inicio border border-white">
              <div className="justify-content-center pt-2 imagen-oferta">
                <img src={Imagen} alt="placeholder" style={{ width: "90%" }} />
              </div>
              <div className="text-white">
                <p className="instructor">Instructor</p>
              </div>
              <div className="text-white">
                <p>Titulo del curso</p>
              </div>
            </div>
            <div className="contenedor-cursos-inicio border border-white">
              <div className="justify-content-center pt-2 imagen-oferta">
                <img src={Imagen} alt="placeholder" style={{ width: "90%" }} />
              </div>
              <div className="text-white">
                <p className="instructor">Instructor</p>
              </div>
              <div className="text-white">
                <p>Titulo del curso</p>
              </div>
            </div>
            <div className="contenedor-cursos-inicio border border-white">
              <div className="justify-content-center pt-2 imagen-oferta">
                <img src={Imagen} alt="placeholder" style={{ width: "90%" }} />
              </div>
              <div className="text-white">
                <p className="instructor">Instructor</p>
              </div>
              <div className="text-white">
                <p>Titulo del curso</p>
              </div>
            </div>
            <div className="contenedor-cursos-inicio border border-white">
              <div className="justify-content-center pt-2 imagen-oferta">
                <img src={Imagen} alt="placeholder" style={{ width: "90%" }} />
              </div>
              <div className="text-white">
                <p className="instructor">Instructor</p>
              </div>
              <div className="text-white">
                <p>Titulo del curso</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
