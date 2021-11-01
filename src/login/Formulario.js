import React, { Component, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Formulario.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="https://app-sw.herokuapp.com/api/usuario";

const cookies = new Cookies();

class Formulario extends Component {
   
    state={
        form:{            
            username: '',
            passwd: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, passwd: this.state.form.passwd}})
       


        .then(response=>{
            return response.data;
        })
        .then(response=>{
            var contador=response.length;
            if(response.length>0){ 
                for(var i=0; i<response.length;i++){   
                    
                  if(response[i].username==this.state.form.username && response[i].passwd==this.state.form.passwd) {  
                     

                var respuesta=response[i];                
                cookies.set('id_usuario', respuesta.id_usuario, {path: "/"});
                cookies.set('nombre', respuesta.instructor.nombre, {path: "/"});
                cookies.set('apellido_paterno', respuesta.instructor.apellido_paterno, {path: "/"});
                cookies.set('apellido_materno', respuesta.instructor.apellido_materno, {path: "/"});
                cookies.set('email', respuesta.email, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                cookies.set('passwd', respuesta.passwd, {path: "/"});
                alert(`Bienvenido ${respuesta.instructor.nombre} ${respuesta.instructor.apellido_paterno} ${respuesta.instructor.apellido_materno}`);
                
                window.location.href="../instructor";
                break;
                    }
                    if(contador==i+1){
                        alert('El usuario o la contraseña no son correctos');
                    }
                }
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount(){
        if(cookies.get('username')){
            window.location.href="../instructor";
        }
    }
 
    render() {
        return (
    <div className="containerPrincipal">
        <div className="containerSecundario">
           
          <div className="form-group">
             
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="passwd"
              onChange={this.handleChange}
            />
            <br />
            <button id="boton_iniciarSesion" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          </div>
          
        </div>
    </div>
        );
    }
}
export default Formulario;