import axios from "axios";

const baseUrl = "https://betaweb-back.herokuapp.com/api";

const instructor = {};

instructor.create = async (state) => {
  const datapost = {
    
    apellido_paterno: state.apellido_paterno,
    apellido_materno: state.apellido_materno,
    email: state.email,
    nombre: state.nombre,
    area_especializacion: state.area_especializacion,
    fecha_nacimiento: state.fecha_nacimiento,
    nivel_estudio: state.nivel_estudio,
     
  };



  const urlPost = baseUrl + "/NewInstructor";

  console.log(datapost);

  const res = await axios
    .post(urlPost, datapost)
    .then((response) => {
      const data = { success: true, message: response.data };
      console.log(data);
      return data;
    })
    .catch((error) => {
      const data = { success: false, message: error.response.data };
      console.log(data);
      return data;
    });
    
    

  return res;


};

export default instructor;
