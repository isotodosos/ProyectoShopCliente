import React, {Fragment, useState, useContext, useEffect} from 'react';


import AuthContext from '../../context/auth/authContext';

import Articulos from './Articulos';
import Articulo from './Articulo';
import ArticuloNuevo from './ArticuloNuevo';
import Carrito from './Carrito';



const Portada = () => {

    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    const [administrador, handleAdministrador] = useState(false);

    useEffect(() => {
        usuarioAutenticado();//mientras haya un token en el LocalStorage puedes acceder
        // eslint-disable-next-line react-hooks/exhaustive-deps 
              
                
    },[])

    
    return(

        <Fragment>

            <header className="app-header">            
                    
                {usuario ? <p className="nombre-usuario">Hola <span>{usuario.alias}</span></p> : null} 
                        
                <div className="nav-botones">
                    
                        
                    <button
                    className= "btn btn-primario"
                    onClick={() => cerrarSesion()}
                    >Productos</button>

                    { usuario && usuario.email == 'ivan@gmail.com'                
                    
                    ?
                    <button
                    className= "btn btn-primario"
                    onClick={() => cerrarSesion()}
                    >Crear Producto</button>

                    :
                    <button
                    className= "btn btn-primario"
                    onClick={() => cerrarSesion()}
                    >Carrito</button>

                    }

                                    

                    <button
                        className= "btn btn-secundario cerrar-sesion"
                        onClick={() => cerrarSesion()}
                    >Cerrar Sesión</button>

                </div> 
            </header>
            <section className="row">

                
                <ArticuloNuevo/>
                <Carrito/>     
                <Articulos/>
                

            </section>        
                      
                     
                    
        </Fragment>

        /*<div>
            <h1>Soy la Portada</h1>
            <Articulos/>
            <Articulo/>
            <ArticuloNuevo/>
            
        </div>*/
        
        
    )
}

export default Portada;