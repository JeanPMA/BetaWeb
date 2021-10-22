import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logoLupa from "../imagenes/logoLupa.png"

class Navigation extends Component{
    render(){
        return(
            
                
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    
                    <a class="navbar-brand" href="#" border-width="medium">                    
                      BETAWEB
                    <img src="https://previews.123rf.com/images/mochipet/mochipet1707/mochipet170700056/82167896-ilustraci%C3%B3n-vectorial-bombilla-con-haces-de-luz-en-estilo-pop-art-dibujos-animados-con-contorno-aisl.jpg" width="30" height="30" class="d-inline-block align-top" alt=""/>                        
                    </a> 

                    <input class="buscador" type="search" id="search" placeholder="Buscar cursos" />   
                    <img src={logoLupa} id="logo_lupa" width="30" height="30"/>

                    <Link to="/cursos" id="boton_buscar" className="btn " type="button">Cursos</Link>                    

                     <Link to="/inicio" id="boton_login" className="btn " type="button">Iniciar Sesión</Link>                   
                </nav>
                
            
        )
    }
}

export default Navigation;