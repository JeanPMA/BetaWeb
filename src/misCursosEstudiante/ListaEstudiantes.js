import React from "react";
import "./Vista.css";



const Lista = () => {
  return (
    <div className="list-group ">
      <div className="col-md-6 col align-self-center">
        <div className="container">
          <div className="row">
            <div className="col-9 text-warning">
              <h3>Mis Cursos</h3>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="col-9 text-white">
              {" "}
              <h4>Nombre</h4>
            </div>
            
          </div>
        </div>
        <a
        
          type="button"
          className="list-group-item list-group-item-action bg-transparent border-bottom"
        >
          <div className="justify-content-between">
            <h5 className="mb-1 text-white">Ia con PyThon</h5>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            
          </div>
        </a>
        <a
         
          type="button"
          className="list-group-item list-group-item-action bg-transparent border-bottom"
        >
          <div className=" justify-content-between">
            <h5 className="mb-1 text-white">Ingenieria de Software</h5>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            
            
          </div>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action bg-transparent border-bottom"
        >
          <div className=" justify-content-between">
            <h5 className="mb-1 text-white">Redes neuronales</h5>
          </div>
          <div className=" gap-2 d-md-flex justify-content-md-end bg-transparent">
            
            
          </div>
        </a>
      </div>
    </div>
  );
};

export default Lista;
