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
                //alerta : action.payload
            })
        case REGISTRO_ERROR:
            return({
                //alerta : null
            })    
        
        default:
            return state;
    }
}   