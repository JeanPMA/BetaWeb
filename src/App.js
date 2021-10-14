import React, { Component } from "react";

import "./App.css";
import Navigation from "./components/Navegacion";
import OfCursos from "./components/OfCursos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <OfCursos />
      </div>
    );
  }
}

export default App;
