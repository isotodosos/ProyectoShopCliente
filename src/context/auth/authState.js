import React, { useReducer } from 'react';

import authContext from './authContext';
import authReducer from './authReducer';

import axios from 'axios';
import tokenAuth from '../../config/token';

import {REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    LIMPIAR_MENSAJE } from '../../types';


const AuthState = (props) => {

    const inicialState = {
        
        
        autenticado : null,
        usuario : null,
        mensaje : null,
        cargando : true
    }
    
    const [ state, dispatch ] = useReducer( authReducer, inicialState);

    

    //funciones
    //registrar usuario en nueva-cuenta
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

           limpiarMensaje()

        } catch (error) {
            
            
            const alerta = {
                msg : 'Ha habido un error al registrarse',
                categoria : 'alerta-error'
            }

            dispatch({
                type : REGISTRO_ERROR,
                payload : alerta 
            })

            limpiarMensaje()
            
        }
    }


    //iniciar sesion
    const iniciarSesion = async datos => {

        try {

            const respuesta = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth`, datos);
            //console.log(respuesta.data);

            dispatch({
                type : LOGIN_EXITOSO,
                payload : respuesta.data
            })

            usuarioAutenticado()
            
        } catch (error) {

            const alerta = {
                msg : 'No has podido logarte',
                categoria : 'alerta-error'
            }

            dispatch({
                type : LOGIN_ERROR,
                payload : alerta 
            })

            limpiarMensaje()
            
        }

    }


    // autenticar un usuario
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if(token){
            // funcion para enviar el token por headers
            
            tokenAuth(token);
        }

        try {
            const respuesta = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/auth`);
            //console.log(respuesta.data.usuario);

            dispatch({
                type : OBTENER_USUARIO,
                payload : respuesta.data.usuario
            })
            
        } catch (error) {
            //console.log(error);
            const alerta = {
                msg : 'No estas autorizado',
                categoria : 'alerta-error'
            }

            dispatch({
                type : LOGIN_ERROR,
                payload : alerta 
            })

            limpiarMensaje()
        }
    }


    // cerrar sesion
    const cerrarSesion = () => {

        const alerta = {
            msg : 'Tu sesión se ha cerrado',
            categoria : 'alerta-ok'
        }

        dispatch({
            type : CERRAR_SESION,
            payload : alerta 
        })

        limpiarMensaje()
    }


    //limpiar mensaje
    const limpiarMensaje = () => {
        setTimeout(() => {
            dispatch({
                type : LIMPIAR_MENSAJE
            })
        }, 1000);
    }

    return(

        <authContext.Provider
            value = {{                
                autenticado : state.autenticado,
                usuario : state.usuario,
                mensaje : state.mensaje,
                cargando : state.cargando,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion,
                limpiarMensaje
            }}
        >{props.children}</authContext.Provider>
    )
}

export default AuthState;