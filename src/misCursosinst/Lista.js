import React from "react";
import "./Vista.css"

const Lista = () => {
  return (
    <div className="list-group " >
         <div className="col-md-6 col align-self-center"  >
        
         <div className="container">
            <div className="row">
                <div className="col-9 text-warning"><h3>Mis Cursos</h3></div>
                     <br/><br/><br/><br/>
                 <div className="col-9 text-white"> <h4>Nombre</h4></div>
                    <div className="col-1 text-white"><h4>Accion</h4></div>
                </div>
                </div>
  <a  
   data-bs-toggle="modal" 
   data-bs-target="#exampleModal" 
   data-bs-whatever="@mdo"
  type="button"
                 className="list-group-item list-group-item-action bg-transparent border-bottom" >
            <div className="justify-content-between">
                        <h5 className="mb-1 text-white">Ia con PyThon</h5>
              </div>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
           <button className="btn btn-lg" type="button"><i className="bi bi-eye amarillo"></i></button>
           <button className="btn btn-lg" type="button"><i className="bi bi-trash-fill rojo"></i></button>
    </div>
  </a>
  <a
     data-bs-toggle="modal" 
     data-bs-target="#exampleModal" 
     data-bs-whatever="@mdo"
    type="button"
  
                className="list-group-item list-group-item-action bg-transparent border-bottom">
             <div className=" justify-content-between">
      <h5 className="mb-1 text-white">Ingenieria de Software</h5>
    
    </div>
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-lg" type="button"><i className="bi bi-eye amarillo"></i></button>
  <button className="btn btn-lg" type="button"><i className="bi bi-trash-fill rojo"></i></button>
</div>
  </a>
  <a href="#" className="list-group-item list-group-item-action bg-transparent border-bottom">
    <div className=" justify-content-between">
      <h5 className="mb-1 text-white">Redes neuronales</h5>
     
    </div>
    <div className=" gap-2 d-md-flex justify-content-md-end bg-transparent">
  <button className="btn btn-lg " type="button"><i className="bi bi-eye amarillo"></i></button>
  <button className="btn btn-lg" type="button"><i className="bi bi-trash-fill rojo"></i></button>
</div>
  </a>
  </div>
</div>
  );
};

export default Lista;