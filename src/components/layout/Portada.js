import React, {useContext, useEffect} from 'react';

import AuthContext from '../../context/auth/authContext';

import Articulos from './Articulos';
import Articulo from './Articulo';
import ArticuloNuevo from './ArticuloNuevo';

const Portada = () => {

    const authContext = useContext(AuthContext);
    const { cerrarSesion } = authContext;


    return(
        <div>
            <h1>Soy la Portada</h1>
            <Articulos/>
            <Articulo/>
            <ArticuloNuevo/>
            <button
                   className= "btn btn-blank cerrar-sesion"
                   onClick={() => cerrarSesion()}
                >Cerrar Sesión</button>
        </div>
        
        
    )
}

export default Portada;