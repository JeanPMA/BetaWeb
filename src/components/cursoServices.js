import axios from "axios";

const baseUrl = "https://betaweb-back.herokuapp.com/api";

const curso = {};

curso.create = async (state) => {
  const datapost = {
    nombre: state.nombre,
    descripcion: state.descripcion,
    ubicacion: state.ubicacion,
    video: state.video,
    instructor: state.instructor,
  };

  const urlPost = baseUrl + "/CrearCurso";

  const res = await axios
    .post(urlPost, datapost)
    .then((response) => {
      const data = { success: true, message: response.data };
      console.log(data);
      return data;
    })
    .catch((error) => {
      const data = { success: false, message: error.response.data };
      return data;
    });

  return res;
};

export default curso;
