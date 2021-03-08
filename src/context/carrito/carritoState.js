import React, {useReducer} from 'react';

import carritoContext from './carritoContext';
import carritoReducer from './carritoReducer';

import {PONER_PRODUCTO_SELECCIONADO,
    SUMAR_A_TOTAL,
    QUITAR_PRODUCTO_SELECCIONADO,
    RESTAR_A_TOTAL,
    MOSTRAR_MENSAJE_COMPRA,
    OCULTAR_MENSAJE_COMPRA,
    LIMPIAR_CARRITO_TOTAL} from '../../types';

import axios from 'axios';
import url from '../../config/url';


const CarritoState = (props) => {

    const inicialState = {
        carrito : [],
        total : 0,        
        mensajecompra : false
    }

    const [state, dispatch] = useReducer ( carritoReducer, inicialState);

    //funciones

    const sumarProductoALista = async id => {

        try {
            const respuesta = await axios.get(`${url.base}/api/producto/${id}`)
            //console.log(respuesta.data.producto)
            dispatch({
                type : PONER_PRODUCTO_SELECCIONADO,
                payload : respuesta.data.producto
            })
            dispatch({
                type : SUMAR_A_TOTAL,
                payload : respuesta.data.producto.precio
            })
        } catch (error) {
            console.log(error);
        }

    }

    const quitarProductoDeLista = async id => {
        try {
            const respuesta = await axios.get(`${url.base}/api/producto/${id}`) 
            dispatch({
                type : QUITAR_PRODUCTO_SELECCIONADO,
                payload : respuesta.data.producto
            })
            dispatch({
                type : RESTAR_A_TOTAL,
                payload : respuesta.data.producto.precio
            })
        } catch (error) {
            console.log(error);
        }
    }

    const mostrarMensajeCompra = async() => {
        try {

            dispatch({
                type : MOSTRAR_MENSAJE_COMPRA                
            })

            setTimeout(() => {
                dispatch({
                    type : OCULTAR_MENSAJE_COMPRA                
                }) 
                dispatch({
                    type : LIMPIAR_CARRITO_TOTAL                
                }) 
                
            }, 7000);

        } catch (error) {
            console.log(error);
        }
    }

    

    return(
        <carritoContext.Provider
        value = {{
            carrito : state.carrito,
            total : state.total,
            mensajecompra: state.mensajecompra,           
            sumarProductoALista,
            quitarProductoDeLista,
            mostrarMensajeCompra
        }}
    >{props.children}</carritoContext.Provider>
    )
    

}

export default CarritoState;