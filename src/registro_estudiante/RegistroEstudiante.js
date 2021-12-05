import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./RegistroEstudiante.css";

function RegistroEstudiante() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 ms-auto">

                        <form className="form-horizontal" method="post">
                            <br /><br />
                            <fieldset>
                                <legend className="text-white header">REGISTRO ESTUDIANTE</legend>
                                <br /><br />
                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                    <div className="col-md-8 ">
                                        <input id="fname" name="name" type="text" placeholder="Nombre" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="lname" name="name" type="text" placeholder="Apellido Paterno" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="lname" name="name" type="text" placeholder="Apellido Materno" className="form-control" />
                                    </div>
                                </div>

                                <div className="bootstrap-iso">

                                    <div className="col-md-8 col-sm-6 col-xs-12">

                                            <div className="form-group">
                                                <input className="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text" />
                                            </div>

                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="email" name="email" type="text" placeholder="Email " className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user-square bigicon"></i></span>
                                    <div className="col-md-8">
                                        <input id="user" name="usuario" type="text" placeholder="Usuario" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"> <i className="fa fa-fw fa-eye password-icon show-password "></i> </span>
                                    <div className="col-md-8">
                                        <input type="password" name="password" className="form-control password1" value="clave" placeholder="" />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group">
                                    <div className="col-md-8 text-center">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <button type="submit" className="btnn btn-primary btn-lg">Aceptar</button>
                                            </div>
                                            <div class="col-md-4 ms-auto">
                                                <button type="submit" className="btnn btn-primary btn-lg">Cancelar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default RegistroEstudiante;