import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Detalles from "./components/Detalles";
import Navigation from "./components/Navegacion";
import NavigationLogin from "./components/NavegacionLogin";
import Slider from "./components/Slider";
import Formulario from "./login/Formulario";
import Cursos from "./pages/Cursos";
import Instructor from "./pages/Instructor";
import MisCursos_docente from "./pages/MisCursos_docente";
import Vista from "./Vistados/Vista";
import VistaLista from "./misCursosinst/VistaLista";
import NavegacionCursos from "./components/NavegacionCursos";
import Estudiante from "./pages/Estudiante";
import VistaListaEstudiantes from "./misCursosEstudiante/VistaListaEstudiantes";
import NavegacionEstudiante from "./components/NavegacionEstudiante";
import ListaCursosParaEstudiantes from "./CursosEstudiante/ListaCursosParaEstudiante";
import MisVideo from "./misCursosEstudiante/MisVideo";
import Administrador from "./pages/Administrador";
import RegistroEstudiante from "./registro_estudiante/RegistroEstudiante";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Navigation />
              <Detalles />
              <Slider />
            </Route>
            <Route path="/cursos">
              <NavegacionCursos />
              <Vista />
            </Route>
            <Route path="/inicio">
              <NavigationLogin />
              <Formulario />
            </Route>
            <Route path="/registro">
              <NavigationLogin />
              <RegistroEstudiante />
            </Route>
           <Route path="/instructor">
              <Instructor />
            </Route>
            <Route path="/VistaInstructor">
              <VistaLista />
            </Route>
            <Route path="/misCursos_docente">
              <MisCursos_docente />
            </Route>
            <Route path="/estudiante">
              <Estudiante />
            </Route>
            <Route path="/VistaEstudiante">
              <VistaListaEstudiantes />
            </Route>
            <Route path="/cursosDisponibles">
              <NavegacionEstudiante />
              <ListaCursosParaEstudiantes />
           
            </Route>
            <Route path="/MisVideo">
              <MisVideo/>
            </Route>
            <Route path="/administrador">
              <Administrador />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
