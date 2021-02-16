import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';

import AlertaContext from '../../context/alerta/alertaContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const {iniciarSesion, mensaje, autenticado} = authContext;
    

    useEffect(() => {
        if(autenticado){
            props.history.push('/portada');
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

    }, [autenticado, mensaje, props.history])


    const[loger, handleLoger] = useState({
        email : '',
        password : ''
    });

    const {email, password} = loger;

    const onChange = (e) => {
       handleLoger({
           ...loger,
           [e.target.name] : e.target.value
       })
      
    }

    const onSubmit = e => {
        e.preventDefault();

        if(email.trim() == '' || password.trim() ==''){
            mostrarAlerta('Ambos campos son obligatorios', 'alerta-error');
            return;
        }

        //hacemos la query

        iniciarSesion({
            email,
            password
        })

    }



    return(
        <div className="form-usuario">
            {alerta ? (<div className = {`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesión</h1>
                <form 
                onSubmit = {onSubmit}                
                >
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
                        type = "password"
                        name = "password"
                        placeholder = 'Password'
                        value = {password}
                        onChange = {(e) => {onChange(e)}}
                        />
                    </div>

                    <div className="campo-form">
                        <button
                        type = "submit"
                        className="btn btn-block btn-primario"
                        value = 'Acceder'
                        >Acceder</button>
                    </div>
                </form>
                <Link to={"/nueva-cuenta"} className="enlace-cuenta">Obtener cuenta</Link>
            </div>
        </div>
    )
}

export default Login;