import React, {useReducer} from 'react';

import carritoContext from './carritoContext';
import carritoReducer from './carritoReducer';

import {PONER_PRODUCTO_SELECCIONADO,
    QUITAR_PRODUCTO_SELECCIONADO} from '../../types';

import axios from 'axios';
import url from '../../config/url';


const CarritoState = (props) => {

    const inicialState = {
        carrito : [],
        productoseleccionado : null
    }

    const [state, dispatch] = useReducer ( carritoReducer, inicialState);

    //funciones

    const sumarproducto = async id => {

        try {
            const respuesta = await axios.get(`${url.base}/api/producto/${id}`)
            //console.log(respuesta.data.producto)
            dispatch({
                type : PONER_PRODUCTO_SELECCIONADO,
                payload : respuesta.data.producto
            })
        } catch (error) {
            console.log(error);
        }

    }

    return(
        <carritoContext.Provider
        value = {{
            carrito : state.carrito,
            productoseleccionado : state.productoseleccionado,
            sumarproducto
        }}
    >{props.children}</carritoContext.Provider>
    )
    

}

export default CarritoState;