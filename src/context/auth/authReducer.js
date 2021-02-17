import {REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    LIMPIAR_MENSAJE } from '../../types';

export default (state, action) => {

    switch (action.type) {

        
        case REGISTRO_EXITOSO:
            return({
                ...state,             
                mensaje : action.payload
                
            })
        case REGISTRO_ERROR:
            return({
                ...state,
                autenticado : null,
                mensaje : action.payload,
                cargando : true
            }) 
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token)
            return({
                ...state,
                autenticado : true,
                mensaje : null,
                cargando : false
            })
        case CERRAR_SESION:     
        case LOGIN_ERROR:
            localStorage.removeItem('token')
            return({
                ...state,                
                usuario : null,
                autenticado : null,
                mensaje : action.payload,
                cargando : false
            }) 
        case OBTENER_USUARIO:
            return({
                ...state,
                autenticado : true,
                usuario : action.payload,
                cargando : false
            })  
        case LIMPIAR_MENSAJE:
            return({
                ...state,
                mensaje : null
            })   
        
        default:
            return state;
    }
}   