import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';

import AlertaContext from '../../context/alerta/alertaContext';
import AuthContext from '../../context/auth/authContext';

const NuevaCuenta = (props) => {

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, registrarUsuario } = authContext;

    useEffect(() => {
        if(autenticado){
            props.history.push('/');
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

    }, [autenticado, mensaje, props.history])

    const[nuevologer, handleNuevoLoger] = useState({
        alias : '',
        email : '',
        direccion : '',
        password : '',
        repite : ''
    });

    const {alias, email, direccion, password, repite} = nuevologer;

    const onChange = (e) => {
        handleNuevoLoger({
           ...nuevologer,
           [e.target.name] : e.target.value
       })
      
    }

    

    const onSubmit = e => {
        e.preventDefault();

        if(alias.trim() == '' || email.trim() == '' || direccion.trim() == '' || password.trim() =='' || repite.trim() == ''){
            mostrarAlerta('Tienes que llenar todos los campos', 'alerta-error');
            return;
        }
        if(password.length < 6){
            mostrarAlerta('La password tiene que tener mínimo 6 dígitos', 'alerta-error');
            return;
        }
        if(password !== repite){
            mostrarAlerta('Las password no son iguales', 'alerta-error');
            return;
        }

        console.log('funcionando');

        //hacemos la query
        registrarUsuario({
            alias,
            email,
            direccion,
            password
        })

        

        
    }

    return(
        <div className="form-usuario"> 

            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}  

            <div className="contenedor-form sombra-dark">                        
                <h1>Registro</h1>
                <form 
                onSubmit = {onSubmit}                
                >

                    <div className="campo-form">
                        <input
                        type = "text"
                        name = "alias"
                        placeholder = 'Alias'
                        value = {alias}
                        onChange = { (e) => {onChange(e)}}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                        type = "email"
                        name = "email"
                        placeholder = 'Email'
                        value = {email}
                        onChange = { (e) => {onChange(e)}}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                        type = "text"
                        name = "direccion"
                        placeholder = 'Tu dirección de envio completa'
                        value = {direccion}
                        onChange = { (e) => {onChange(e)}}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                        type = "password"
                        name = "password"
                        placeholder = 'Password'
                        value = {password}
                        onChange = {(e) => {onChange(e)}}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                        type = "password"
                        name = "repite"
                        placeholder = 'Repite password'
                        value = {repite}
                        onChange = {(e) => {onChange(e)}}
                        />
                    </div>

                    <div className="campo-form">
                        <button
                        type = "submit"
                        className="btn btn-block btn-primario"
                        value = 'Registrarse'
                        >Registrarse</button>
                    </div>
                </form>
                <Link to={"/"} className="enlace-cuenta">Iniciar Sesión</Link>
            </div>
        </div>
    )
}

export default NuevaCuenta;