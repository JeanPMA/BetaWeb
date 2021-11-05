import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Detalles from "./components/Detalles";
import Navigation from "./components/Navegacion";
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
              <Navigation />
              <Formulario />
            </Route>
            <Route path="/instructor">
              <Instructor />
            </Route>
            <Route path="/VistaIntructor">
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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
