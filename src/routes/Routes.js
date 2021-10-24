import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../login/Formulario';
import Menu from '../pages/Instructor';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/instructor" component={Menu}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;