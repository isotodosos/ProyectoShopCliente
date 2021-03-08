import {PONER_PRODUCTO_SELECCIONADO,
    SUMAR_A_TOTAL,
    QUITAR_PRODUCTO_SELECCIONADO,
    RESTAR_A_TOTAL,
    MOSTRAR_MENSAJE_COMPRA,
    OCULTAR_MENSAJE_COMPRA,
    LIMPIAR_CARRITO_TOTAL
    } from '../../types';

export default (state, action) => {

    switch (action.type) {
        case PONER_PRODUCTO_SELECCIONADO:
            return({
                ...state,
                carrito : [...state.carrito,
                action.payload] 
            })
        case SUMAR_A_TOTAL:
            return({
                ...state,
                total :  state.total + action.payload  
            })
        case QUITAR_PRODUCTO_SELECCIONADO:
            return({
                ...state,
                carrito : [...state.carrito.filter(producto => (producto._id !== action.payload._id))] 
            })
        case RESTAR_A_TOTAL:
            return({
                ...state,
                total :  state.total - action.payload  
            })
        case MOSTRAR_MENSAJE_COMPRA:
            return({
                ...state,
                mensajecompra : true
            })
        case OCULTAR_MENSAJE_COMPRA:
            return({
                ...state,
                mensajecompra : false
            })
        case LIMPIAR_CARRITO_TOTAL:
            return({
                carrito : [],
                total : 0,        
                mensajecompra : false
            })
            
         
    
        default:
            return state
    }
}