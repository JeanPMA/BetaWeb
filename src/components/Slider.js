import React, { Component } from "react";
import Carousel from "./Carousel";
import Imagen from "../assets/imagenCurso.jpg";
import axios from "axios";
class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: [],
    };
  }
  componentDidMount() {
    axios.get("https://betaweb-back.herokuapp.com/api/curso").then((resp) => {
      const limit = 8;

      this.setState({
        cursos: resp.data.slice(0, limit),
      });
    });
  }
  render() {
    const { cursos } = this.state;
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
            {" "}
            <Carousel show={4}>
              {cursos.map((curso) => (
                <a href="#popup">
                  <div className="contenedor-cursos-inicio border border-white">
                    <div className="justify-content-center pt-2 imagen-oferta">
                      <img
                        src={curso.ubicacion_img}
                        width="200px"
                        height="120px"
                      />
                    </div>
                    <div className="text-white">
                      <p className="instructor">
                        {curso.instructor.nombre +
                          " " +
                          curso.instructor.apellido_paterno}
                      </p>
                    </div>

                    <div className="text-white">
                      <p>{curso.nombre}</p>
                    </div>
                  </div>
                </a>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
