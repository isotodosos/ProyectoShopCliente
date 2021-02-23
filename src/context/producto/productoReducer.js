import {AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    LIMPIAR_MENSAJE} from '../../types';

export default (state, action) => {

    switch (action.type) {
        case AGREGAR_PRODUCTO_EXITO:
            return({
                ...state,
                productos : [
                    ...state.productos,
                    action.payload//el objeto action.payload se inserta dentro del arreglo de objetos state.proyectos
                ]
            })
        case AGREGAR_PRODUCTO_ERROR:
            return({
                ...state,
                mensaje : action.payload
            })
        case LIMPIAR_MENSAJE:
            return({
                ...state,
                mensaje : null
            })   
            
    
        default:
            return state
    }
}