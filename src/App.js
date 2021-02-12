import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Portada from './components/layout/Portada';
import Carrito from './components/layout/Carrito';

import AlertaState from './context/alerta/alertaState';
import AuthState from './context/auth/authState';

function App() {
  return (
    <AuthState>
      <AlertaState>
        <Router>
          <Switch>
            
            <Route exact path ='/' component = {Login}/>
            <Route exact path ='/nueva-cuenta' component = {NuevaCuenta}/>
            <Route exact path ='/portada' component = {Portada}/>
            <Route exact path ='/carrito' component = {Carrito}/>
            
          </Switch>
        </Router>
      </AlertaState>
    </AuthState>
  );
}

export default App;
