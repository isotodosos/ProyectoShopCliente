import React, {useContext} from 'react';


import CarritoContext from '../../context/carrito/carritoContext';

const Carrito = () => {

    const carritoContext = useContext(CarritoContext);
    const { carrito } = carritoContext;
    
    

    return(

        

        <div className="col-4 laterales">
            <div>
                <h1>Tu Carrito</h1>
                <div className="lista-carrito">    
                {
                carrito.length > 0 
                ?                                   
                
                carrito.map(producto => (
                    
                    <div className="elemento-lista-carrito" key={producto._id}>
                        <h3><span><button>X</button></span>{producto.nombre}..........{producto.precio}€</h3>                                            
                        
                    </div>                       
                    
                ))  
                         
                                              
                :
                <div className="elemento-lista-carrito">
                    <h1>Tu Carrito esta vacio</h1>
                </div>
                }
                <h2>Total ......... 100€</h2>

                <button
                    type="submit"
                    className="btn btn-primario crearproducto"
                >Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default Carrito;