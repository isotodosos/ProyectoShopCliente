import React, {useContext} from 'react';


import CarritoContext from '../../context/carrito/carritoContext';


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
        color : '#990000'
    }
}));

const Carrito = () => {
    
    const classes = useStyles();

    const carritoContext = useContext(CarritoContext);
    const { carrito } = carritoContext;
    
    

    return(

        

        <div className="col-4 laterales">
            <div className="lista-carrito">
                <h1>Tu Carrito</h1>
                <div className="espacio-producto">    
                {
                carrito.length > 0 
                ?                                   
                
                carrito.map(producto => (
                    
                    <div className="elemento-lista-carrito" key={producto._id}>
                        <IconButton aria-label="delete" className={classes.margin}>
                            <DeleteIcon fontSize="large" className={classes.color} />
                        </IconButton>
                        <h3>{producto.nombre}..........{producto.precio}€</h3>                                            
                        
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