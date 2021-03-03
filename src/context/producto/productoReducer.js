import {AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    OBTENER_PRODUCTOS,
    OBTENER_IMAGENES,
    OBTENER_PRODUCTO,
    ACTUALIZAR_PRODUCTO,
    BORRAR_PRODUCTO,
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
        case OBTENER_PRODUCTOS:
            return({
                ...state,
                productos : action.payload
            })
        case OBTENER_IMAGENES:
            return({
                ...state,
                imagenesproducto : [
                    ...state.imagenesproducto,
                    action.payload
                ] 
            })        
        case OBTENER_PRODUCTO:
            return({
                ...state,
                producto : action.payload
            })
        case ACTUALIZAR_PRODUCTO:
            return({
                ...state,
                productos : state.productos.map(producto => (producto._id == action.payload._id) ? action.payload : producto),
                producto: null
            })
        case BORRAR_PRODUCTO:
            return({
                ...state,
                productos : state.productos.filter(producto => (producto._id !== action.payload))
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