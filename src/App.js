import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Detalles from "./components/Detalles";
import Navigation from "./components/Navegacion";
import Slider from "./components/Slider";

import Cursos from "./pages/Cursos";

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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
