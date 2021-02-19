import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Portada from './components/layout/Portada';


import AlertaState from './context/alerta/alertaState';
import AuthState from './context/auth/authState';
import LateralState from './context/lateral/lateralState';

import RutaPrivada from './components/ruta/RutaPrivada';// este higher order components le pasa las props al componente Proyectos si autenticado es true

function App() {

 

  return (
    <AlertaState>
      <AuthState>
        <LateralState>          
            <Router>
              <Switch>
                
                <Route exact path ='/' component = {Login}/>
                <Route exact path ='/nueva-cuenta' component = {NuevaCuenta}/>
                <RutaPrivada exact path ='/portada' component = {Portada}/>
                
                
              </Switch>
            </Router>          
        </LateralState>
      </AuthState>
    </AlertaState>
  );
}

export default App;
