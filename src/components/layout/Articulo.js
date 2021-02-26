import React, {useContext, useEffect} from 'react';

import ProductoContext from '../../context/producto/productoContext';

const Articulo = ({producto, posicion}) => {

    const productoContext = useContext(ProductoContext);
    const { imagenesproducto, obtenerImagenes } = productoContext;
    
    const {_id, nombre, precio, stock, descripcion, imagen} = producto;

    useEffect(() => {
        
        obtenerImagenes(imagen)
        
    },[ imagen])

    const editar = id => {
        console.log(`editar el id ${id}`)
    }

    const borrar = id => {
        console.log(`borrar el id ${id}`)
    }

    
        

    return(
        
            

        <div className="listado-tareas  row">

            <div>
                
                <img src={imagenesproducto[posicion]} alt={nombre} className="img-producto"/>
                
                 
            </div>
            
            
            <div>
                <h4>{`${nombre} ..... ${precio} €`}</h4>
                <p>{descripcion}</p> 
                {stock < 4 ? <p className="stock"> ¡¡ Solo quedan {stock}!! </p> : null}               
            </div>
            
            <div>
                <button
                    className= "btn btn-primario"
                    onClick={() => {editar(_id)}}
                >Editar</button>
                <button
                    className= "btn btn-primario"
                    onClick={() => {borrar(_id)}}
                >Borrar</button>
            </div>
        </div>

          
        
        
    )
}

export default Articulo;