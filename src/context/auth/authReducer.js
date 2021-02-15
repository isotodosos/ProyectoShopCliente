import {REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION } from '../../types';

export default (state, action) => {

    switch (action.type) {

        
        case REGISTRO_EXITOSO:
            return({
                ...state,
                autenticado : true,
                mensaje : action.payload
            })
        case REGISTRO_ERROR:
            return({
                ...state,
                autenticado : null,
                mensaje : action.payload
            })    
        
        default:
            return state;
    }
}   