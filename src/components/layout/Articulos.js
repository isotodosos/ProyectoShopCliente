import React,{useEffect, useContext} from 'react';

import Articulo from './Articulo';

import LateralContext from '../../context/lateral/lateralContext';
import ProductoContext from '../../context/producto/productoContext';

const Articulos = () => {

    const productoContext = useContext(ProductoContext);
    const { productos, obtenerProductos, } = productoContext;

    const lateralContext = useContext(LateralContext);
    const { lateralnuevop, lateralcarrito } = lateralContext;

    useEffect(() => {
        
        
        obtenerProductos() 
       
            

    }, [])


 
    if(productos.length === 0){ return(<p>No hay productos en el catálogo</p>)}
    return(
        
        <div className={(lateralnuevop || lateralcarrito)? "col-8": "col-12"}>
            <div className="row">
                <h2 className ="titulo">Catálogo</h2>
                <div className ="col-12 row">
                    {                     

                    productos.map( (producto,i) => {

                        if(producto.imagen == null){
                            producto.imagen = 'Falta_imagen.jpg'
                        }
                        

                        return(
                            <Articulo
                                key = {producto._id}
                                producto = {producto}
                                
                                
                            />
                        )
                        
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Articulos;