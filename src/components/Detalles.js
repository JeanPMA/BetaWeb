import React, { Component } from 'react';
import logotipo from "../imagenes/logotipoFinal.png"
class Detalles extends Component{
    render(){
        return(
            
                <div class="Descripcion">
                    <h3 class="Titulo"> A CERCA DE NOSOTROS... <pre></pre> </h3>    
                    <p> BETAWEB es una plataforma de cursos gratuitos  <br></br>
                     dirigida al area de ciencias de la computacion
                    </p>
                    
                    <div class="logo">
                        <a>
                        <img src={logotipo} width="320" height="200"/>
                        
                        </a>
                        </div>                    
                
                </div>
                
                
            
        )
    }
}

export default Detalles;