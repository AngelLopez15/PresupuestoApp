import React, { Fragment, useState } from 'react'
import {Error} from './Error'

export const Pregunta = ({setRestante,setPresupuesto}) => {
    // definir el state
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)
    
    // función que lee el presupuesto
    // el 10 para decir que es base 10
    const definirPresupuesto = (e) =>{
        setCantidad(parseInt(e.target.value, 10))
    }

    // submit para definir el presupuesto
    const agregarPresupuesto = (e) => {
        e.preventDefault()
        // validar que la entrada no sea NAN o cero o numeros negativos
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true)
            return
        }
        // si se pasa la validacion
        setError(false)
        setPresupuesto()
        setRestante()
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="definir presupuesto"
                />
            </form>
        </Fragment>
    )
}