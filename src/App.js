import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Detalles from "./components/Detalles";
import Navigation from "./components/Navegacion";
import Slider from "./components/Slider";
import Cursos from "./pages/Cursos";
import Instructor from "./pages/Instructor";
import MisCursos_docente from "./pages/MisCursos_docente";


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
              <Cursos />
            </Route>
            <Route path="/instructor">
              <Instructor />
            </Route>
            <Route path="/misCursos_docente">
              <MisCursos_docente />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
