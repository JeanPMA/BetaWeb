import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Formulario.css';
class Formulario extends Component {
    
 
  render() {
   
    return (
     
       <div className="maincontainer color">
        <div className="container-fluid">
            <div className="no-gutter">
          <div className="col-md-3 offset-md-4  tam  margin-top: 30%;">
                    <div className="login  py-5">
                       
                        <div className="container">
                            <div className="">
                                <div className="col-lg-5 col-xl-8 mx-auto">
                                    <form>
                                        <div className="mb-3">
                                        <p className="  mb-4">Usuario</p>
                                            <input id="inputEmail" type="Nombre" placeholder="Nombre" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="mb-3">
                                        <p className="  mb-4">Contraseña</p>
                                            <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                      <br></br>
                                        <div className="d-grid gap-2 mt-2 stylee">
                                        <button type="submit" className="btnn  btn-block  mb-2 rounded-pill shadow-sm">Iniciar secion</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
)
};
}
export default Formulario;