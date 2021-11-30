import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logoLupa from "../imagenes/logoLupa.png"

class NavigationLogin extends Component{
    render(){
        return(
            
                
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    
                    <a id="tituloPagina" class="navbar-brand" href="javascript:history.back()" border-width="medium">                    
                      BETAWEB
                    <img src="https://previews.123rf.com/images/mochipet/mochipet1707/mochipet170700056/82167896-ilustraci%C3%B3n-vectorial-bombilla-con-haces-de-luz-en-estilo-pop-art-dibujos-animados-con-contorno-aisl.jpg" width="30" height="30" class="d-inline-block align-top" alt=""/>                        
                    </a> 

                 

                    <Link to="/cursos" id="boton_buscar" className="btn " type="button">Cursos</Link>                    

                     <Link to="/" id="boton_login" className="btn " type="button">Inicio</Link>   
                     <Link to="/registro" id="boton_login" className="btn " type="button">Registrarse</Link>                  
                </nav>
                
            
        )
    }
}

export default NavigationLogin;