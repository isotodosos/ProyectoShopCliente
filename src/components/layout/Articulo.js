import React, {useContext, useEffect} from 'react';

import AuthContext from '../../context/auth/authContext';
import ProductoContext from '../../context/producto/productoContext';
import LateralContext from '../../context/lateral/lateralContext';

import swal from 'sweetalert';

const Articulo = ({producto}) => {

    const authContext = useContext(AuthContext);
    const { usuario} = authContext;

    const productoContext = useContext(ProductoContext);
    const { imagenesproducto, obtenerImagenes, obtenerProducto, borrarProducto } = productoContext;

    const lateralContext = useContext(LateralContext);
    const { mostrarNuevoP } = lateralContext;
    
    const {_id, nombre, precio, stock, descripcion, imagen} = producto;

    useEffect(() => {
        
        obtenerImagenes(imagen)
        
    },[ imagen])

    const editar = id => {
        mostrarNuevoP()
        obtenerProducto(id)

        //console.log(`editar el id ${id}`)
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
            return '"http://localhost:4000/api/producto/get-imagen/Falta_imagen.jpg"'
        }
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
                usuario && usuario.email == 'ivan@gmail.com'

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
                null

            }
            
        </div>

          
        
        
    )
}

export default Articulo;