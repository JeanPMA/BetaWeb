import React, { Component } from "react";


import "./App.css";
import Detalles from "./components/Detalles";
import Navigation from "./components/Navegacion";
import OfCursos from "./components/OfCursos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Detalles />
        <OfCursos />
      </div>
    );
  }
}

export default App;
