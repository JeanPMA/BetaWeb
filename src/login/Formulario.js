import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Formulario.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const baseUrl="https://backendpruebalogin.herokuapp.com/api/usuarios";
const cookies = new Cookies();

class Formulario extends Component {
    state={
        form:{
            username: '',
            contraseña: ''
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
        await axios.get(baseUrl, {params: {username: this.state.form.username, contraseña: md5(this.state.form.contraseña)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('apellido', respuesta.apellido, {path: "/"});
                cookies.set('email', respuesta.email, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                cookies.set('contraseña', respuesta.contraseña, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`);
                window.location.href="../instructor";
            }else{
                alert('El usuario o la contraseña no son correctos');
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
              name="contraseña"
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
