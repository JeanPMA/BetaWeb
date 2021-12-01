import axios from "axios";

const baseUrl = "https://betaweb-back.herokuapp.com/api";

const instructor = {};

curso.create = async (state) => {
  const datapost = {
    nombre: state.nombre,
    apellido_paterno: state.apellido_paterno,
    apellido_materno: state.apellido_materno,
    email: state.email, 
    usuario: state.usuario,
    contraseña: state.contraseña,
    area_especializacion: state.area_especializacion,
    nivel_estudio: state.nivel_estudio,
    fecha_nacimiento: state.fecha_nacimiento,
  };


  const urlPost = baseUrl + "/NewInstructor";

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

export default instructor;
