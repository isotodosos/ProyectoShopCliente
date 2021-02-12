import React from 'react';

import Articulos from './Articulos';
import Articulo from './Articulo';
import ArticuloNuevo from './ArticuloNuevo';

const Portada = () => {

    return(
        <div>
            <h1>Soy la Portada</h1>
            <Articulos/>
            <Articulo/>
            <ArticuloNuevo/>
        </div>
        
        
    )
}

export default Portada;