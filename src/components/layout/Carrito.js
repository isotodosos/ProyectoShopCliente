import React, {useEffect, useContext} from 'react';


import CarritoContext from '../../context/carrito/carritoContext';
import LateralContext from '../../context/lateral/lateralContext';


import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    color : {
        color : '#ffffff'
    }
    
}));

const Carrito = () => {
    
    const classes = useStyles();

    

    const carritoContext = useContext(CarritoContext);
    const { carrito, total, quitarProductoDeLista, mostrarMensajeCompra } = carritoContext;

    const lateralContext = useContext(LateralContext);
    const { ocultarCarrito } = lateralContext;

    
    const comprar = () => {
        ocultarCarrito()
        mostrarMensajeCompra()
    }
    

    return(

        

        <div className="col-4 laterales">
            <div className="lista-carrito">
                <h1>Tu Carrito</h1>
                <div className="espacio-producto">    
                {
                    carrito && carrito.length > 0 
                ?                                   
                
                    carrito.map((producto, i) =>  (
                        
                            <div className="elemento-lista-carrito row" key={i}>
                                
                                <div className = "col-3" >
                                    <IconButton aria-label="delete" className={classes.margin} onClick={() => {quitarProductoDeLista(producto._id)}}>
                                        <DeleteIcon fontSize="large" className={classes.color} />
                                    </IconButton>
                                </div>
                                <div className = "col-9">
                                    <h3>{producto.nombre}..........{producto.precio}€</h3>
                                </div>                                                                                                    
                                
                            </div>
                            
                    ))                        
                        
                                              
                :
                    
                    <div className="elemento-lista-carrito">
                        <h1>Tu Carrito esta vacio</h1>
                    </div>
                    
                    
                }                  
                  
                </div>

                {carrito != 0 
                ? 
                <div className="parte-total">
                    <h2>Total ......... {`${total}€`}</h2>

                    <button
                        type="submit"
                        className="btn btn-primario crearproducto"
                        onClick = {() => {comprar()}}
                    >Comprar</button>                       
                </div> 
                :
                null
                }
                  
            </div>
        </div>
    )
}

export default Carrito;