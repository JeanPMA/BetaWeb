import axios from "axios";


const baseUrl = "https://betaweb-back.herokuapp.com/api";
const baseUrl2 = "https://betaweb-back.herokuapp.com/api/estudiantesList";


const estudiante2 = {};

var respuesta2={};

estudiante2.create = async (state) => {
 
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
        estudiante: {
          id_estudiante: respuesta2.id_estudiante,
          nombre: state.nombre,
          apellido_paterno: state.apellido_paterno,
          apellido_materno: state.apellido_materno,
          email: state.email,
          fecha_nacimiento:state.fecha_nacimiento
        },
       instructor: null,
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

export default estudiante2;
