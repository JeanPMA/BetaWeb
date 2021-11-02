import React, { Component } from 'react';
import logotipo from "../imagenes/logotipoFinal.png"
class Detalles extends Component{
    render(){
        return(
            
                <div class="Descripcion">
                    <h3 class="Titulo"> ACERCA DE NOSOTROS... <pre></pre> </h3>    
                    <p> BETAWEB es una plataforma de cursos gratuitos,  <br></br>
                     dirigida al área de ciencias de la computación
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