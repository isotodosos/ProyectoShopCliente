import React, {Fragment, useContext, useEffect} from 'react';


import AuthContext from '../../context/auth/authContext';
import LateralContext from '../../context/lateral/lateralContext';
import CarritoContext from '../../context/carrito/carritoContext';

import Articulos from './Articulos';
import ArticuloNuevo from './ArticuloNuevo';
import Carrito from './Carrito';
import Caja from '../../config/caja';



const Portada = () => {

    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    const lateralContext = useContext(LateralContext);
    const { lateralnuevop, lateralcarrito, mostrarNuevoP, mostrarCarrito, ocultarNuevoP, ocultarCarrito } = lateralContext;

    const carritoContext = useContext(CarritoContext);
    const { carrito, total, mensajecompra } = carritoContext;
    
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

                    { usuario && usuario.email == Caja.administrador

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
                                    
                {mensajecompra
                ?
                <div className='mensaje-compra col-12'>
                    <h1>¡Enhorabuena!, tu compra se ha realizado con éxito</h1>
                    <h2>El importe de tu compra por valor de {`${total}`} € se ha cargado a tu tarjeta</h2>
                    <h2>Tu pedido llegará a tu dirección en 24 - 48 h</h2>
                    <h1>Gracias</h1>
                </div> 
                : 
                <Articulos/>
                }

                {lateralcarrito ? <Carrito/> : null}
                                

            </section>        
                      
                     
                    
        </Fragment>

        
        
    )
}

export default Portada;