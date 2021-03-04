import React, {useContext, useEffect} from 'react';

import AuthContext from '../../context/auth/authContext';
import ProductoContext from '../../context/producto/productoContext';
import LateralContext from '../../context/lateral/lateralContext';
import CarritoContext from '../../context/carrito/carritoContext';

import Caja from '../../config/caja';

import swal from 'sweetalert';

const Articulo = ({producto}) => {

    const authContext = useContext(AuthContext);
    const { usuario} = authContext;

    const productoContext = useContext(ProductoContext);
    const { imagenesproducto, obtenerImagenes, obtenerProducto, borrarProducto } = productoContext;

    const lateralContext = useContext(LateralContext);
    const { mostrarNuevoP, mostrarCarrito } = lateralContext;

    const carritoContext = useContext(CarritoContext);
    const { sumarproducto } = carritoContext;
    
    const {_id, nombre, precio, stock, descripcion, imagen} = producto;

    useEffect(() => {
        
        obtenerImagenes(imagen)
        
    },[ imagen])

    const editar = id => {
        mostrarNuevoP()
        obtenerProducto(id)

        
    }

    const borrar = id => {
        
        swal({
            title: "¿Seguro que quieres eliminar el producto?",
            text: "Una vez lo elimines no lo podrás recuperar",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                
                borrarProducto(id);

              swal("El producto ha sido eliminado", {
                icon: "success",
              });
            } else {
              swal("¡Tu producto sigue a salvo!");
            }
          });
    }

    
    const serlock = (imagenesproducto, imagen) => {
        const indice = imagenesproducto.findIndex(eachImagenProducto => eachImagenProducto.includes(imagen))
        //console.log(indice);
        if(indice > -1){
            return imagenesproducto[indice]
        }
        else{
            return Caja.falta_imagen;
        }
    }  
    
    const seleccionar = id => {
        
        mostrarCarrito()
        sumarproducto(id)
    }



    return(
        
            

        <div className="listado-tareas  row">

            <div>
                
                <img src={serlock(imagenesproducto, imagen)}  alt={nombre} className="img-producto"/>
                
                 
            </div>
            
            
            <div>
                <h4>{`${nombre} ..... ${precio} €`}</h4>
                <p>{descripcion}</p> 
                {stock < 4 ? <p className="stock"> ¡¡ Solo quedan {stock}!! </p> : null}               
            </div>
            

            { 
                usuario && usuario.email == Caja.administrador

            ?
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

            :
                <div>                
            
                    <button
                        className= "btn btn-primario"
                        onClick={() => {seleccionar(_id)}}
                    >Seleccionar</button>

                </div>


            }
            
        </div>

          
        
        
    )
}

export default Articulo;