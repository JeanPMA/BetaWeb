import axios from "axios";

const baseUrl = "https://betaweb-back.herokuapp.com/api";
const baseUrl2 = "https://betaweb-back.herokuapp.com/api/usuario";
const estudiante = {};
var datapost = {};
var respuesta = {};
estudiante.create = async (state) => {
    await axios
        .get(baseUrl2)
        .then((response) => {
            return response.data;
        })

        .then((response) => {
            var contador = response.length;
            if (response.length > 0) {
                for (var i = 0; i < response.length; i++) {
                    respuesta = response;

                }
            }

        });
    console.log(respuesta)
    for (var i = 0; i < respuesta.length; i++) {
        var contador = respuesta.length;
        if (respuesta[i].username === state.username) {
            //alert("El nombre de usuario ya no esta disponible")
            datapost = {
                fecha_nacimiento: "2020/01/01",
            }
            break;

        } else if (contador === i + 1) {
            datapost = {
                nombre: state.nombre,
                apellido_paterno: state.apellido_paterno,
                apellido_materno: state.apellido_materno,
                fecha_nacimiento: state.fecha_nacimiento,
                email: state.email,
            };
        }

    }
    const urlPost = baseUrl + "/NewEstudiante";

    console.log(datapost);
    // console.log(respuesta);

    const res = await axios

        .post(urlPost, datapost)
        .then((response) => {
            const data = { success: true, message: response.data };
            console.log(data);
            window.location.pathname="/inicio"
            return data;
        })
        .catch((error) => {
            const data = { success: false, message: error.response.data };
            console.log(data);
            return data;
        });

        const datapost2 = {
        
            username: state.username,
            passwd: state.passwd,
            estudiante: {
                
              apellido_paterno: state.apellido_paterno,
              apellido_materno: state.apellido_materno,
              email: state.email,
              nombre: state.nombre,
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
        



    return res;


};

export default estudiante;