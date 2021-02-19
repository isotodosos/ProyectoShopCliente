import React, {Fragment, useState, useContext, useEffect} from 'react';


import AuthContext from '../../context/auth/authContext';
import LateralContext from '../../context/lateral/lateralContext';

import Articulos from './Articulos';
import Articulo from './Articulo';
import ArticuloNuevo from './ArticuloNuevo';
import Carrito from './Carrito';



const Portada = () => {

    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    const lateralContext = useContext(LateralContext);
    const { lateralnuevop, lateralcarrito, mostrarNuevoP, mostrarCarrito, ocultarNuevoP, ocultarCarrito } = lateralContext;

    
    useEffect(() => {
        usuarioAutenticado();//mientras haya un token en el LocalStorage puedes acceder
        // eslint-disable-next-line react-hooks/exhaustive-deps 
              
                
    },[])

    const clickProductos = () => {
        ocultarNuevoP();
        ocultarCarrito();
    }
    const clickCerrarS = () => {
        ocultarNuevoP();
        ocultarCarrito();
        cerrarSesion();
    }

    
    return(

        <Fragment>

            <header className="app-header">            
                    
                {usuario ? <p className="nombre-usuario">Hola <span>{usuario.alias}</span></p> : null} 
                        
                <div className="nav-botones">
                                            
                    <button
                    className= "btn btn-primario"
                    onClick={() => {clickProductos()}}
                    >Productos</button>

                    { usuario && usuario.email == 'ivan@gmail.com'

                        ?
                        <button
                        className= "btn btn-primario"
                        onClick={() => {mostrarNuevoP()}}
                        >Crear Producto</button>

                        :
                        <button
                        className= "btn btn-primario"
                        onClick={() => {mostrarCarrito()}}
                        >Carrito</button>

                    }
                                  

                    <button
                        className= "btn btn-secundario cerrar-sesion"
                        onClick={() => clickCerrarS()}
                    >Cerrar Sesión</button>

                </div> 
            </header>
            
            <section className="row">

                {lateralnuevop ? <ArticuloNuevo/> : null}
                                    
                <Articulos/>

                {lateralcarrito ? <Carrito/> : null}
                                

            </section>        
                      
                     
                    
        </Fragment>

        
        
    )
}

export default Portada;