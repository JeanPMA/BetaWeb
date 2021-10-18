import Carousel from "./CarouselInstructor";
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
              <div className="justify-content-center pt-2 imagen-oferta"></div>
            </div>
            <div className="border border-white consejo">
              <div className="justify-content-center pt-2 imagen-oferta"></div>
            </div>
            <div className="contenedor-cursos-inicio border border-white consejo">
              <div className="justify-content-center pt-2 imagen-oferta "></div>
            </div>
            <div className=" border border-white consejo">
              <div className="justify-content-center pt-2 imagen-oferta "></div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SliderInstructor;
