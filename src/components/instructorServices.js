import axios from "axios";

const baseUrl = "https://betaweb-back.herokuapp.com/api";
const baseUrl2 = "https://betaweb-back.herokuapp.com/api/usuario";
const instructor = {};
var datapost = {};
var respuesta={};
instructor.create = async (state) => {
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
 if(respuesta[i].username===state.username){
    //alert("El nombre de usuario ya no esta disponible")
    datapost ={
      fecha_nacimiento: "01/01/2020",
    }
    break;
    
 }else if (contador === i + 1) {
 datapost = {
  
  apellido_paterno: state.apellido_paterno,
  apellido_materno: state.apellido_materno,
  email: state.email,
  nombre: state.nombre,
  area_especializacion: state.area_especializacion,
  fecha_nacimiento: state.fecha_nacimiento,
  nivel_estudio: state.nivel_estudio,
   
};
 }

 }
   

 



  const urlPost = baseUrl + "/NewInstructor";

  console.log(datapost);
 // console.log(respuesta);
 
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
