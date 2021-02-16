import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Portada from './components/layout/Portada';
import Carrito from './components/layout/Carrito';

import AlertaState from './context/alerta/alertaState';
import AuthState from './context/auth/authState';

import RutaPrivada from './components/ruta/RutaPrivada';// este higher order components le pasa las props al componente Proyectos si autenticado es true

function App() {

 

  return (
    <AuthState>
      <AlertaState>
        <Router>
          <Switch>
            
            <Route exact path ='/' component = {Login}/>
            <Route exact path ='/nueva-cuenta' component = {NuevaCuenta}/>
            <RutaPrivada exact path ='/portada' component = {Portada}/>
            <RutaPrivada exact path ='/carrito' component = {Carrito}/>
            
          </Switch>
        </Router>
      </AlertaState>
    </AuthState>
  );
}

export default App;
