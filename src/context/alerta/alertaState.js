import React , {useReducer} from 'react';

import alertaContext from './alertaContext';
import alertaReducer from './alertaReducer';

import {MOSTRAR_ALERTA,
        OCULTAR_ALERTA} from '../../types/index';

const AlertaState = (props) => {
    
    const stateInicial = {
        alerta : null
    }

    const [state, dispatch] = useReducer(alertaReducer, stateInicial);


    //funciones

    const mostrarAlerta = (msg, categoria) => {
        const alerta = {
            msg,
            categoria
        }
        
        dispatch({
            type : MOSTRAR_ALERTA,
            payload : alerta
        })


        setTimeout(() => {
            dispatch({
                type : OCULTAR_ALERTA
            })
        }, 3000);
    }


    return(

        <alertaContext.Provider
            value = {{
                alerta : state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
        
    )
}

export default AlertaState;