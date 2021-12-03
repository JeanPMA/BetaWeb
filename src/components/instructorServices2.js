import axios from "axios";
import instructor from "./instructorServices";

const baseUrl = "https://betaweb-back.herokuapp.com/api";


const instructor2 = {};

  

instructor2.create = async (state) => {
  

    const datapost2 = {
    
      username: state.username,
      passwd: state.passwd,
     
      instructor: {
        
        
           
    },
        estudiante: null,
        admin: null,
  };

  console.log(datapost2);

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
