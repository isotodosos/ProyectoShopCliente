import {OBTENER_NUEVO_P,
    OBTENER_CARRITO,
    OCULTAR_NUEVO_P,
    OCULTAR_CARRITO} from '../../types';

export default (state, action) => {

    switch (action.type) {
        case OBTENER_NUEVO_P:
            return({
                ...state,
                lateralnuevop : true
            })
        case OBTENER_CARRITO:
            return({
                ...state,
                lateralcarrito : true
            })
        case OCULTAR_NUEVO_P:
            return({
                ...state,
                lateralnuevop : false
            })
        case OCULTAR_CARRITO:
            return({
                ...state,
                lateralcarrito : false
            })
            
            
    
        default:
            return state
    }

}