import React, { useContext, useReducer } from 'react';

import authContext from './authContext';
import authReducer from './authReducer';

import {REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION } from '../../types';


const AuthState = (props) => {

    const inicialState = {
        
        token : null,
        autenticado : null,
        usuario : null,
        mensaje : null,
        cargando : true
    }
    
    const [ state, dispatch ] = useReducer( authReducer, inicialState);

    //funciones

    return(

        <authContext.Provider
            value = {{
                token : state.token,
                autenticado : state.autenticado,
                usuario : state.usuario,
                mensaje : state.mensaje,
                cargando : state.cargando
            }}
        >{props.children}</authContext.Provider>
    )
}

export default AuthState;