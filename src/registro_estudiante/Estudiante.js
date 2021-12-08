import axios from "axios";

const baseUrl = "https://betaweb-back.herokuapp.com/api/NewEstudiante";
const baseUrl2 = "https://betaweb-back.herokuapp.com/api/NewUser";
const estudiante = {};
var datapost = {};
var respuesta = null;
const baseUrl3 = "https://betaweb-back.herokuapp.com/api/estudiantesList";

 estudiante.create = async (state) => {

    datapost = {
        nombre: state.nombre,
        apellido_paterno: state.apellido_paterno,
        apellido_materno: state.apellido_materno,
        fecha_nacimiento: state.fecha_nacimiento,
        email: state.email,
    };
    
     await axios
        .post(baseUrl, datapost)
        .then( async(response) => {
            console.log(response.data);
            await axios
                .get(baseUrl3)
                .then( async(responses) => {
                    var idestudiante;
                    for (var i = 0; i < responses.data.length; i++) {
                        if (responses.data[i].email === state.email) {
                            idestudiante = responses.data[i].id_estudiante
                        }
                    }
                    var datapost2 = {

                        username: state.username,
                        passwd: state.passwd2,
                        estudiante: {
                            id_estudiante: idestudiante,
                        }
                    }
                    await axios
                        .post(baseUrl2, datapost2)
                        .then( async(respo) => {
                             respuesta=true;
                        }
                        ).catch(error =>{
                           console.log(error);
                        })
                })
        }).catch(error => {
            console.log(error);
        })
        return respuesta;
};

export default estudiante;