import React, { useState, useEffect, useContext } from 'react';

import ProductoContext from '../../context/producto/productoContext';
import AlertaContext from '../../context/alerta/alertaContext';
import LateralContext from '../../context/lateral/lateralContext';

const ArticuloNuevo = () => {

   const alertaContext = useContext(AlertaContext);
   const { alerta, mostrarAlerta } = alertaContext;

   const lateralContext = useContext(LateralContext);
   const { ocultarNuevoP } = lateralContext;

   const productoContext = useContext(ProductoContext);
   const { producto, mensaje, agregarProducto, actualizarProducto } = productoContext;

   useEffect(() => {  

      if(mensaje){
         mostrarAlerta(mensaje.msg, mensaje.categoria);
      }
      
      if(producto !== null ){
         
         handleNuevoProducto(producto)
         
         
      }
      if(producto === null){
         handleNuevoProducto({
            nombre : '',
            precio : '',
            stock : '',
            descripcion : '',
            imagen : ''
         })
     }

     

   }, [ mensaje, producto])

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

   const onChangeFile = (e) => {
      //console.log(e.target.files[0]);
      handleNuevoProducto({
         ...nuevoproducto,
         [e.target.name] : e.target.files[0] 
      });
   }
   
   
   
   const onSubmit = e => {
      e.preventDefault();
      console.log(nuevoproducto)
     
      
      // revisamos si es edicion o es creacion de un producto
      if (producto !== null){

         // Pendiente de arreglar... validamos lo que podemos .trim() no funciona con numeros
         if(nombre.trim() == "" || descripcion.trim() == "" ){
         mostrarAlerta('Hay que rellenar todos los campos', 'alerta-error');
         return;
         }
                  
         //realizamos las acciones para consultar y modificaciones del state
         actualizarProducto(nuevoproducto)

         setTimeout(() => {

            ocultarNuevoP() // con el settimeout le damos tiempo a mostrarse la alerta
       
         }, 1000);

         handleNuevoProducto({
            nombre : '',
            precio : '',
            stock : '',
            descripcion : '',
            imagen : ''
         })
         
         return;
         
      }


      
      // validamos todos los campos
      if(nombre.trim() == "" || precio.trim() == "" || stock.trim() == "" || descripcion.trim() == "" ){
      mostrarAlerta('Hay que rellenar todos los campos', 'alerta-error');
      return;
      }
         
      //realizamos las acciones para consultar y modificaciones del state
      agregarProducto(nuevoproducto)

      setTimeout(() => {

         ocultarNuevoP() // con el settimeout le damos tiempo a mostrarse la alerta
    
      }, 1000);


      handleNuevoProducto({
         nombre : '',
         precio : '',
         stock : '',
         descripcion : '',
         imagen : ''
      })
      
      
      

      
   }

   return(
      
         <div className="col-4 laterales">

            {alerta ? (<div className = {`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}  

            <h1>Nuevo Producto</h1>
            <form
             encType="multipart/form-data"
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
                  className="input-text archivador"
                  id="nuestroinput"
                  //value={imagen}
                  onChange={e => onChangeFile(e)}
               />
               <button
                  type="submit"
                  className="btn btn-primario crearproducto"                   
               >{producto ? 'Editar Producto' : 'Crear Producto'}</button>
            </form>
         </div>
   )
}

export default ArticuloNuevo;