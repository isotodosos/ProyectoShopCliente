import React, { useState } from 'react';

const ArticuloNuevo = () => {

   const [nuevoproducto, handleNuevoProducto] = useState({
      nombre : '',
      precio : '',
      stock : '',
      descripcion : '',
      imagen : ''
   });

   const { nombre, precio, stock, descripcion, imagen } = nuevoproducto;

   const onChange = (e) => {
      handleNuevoProducto({
         ...nuevoproducto,
         [e.target.name] : e.target.value
      });
   }

   const onSubmit = e => {
      e.preventDefault();
      // validamos todos los campos
      //realizamos las acciones para consultar y modificaciones del state
   }

   return(
      
         <div className="col-4 laterales">
            <h1>Nuevo Producto</h1>
            <form
             className="formulario-crear-producto"
             onSubmit={e => onSubmit(e)}>
               <input
                  type="text"
                  name="nombre"
                  placeholder="nombre"
                  className="input-text"
                  value={nombre}
                  onChange={e => onChange(e)}
               />                        
               <input
                  type="number"
                  name="precio"
                  placeholder="Precio"
                  className="input-text"
                  value={precio}
                  onChange={e => onChange(e)}
               />
               <input
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  className="input-text"
                  value={stock}
                  onChange={e => onChange(e)}
               />
               <textarea                           
                  name="descripcion"
                  placeholder="Descripción"
                  className="input-text"
                  value={descripcion}
                  onChange={e => onChange(e)}
               />                        
               <input
                  type="file"
                  name="imagen"
                  //placeholder="imagen"
                  //className="input-text archivador"
                  id="nuestroinput"
                  value={imagen}
                  onChange={e => onChange(e)}
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