import React,{useEffect, useContext} from 'react';

import ProductoContext from '../../context/producto/productoContext';

const Articulos = () => {

    const productoContext = useContext(ProductoContext);
    const { productos, obtenerProductos } = productoContext;

    useEffect(() => {
        
        
        obtenerProductos()       

    }, [])
 
    if(productos.length === 0){ return(<p>No hay productos en el catálogo</p>)}
    return(
        <div className="central col">
            <h1>Catálogo</h1>
            <div className ="muestrario">
                { 
                productos.map( (elemento, i) => {
                    return(
                        <div key={i}>
                            <p>{elemento.nombre}</p>
                            <p>{`${elemento.precio} €`}</p>
                        </div>
                    )
                    
                })
                }
            </div>
        </div>
    )
}

export default Articulos;