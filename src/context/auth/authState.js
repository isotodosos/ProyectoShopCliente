import React, { useContext, useReducer } from 'react';

import authContext from './authContext';
import authReducer from './authReducer';

import axios from 'axios';

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
    //registrar usuario
    const registrarUsuario = async datos => {

        try {
           const respuesta = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/usuarios`, datos);
           
           //console.log(respuesta.data);
           const alerta = {
            msg : `${respuesta.data.usuario.alias} te has registrado correctamente !!`,
            categoria : 'alerta-ok'
           }

           dispatch({
            type : REGISTRO_EXITOSO,
            payload : alerta 
           })

        } catch (error) {
            
            
            const alerta = {
                msg : 'Ha habido un error al registrarse',
                categoria : 'alerta-error'
            }

            dispatch({
                type : REGISTRO_ERROR,
                payload : alerta 
            })
            
        }
    }

    return(

        <authContext.Provider
            value = {{
                token : state.token,
                autenticado : state.autenticado,
                usuario : state.usuario,
                mensaje : state.mensaje,
                cargando : state.cargando,
                registrarUsuario
            }}
        >{props.children}</authContext.Provider>
    )
}

export default AuthState;