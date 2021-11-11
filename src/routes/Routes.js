import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../login/Formulario';
import Instructor from '../pages/Instructor';
import Estudiante from '../pages/Estudiante';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/instructor" component={Instructor}/>
            <Route exact path="/estudiante" component={Estudiante}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;