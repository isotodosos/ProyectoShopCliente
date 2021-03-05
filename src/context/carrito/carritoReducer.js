import {PONER_PRODUCTO_SELECCIONADO,
    QUITAR_PRODUCTO_SELECCIONADO} from '../../types';

export default (state, action) => {

    switch (action.type) {
        case PONER_PRODUCTO_SELECCIONADO:
            return({
                ...state,
                carrito : [...state.carrito,
                action.payload] 
            })
            
         
    
        default:
            return state
    }
}