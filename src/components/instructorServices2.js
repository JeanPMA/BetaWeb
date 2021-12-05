import axios from "axios";
import instructor from "./instructorServices";

const baseUrl = "https://betaweb-back.herokuapp.com/api";
const baseUrl2 = "https://betaweb-back.herokuapp.com/api/instructorList";
const baseUrl3 = "https://betaweb-back.herokuapp.com/api/usuario";

const instructor2 = {};

var respuesta2={};

instructor2.create = async (state) => {
 
     await axios
     .get(baseUrl2)
     .then((response) => {
        return response.data;
      })

      .then((response) => {
        var contador = response.length;
        if (response.length > 0) {
          for (var i = 0; i < response.length; i++) {
            if (response[i].email===state.email && i===response.length-1) {
                respuesta2 = response[i];
            }if (contador == i+1 ) {
              //alert("Email ya resgistrado");
              break;
            }
        }
    }
    
});
console.log(respuesta2)
    const datapost2 = {
        
        username: state.username,
        passwd: state.passwd,
        instructor: {
          id_instructor: respuesta2.id_instructor,
          apellido_paterno: state.apellido_paterno,
          apellido_materno: state.apellido_materno,
          email: state.email,
          nombre: state.nombre,
          cursos: []
        },
        estudiante: null,
        admin: null,
      };

 

    const urlPost2 = baseUrl + "/NewUser";
 
    const res2 = await axios
    .post(urlPost2, datapost2)
    .then((response) => {
      const data2 = { success: true, message: response.data };
      
      return data2;
    })
    .catch((error) => {
      const data2 = { success: false, message: error.response.data };
      return data2;
    });
    

  return res2;
};

export default instructor2;
