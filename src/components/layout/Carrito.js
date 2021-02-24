import React from 'react';

const Carrito = () => {

    return(

        <div className="col-4 laterales">
            <h1>Tu Carrito</h1>
            <div className="lista-carrito">
                
                <div className="elemento-lista-carrito">
                    <h3><span><button>X</button></span>  Reloj hombre..........50€</h3>                                            
                    
                </div>

                <h2>Total ......... 100€</h2>

                <button
                    type="submit"
                    className="btn btn-primario crearproducto"
                >Comprar</button>
                    
                
            </div>
        </div>
    )
}

export default Carrito;