import React, { useReducer } from 'react';

import lateralContext from './lateralContext';
import lateralReducer from './lateralReducer';

import {OBTENER_NUEVO_P,
    OBTENER_CARRITO,
    OCULTAR_NUEVO_P,
    OCULTAR_CARRITO} from '../../types';


const LateralState = (props) => {

    const inicialState = {

        lateralnuevop:false,
        lateralcarrito:false,
        
    }

    const [state, dispatch] = useReducer(lateralReducer, inicialState);

    //funciones
    //mostar lateral : Nuevo producto 
    const mostrarNuevoP = () => {
        dispatch({
            type : OBTENER_NUEVO_P
        })
    }

    //mostar lateral : Carrito 
    const mostrarCarrito = () => {
        dispatch({
            type : OBTENER_CARRITO
        })
    }

    //ocultar lateral : Nuevo producto 
    const ocultarNuevoP = () => {
        dispatch({
            type : OCULTAR_NUEVO_P
        })
    }

    //ocultar lateral : Carrito 
    const ocultarCarrito = () => {
        dispatch({
            type : OCULTAR_CARRITO
        })
    }


    return(

        <lateralContext.Provider
            value={{
                lateralnuevop : state.lateralnuevop,
                lateralcarrito : state.lateralcarrito,
                mostrarNuevoP,
                mostrarCarrito,
                ocultarNuevoP,
                ocultarCarrito

                
            }}
        >{props.children}</lateralContext.Provider>
    )

}
export default LateralState;