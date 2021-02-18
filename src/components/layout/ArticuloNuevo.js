import React from 'react';

const ArticuloNuevo = () => {

    return(
        
                <div className="col-4 laterales">
                    <h1>Nuevo Producto</h1>
                    <form className="formulario-crear-producto">
                        <input
                           type="text"
                           name="nombre"
                           placeholder="nombre"
                           className="input-text"
                           //value={}
                           //onChange={}
                        />                        
                        <input
                           type="number"
                           name="precio"
                           placeholder="Precio"
                           className="input-text"
                           //value={}
                           //onChange={}
                        />
                        <input
                           type="number"
                           name="stock"
                           placeholder="Stock"
                           className="input-text"
                           //value={}
                           //onChange={}
                        />
                        <textarea                           
                           name="descripcion"
                           placeholder="Descripción"
                           className="input-text"
                           //value={}
                           //onChange={}
                        />                        
                        <input
                           type="file"
                           name="imagen"
                           //placeholder="imagen"
                           //className="input-text archivador"
                           id="nuestroinput"
                           //value={}
                           //onChange={}
                        />
                        <button
                           type="submit"
                           className="btn btn-primario crearproducto"
                        >Crear</button>
                    </form>
                </div>
    )
}

export default ArticuloNuevo;