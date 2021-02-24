import React, {useContext, useEffect} from 'react';

import ProductoContext from '../../context/producto/productoContext';

const Articulo = ({producto}) => {

    const productoContext = useContext(ProductoContext);
    const { obtenerImagen } = productoContext;
    
    const {_id, nombre, precio, stock, descripcion, imagen} = producto;

    useEffect(() => {
        obtenerImagen()
    },[])

    const editar = id => {
        console.log(`editar el id ${id}`)
    }

    const borrar = id => {
        console.log(`borrar el id ${id}`)
    }
    



    return(
        <div className="listado-tareas col-6 row">

            <div>
                <img src={obtenerImagen(imagen)}/> 
            </div>
            
            
            <div>
                <h4>{`${nombre} ................... ${precio} €`}</h4>
                <p>{descripcion}</p>                
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