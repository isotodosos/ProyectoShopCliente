import React, {useReducer} from 'react';

import productoContext from './productoContext';
import productoReducer from './productoReducer';

import {AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    OBTENER_PRODUCTOS,
    OBTENER_IMAGENES,
    OBTENER_PRODUCTO,
    LIMPIAR_MENSAJE} from '../../types';

import axios from 'axios';
import url from '../../config/url';


const ProductoState = (props) => {

    const inicialState = {
        productos : [],
        imagenesproducto : [],
        producto: null, 
        productoparacarrito: null,       
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


    //obtener productos
    const obtenerProductos = async () => {

        try {

            const respuesta = await axios.get(`${url.base}/api/producto/catalogo`)
            //console.log(respuesta.data.productos);

            dispatch({
                type : OBTENER_PRODUCTOS,
                payload : respuesta.data.productos
            })
            
        } catch (error) {
            console.log(error);
        }
    }


    //obtener imagen
    const obtenerImagenes = async (imagen) => {

        try {

            const respuesta = await axios.get(`${url.base}/api/producto/get-imagen/${imagen}`);
            //console.log(respuesta.config.url);

            dispatch({
                type : OBTENER_IMAGENES,
                payload : respuesta.config.url
            })
            
        } catch (error) {
            console.log(error);
        }
    }

    //obtener producto
    const obtenerProducto = async (id) => {

        try {
            const respuesta = await axios.get(`${url.base}/api/producto/${id}`)
            //console.log(respuesta.data.producto)
            dispatch({
                type : OBTENER_PRODUCTO,
                payload : respuesta.data.producto
            })
        } catch (error) {
            console.log(error);
        }
    }

    const actualizarProducto = async (datos) => {
        console.log(datos);
        try {
            
            if( datos.imagen !== null && typeof(datos.imagen) !== 'string'){ 
            
 

                
                //crear form data y añadir fichero
                let formData = new FormData();//creamos un formulario y le adjuntamos el archivo
                formData.append(//con append le vinculamos un fichero
                    'imagen',//el nombre del fichero que vinculamos
                    datos.imagen, //el fichero que envio
                    datos.imagen.name //con que nombre se envia 
                );

                
                               
                const resultadoFoto = await axios.post(`${url.base}/api/producto/guardar-imagen-producto/${datos._id}`, formData)
                console.log(resultadoFoto.data.uploadImagenProducto.imagen);

                datos.imagen = resultadoFoto.data.uploadImagenProducto.imagen;

                //este trozo es el repetido independientemente de la foto
                const respuesta = await axios.put(`${url.base}/api/producto/actualizar/${datos._id}`, datos)
                console.log(respuesta.data.producto)
                return;
                
            }
            
             
            if(datos.imagen === null){
                datos.imagen = 'Falta_imagen.jpg';
            }
            //este trozo es el repetido independientemente de la foto
            const respuesta = await axios.put(`${url.base}/api/producto/actualizar/${datos._id}`, datos)
            console.log(respuesta.data.producto)

          
            


            //dispatch
        } catch (error) {
            console.log(error)
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
                imagenesproducto : state.imagenesproducto,
                producto : state.producto, 
                productoparacarrito : state.productoparacarrito,               
                mensaje : state.mensaje,
                agregarProducto,
                obtenerProductos,
                obtenerImagenes,
                obtenerProducto,
                actualizarProducto,
                limpiarMensaje
            }}
        >{props.children}</productoContext.Provider>
    )

}
export default ProductoState;