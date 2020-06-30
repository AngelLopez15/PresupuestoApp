import React, {useState} from 'react'
import {Error} from './Error'
import shortid from 'shortid'

export const Formulario = ({agregarNuevoGasto}) => {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    // funcion para cuando se agrega un gasto  
    const agregarGasto = e =>{
        e.preventDefault()
        // validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim()==='') {
            setError(true)
            return
        }
        setError(false)
        // construir el gasto
        const gasto ={
            // como se llaman igual el valor y la propiedad se puede solo poner el nombre
            nombre,
            cantidad,
            id: shortid.generate()
        }
        // pasar el gasto al componente principal
        agregarNuevoGasto(gasto)
        // resetear el formulario
        setNombre('')
        setCantidad(0)
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto no valido" /> : null}
            <div className="campo">
                <label>Nombre del gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ejemplo: Transporte"
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad del gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ejemplo: 300"
                    value={cantidad}
                    onChange={e=>setCantidad(parseInt(e.target.value,10))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    )
}
