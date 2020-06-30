import React from 'react'
import {Gasto} from './Gasto'

export const Listado = ({gastos}) => {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gasto=>(
                <Gasto
                    // cuando se itera se debe pasar un id unico
                    key={gasto.id}
                    gasto={gasto}
                />
            ))}
        </div>
    )
}
