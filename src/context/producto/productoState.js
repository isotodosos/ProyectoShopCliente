import React, {useReducer} from 'react';

import productoContext from './productoContext';
import productoReducer from './productoReducer';

import {AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    LIMPIAR_MENSAJE} from '../../types';

import axios from 'axios';
import url from '../../config/url';


const ProductoState = (props) => {

    const inicialState = {
        productos : [],
        productoSeleccionado:{},
        fileProducto : null,
        mensaje : null,
    }

    const [state, dispatch] = useReducer ( productoReducer, inicialState);

    //funciones

    const agregarProducto = async datos => {

        //console.log(datos.imagen)
        
        try {
            const resultado = await axios.post(`${url.base}/api/producto/crear-producto`, datos)
            //console.log(resultado.data.producto);

            if(datos.imagen !== '' ){

                
                //crear form data y añadir fichero
                let formData = new FormData();//creamos un formulario y le adjuntamos el archivo
                formData.append(//con append le vinculamos un fichero
                    'imagen',//el nombre del fichero que vinculamos
                    datos.imagen, //el fichero que envio
                    datos.imagen.name //con que nombre se envia 
                );
                
               
                const resultadoFoto = await axios.post(`${url.base}/api/producto/guardar-imagen-producto/${resultado.data.producto._id}`, formData)
                //console.log(resultadoFoto.data.uploadImagenProducto);

                

                dispatch({
                    type : AGREGAR_PRODUCTO_EXITO,
                    payload : resultadoFoto.data.uploadImagenProducto
                })

                return; //tengo que poner un return para que no siga al siguiente dispatch

                                        
                          
                
            }

            dispatch({
                type : AGREGAR_PRODUCTO_EXITO,
                payload : resultado.data.producto
            })
            

            
            
        } catch (error) {
            
            const alerta = {
                msg : 'No se ha podido crear el producto',
                categoria : 'alerta-error'
            }

            dispatch({
                type : AGREGAR_PRODUCTO_ERROR,
                payload : alerta 
            })

            limpiarMensaje()
        }
    }

    //limpiar mensaje
    const limpiarMensaje = () => {
        setTimeout(() => {
            dispatch({
                type : LIMPIAR_MENSAJE
            })
        }, 1000);
    }

    return(
        <productoContext.Provider
            value = {{
                productos : state.productos,
                productoSeleccionado : state.productoSeleccionado,
                fileProducto : state.fileProducto,
                mensaje : state.mensaje,
                agregarProducto,
                limpiarMensaje
            }}
        >{props.children}</productoContext.Provider>
    )

}
export default ProductoState;